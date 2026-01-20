"use client";

import { useEffect, useState } from "react";
import { IconArrowDownRight, IconTrendingUp } from "@tabler/icons-react";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/client";
import { useAuth } from "@/contexts/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";
import { DateRange } from "react-day-picker";

// Imports for the shadcn/ui chart
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// ---------------- TYPES ----------------
type LeadForm = {
  id: number;
  created_at: string;
  customer_name: string;
  customer_number: string;
  call_id: string;
  user_id: string;
  duration?: string | null;
};

// ---------------- MAIN COMPONENT ----------------
export default function LeadAnalyticsDashboard() {
  const { user } = useAuth();

  // --- CHANGE 1: Set the default filter to "30_days" ---
  const [filter, setFilter] = useState("30_days");

  // --- CHANGE 2: Set the default dateRange to the last 30 days ---
  const [dateRange, setDateRange] = useState<DateRange>(() => {
    const to = new Date();
    const from = new Date();
    from.setDate(to.getDate() - 30);
    return { from, to };
  });

  const [stats, setStats] = useState({
    totalLeads: 0,
    successfulCalls: 0,
    failedCalls: 0,
    successRate: 0,
    totalDuration: 0,
  });

  const [percentChange, setPercentChange] = useState({
    totalLeads: 0,
    successfulCalls: 0,
    failedCalls: 0,
    successRate: 0,
    totalDuration: 0,
  });

  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (type: string) => {
    setFilter(type);
    const today = new Date();
    let fromDate = new Date();

    switch (type) {
      case "all_time":
        fromDate = new Date(0);
        break;
      case "7_days":
        fromDate.setDate(today.getDate() - 7);
        break;
      case "30_days":
        fromDate.setDate(today.getDate() - 30);
        break;
      case "3_months":
        fromDate.setMonth(today.getMonth() - 3);
        break;
    }
    setDateRange({ from: fromDate, to: today });
  };

  useEffect(() => {
    async function fetchLeadStats() {
      if (!user || !dateRange.from || !dateRange.to) return;
      setLoading(true);

      const supabase = createClient();
      const from = dateRange.from;
      const to = dateRange.to;

      const { data: currentData } = await supabase
        .from("leadform")
        .select("*")
        .eq("user_id", user.id)
        .gte("created_at", from.toISOString())
        .lte("created_at", to.toISOString());

      const calcStats = (data: LeadForm[]) => {
        const totalLeads = data.filter(
          (lead) =>
            lead.customer_name?.trim() !== "" &&
            lead.customer_number?.trim() !== ""
        ).length;
        const successfulCalls = data.filter(
          (lead) => lead.call_id && lead.call_id.trim() !== ""
        ).length;
        const failedCalls = data.filter(
          (lead) => !lead.call_id || lead.call_id.trim() === ""
        ).length;
        const totalCalls = successfulCalls + failedCalls;
        const successRate =
          totalCalls > 0 ? Math.round((successfulCalls / totalCalls) * 100) : 0;
        const totalDuration = data.reduce((sum, lead) => {
          if (!lead.duration) return sum;
          const mins = parseInt(lead.duration.replace(" mins", "").trim(), 10);
          return sum + (isNaN(mins) ? 0 : mins);
        }, 0);
        return {
          totalLeads,
          successfulCalls,
          failedCalls,
          successRate,
          totalDuration,
        };
      };

      const currentStats = calcStats(currentData || []);
      setStats(currentStats);

      if (filter === "all_time") {
        setPercentChange({
          totalLeads: 0,
          successfulCalls: 0,
          failedCalls: 0,
          successRate: 0,
          totalDuration: 0,
        });
      } else {
        const diffDays = Math.ceil(
          (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)
        );
        const prevFrom = new Date(from);
        prevFrom.setDate(from.getDate() - diffDays);
        const prevTo = new Date(from);
        prevTo.setDate(prevTo.getDate() - 1);

        const { data: prevData } = await supabase
          .from("leadform")
          .select("*")
          .eq("user_id", user.id)
          .gte("created_at", prevFrom.toISOString())
          .lt("created_at", prevTo.toISOString());

        const previousStats = calcStats(prevData || []);
        const calcChange = (current: number, prev: number) => {
          if (prev === 0) return current > 0 ? 100 : 0;
          return Math.round(((current - prev) / prev) * 100);
        };
        setPercentChange({
          totalLeads: calcChange(
            currentStats.totalLeads,
            previousStats.totalLeads
          ),
          successfulCalls: calcChange(
            currentStats.successfulCalls,
            previousStats.successfulCalls
          ),
          failedCalls: calcChange(
            currentStats.failedCalls,
            previousStats.failedCalls
          ),
          successRate: calcChange(
            currentStats.successRate,
            previousStats.successRate
          ),
          totalDuration: calcChange(
            currentStats.totalDuration,
            previousStats.totalDuration
          ),
        });
      }

      const groupedByDate: Record<
        string,
        { totalLeads: number; successfulCalls: number }
      > = {};
      (currentData || []).forEach((lead) => {
        const date = new Date(lead.created_at).toISOString().split("T")[0];
        if (!groupedByDate[date]) {
          groupedByDate[date] = { totalLeads: 0, successfulCalls: 0 };
        }
        groupedByDate[date].totalLeads += 1;
        if (lead.call_id && lead.call_id.trim() !== "") {
          groupedByDate[date].successfulCalls += 1;
        }
      });
      const sorted = Object.entries(groupedByDate)
        .map(([date, values]) => ({ date, ...values }))
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      setChartData(sorted);
      setLoading(false);
    }
    fetchLeadStats();
  }, [user, dateRange, filter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-auto min-w-[180px] rounded-md">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all_time">All Time</SelectItem>
            <SelectItem value="7_days">Last 7 Days</SelectItem>
            <SelectItem value="30_days">Last 30 Days</SelectItem>
            <SelectItem value="3_months">Last 3 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <StatCard
          title="Total Leads"
          value={stats.totalLeads}
          change={percentChange.totalLeads}
          loading={loading}
          description="Form fill-ups"
          filter={filter}
        />
        <StatCard
          title="Successful Calls"
          value={stats.successfulCalls}
          change={percentChange.successfulCalls}
          loading={loading}
          description="Completed calls"
          filter={filter}
        />
        <StatCard
          title="Failed Calls"
          value={stats.failedCalls}
          change={percentChange.failedCalls}
          loading={loading}
          description="Unanswered calls"
          filter={filter}
        />
        <StatCard
          title="Success Rate (%)"
          value={`${stats.successRate}%`}
          change={percentChange.successRate}
          loading={loading}
          description="Performance"
          filter={filter}
        />
        <StatCard
          title="Total Duration (min)"
          value={`${stats.totalDuration}`}
          change={percentChange.totalDuration}
          loading={loading}
          description="Call time"
          filter={filter}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard
          title="Total Leads Captured per Day"
          data={chartData}
          dataKey="totalLeads"
          color="var(--chart-1)"
        />
        <ChartCard
          title="Successful Calls per Day"
          data={chartData}
          dataKey="successfulCalls"
          color="var(--chart-2)"
        />
      </div>
    </div>
  );
}

// ----------------- SUB COMPONENTS -----------------
// (StatCard and ChartCard components remain unchanged from the previous version)
function StatCard({
  title,
  value,
  change,
  description,
  loading,
  filter,
}: {
  title: string;
  value: any;
  change: number;
  description: string;
  loading: boolean;
  filter: string;
}) {
  const isPositive = change >= 0;
  return (
    <Card className="bg-gradient-to-br from-muted/30 to-background border shadow-sm">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold flex items-center justify-between">
          {loading ? <Skeleton className="h-8 w-[120px]" /> : value}
        </CardTitle>
        <CardAction>
          {loading ? (
            <Skeleton className="h-5 w-[65px]" />
          ) : (
            filter !== "all_time" && (
              <Badge variant="outline" className="flex items-center gap-1">
                {isPositive ? (
                  <TrendingUp className="text-green-500 w-4 h-4" />
                ) : (
                  <IconArrowDownRight className="text-red-500 w-4 h-4" />
                )}
                <span
                  className={isPositive ? "text-green-500" : "text-red-500"}
                >
                  {Math.abs(change)}%
                </span>
              </Badge>
            )
          )}
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        {filter !== "all_time" && (
          <>
            <div className="line-clamp-1 flex gap-2 font-medium">
              {isPositive ? "Trending up" : "Trending down"}
              <IconTrendingUp
                className={`size-4 ${
                  isPositive ? "text-green-500" : "text-red-500"
                }`}
              />
            </div>
            <div className="text-muted-foreground">{description}</div>
          </>
        )}
        {filter === "all_time" && (
          <div className="text-muted-foreground">{description}</div>
        )}
      </CardFooter>
    </Card>
  );
}

function ChartCard({
  title,
  data,
  dataKey,
  color,
}: {
  title: string;
  data: any[];
  dataKey: string;
  color: string;
}) {
  const toLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };
  const chartConfig = {
    [dataKey]: { label: toLabel(dataKey), color: color },
  } satisfies ChartConfig;

  return (
    <Card className="bg-gradient-to-br from-muted/30 to-background border shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[250px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{ left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <defs>
                <linearGradient
                  id={`fill-${dataKey}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area
                dataKey={dataKey}
                type="monotone"
                fill={`url(#fill-${dataKey})`}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
