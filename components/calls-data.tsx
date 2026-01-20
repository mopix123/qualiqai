"use client";

import { useEffect, useState } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subDays, subMonths, startOfDay, endOfDay } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconBell, IconGitBranch } from "@tabler/icons-react";
import AudioPlayer from "@/components/AudioPlayer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Activity,
  Brain,
  CardSim,
  ChartLine,
  Code,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  ReceiptText,
  RefreshCcwIcon,
  SquarePlay,
} from "lucide-react";
import ChatTranscript from "./ChatTranscript";
import { Badge } from "./ui/badge";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
// ✅ Define Type for Lead Form Table
type LeadForm = {
  id: number;
  created_at: string;
  assistants_id: string;
  phone_numbers_id: string;
  customer_name: string;
  customer_email: string;
  customer_massage: string;
  customer_number: string;
  user_id: string;
  form_id: string;
  status: string;
  call_summary: string;
  call_id: string;
  call_started: string;
  call_ended: string;
  call_recording: string;
  call_endedreason: string;
  messages: string;
  form_submission: string;
  call_duration: string;
  call_status: string;
};

export default function LeadsData() {
  const { user } = useAuth();
  const [leads, setLeads] = useState<LeadForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<LeadForm | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });
  const [preset, setPreset] = useState("all");

  // ✅ Fetch Leads
  useEffect(() => {
    async function fetchLeads() {
      if (!user) return;
      setLoading(true);

      const supabase = createClient();

      let query = supabase
        .from("leadform") // ✅ fixed table name
        .select("*")
        .eq("user_id", user.id)
        .order("id", { ascending: false });

      // ✅ Apply date filter if preset is not "all"
      if (preset !== "all" && dateRange.start && dateRange.end) {
        query = query
          .gte("call_started", dateRange.start.toISOString())
          .lte("call_ended", dateRange.end.toISOString());
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching leads:", error.message);
        setLeads([]);
      } else {
        setLeads(data || []);
      }

      setLoading(false);
    }

    fetchLeads();
  }, [user, preset, dateRange]);

  // ✅ Handle Date Preset Filter
  const handlePresetChange = (value: string) => {
    setPreset(value);
    const today = new Date();

    if (value === "7days") {
      setDateRange({
        start: startOfDay(subDays(today, 7)),
        end: endOfDay(today),
      });
    } else if (value === "30days") {
      setDateRange({
        start: startOfDay(subDays(today, 30)),
        end: endOfDay(today),
      });
    } else if (value === "3months") {
      setDateRange({
        start: startOfDay(subMonths(today, 3)),
        end: endOfDay(today),
      });
    } else {
      setDateRange({ start: null, end: null });
    }
  };

  // ✅ Table Columns
  const columns: ColumnDef<LeadForm>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "customer_name", header: "Customer Name" },
    { accessorKey: "customer_email", header: "Customer Email" },
    { accessorKey: "customer_number", header: "Customer Number" },
    {
      accessorKey: "call_status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("call_status");

        if (status === "answer") {
          return (
            <Badge
              variant="outline"
              className="bg-green-400/20 text-green-400 border-green-500/20 flex items-center gap-1 px-2 py-1"
            >
              <PhoneOutgoing className="h-4 w-4" />
              Answer
            </Badge>
          );
        }

        if (status === "no answer") {
          return (
            <Badge
              variant="outline"
              className="bg-red-500/20 text-red-400 border-red-500/20 flex items-center gap-1 px-2 py-1"
            >
              <PhoneOff className="h-4 w-4" />
              No Answer
            </Badge>
          );
        }
      },
    },
    { accessorKey: "call_duration", header: "Duration" },
    {
      accessorKey: "information",
      header: "Details",
      cell: ({ row }) => {
        const lead = row.original;
        return (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedLead(lead)}
              >
                <IconGitBranch />
                View
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="lg:max-w-screen-md h-full max-h-screen overflow-y-auto"
            >
              <SheetHeader>
                <SheetTitle className="text-lg flex items-center gap-2">
                  <IconGitBranch className="h-5 w-5" />
                  Details information
                </SheetTitle>
                {lead.call_recording && (
                  <AudioPlayer audioUrl={lead.call_recording} />
                )}
                {/* Top Info */}
                {/* <Card>
                <div className="flex items-center gap-4 px-4 py-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{lead.customer_name?.[0] || "?"}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg font-semibold">{lead.customer_name || "Unknown"}</div>
                    <div className="text-sm text-muted-foreground">{lead.customer_email}</div>
                    <div className="text-sm text-muted-foreground">{lead.customer_number}</div>
                  </div>
                </div>
                </Card> */}
                {/* Lead Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex gap-2 text-lg items-center">
                      {" "}
                      <CardSim className="w-5 h-5" strokeWidth={2} />
                      Form Details
                    </CardTitle>
                    <CardDescription className="text-md">
                      Information submitted by the lead via the form.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid">
                    <div className="grid grid-cols-1">
                      {[
                        { key: "customer_name", label: "Name" },
                        { key: "customer_email", label: "Email" },
                        { key: "customer_number", label: "Phone number" },
                        { key: "form_submission", label: "Form submit" },
                        { key: "customer_massage", label: "Massage" },
                      ].map(({ key, label }) => (
                        <div key={key} className="flex flex-row items-center ">
                          <span className="text-md text-muted-foreground font-medium w-30">
                            {label}:
                          </span>
                          <span className="text-md text-foreground ml-1">
                            {String(lead[key as keyof LeadForm] || "-")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* ------- 2 */}
                <div className="grid grid-cols-1 gap-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex gap-2 text-lg items-center">
                        {" "}
                        <PhoneOutgoing className="w-5 h-5" />
                        Call Details
                      </CardTitle>
                      <CardDescription className="text-md">
                        Data about the AI call itself.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid">
                      <div className="grid grid-cols-1">
                        {[
                          { key: "call_id", label: "Call ID" },
                          { key: "call_started", label: "Call Started" },
                          { key: "call_ended", label: "Call Ended" },
                          { key: "call_endedreason", label: "End Reason" },
                        ].map(({ key, label }) => (
                          <div key={key} className="flex flex-row items-center">
                            <span className="text-md text-muted-foreground font-medium w-25">
                              {label}:
                            </span>
                            <span className="text-md text-foreground ml-1">
                              {String(lead[key as keyof LeadForm] || "-")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="grid">
                      <div className="grid grid-cols-1">
                        <CardTitle className="flex gap-2 text-lg items-center">
                          <Code className="w-5 h-5" />
                          Transcript
                        </CardTitle>
                        <CardDescription className="text-md">
                          Automated intelligence generated by AI during/after
                          the call.
                        </CardDescription>
                        {/* <p className="text-sm text-foreground py-2">{lead.messages || "No summary available"}</p> */}
                        <div className="py-4">
                          <ChatTranscript messages={lead.messages} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* ------- 3 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex gap-2 text-lg items-center">
                      <Brain className="w-4 h-4" />
                      AI Insights
                    </CardTitle>
                    <CardDescription>
                      Automated intelligence generated by AI during/after the
                      call.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid">
                    <div className="grid grid-cols-1">
                      <CardTitle className="flex gap-2">
                        <ReceiptText className="w-4 h-4" />
                        Call Summary
                      </CardTitle>
                      <p className="text-sm text-foreground py-2">
                        {lead.call_summary || "No summary available"}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* ------- 4 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex gap-2">
                      <ChartLine className="w-5 h-5" />
                      Outcomes
                    </CardTitle>
                    <CardDescription>
                      Important details captured during the conversation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid">
                    <div className="grid grid-cols-1">
                      <CardTitle className="flex gap-2">
                        <ReceiptText className="w-4 h-4" />
                        Call Summary
                      </CardTitle>
                      <p className="text-sm text-foreground py-2">
                        {lead.call_summary || "No summary available"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        );
      },
    },
  ];

  const table = useReactTable({
    data: leads,
    columns,
    state: { globalFilter: searchTerm },
    onGlobalFilterChange: setSearchTerm,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, _columnId, filterValue) => {
      const value = `${row.original.customer_name} ${row.original.customer_email}`;
      return value.toLowerCase().includes(filterValue.toLowerCase());
    },
  });

  return (
    <div className="w-full space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <Input
          placeholder="Search by Name or Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />

        <Select value={preset} onValueChange={handlePresetChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      {loading ? (
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {[...Array(10)].map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_, j) => (
                    <TableCell key={j}>
                      <Skeleton className="h-6 w-[180px]" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : table.getRowModel().rows.length === 0 ? (
        <div className="flex h-full min-h-[70vh] border-1 rounded-lg justify-center items-center from-muted/50 to-background bg-gradient-to-b from-30%">
          {/* <p className="text-center text-muted-foreground text-lg">
             No leads found.
           </p> */}

          <Empty className="from-muted/50 to-background h-full  from-30%">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <PhoneMissed />
              </EmptyMedia>
              <EmptyTitle>No call log available</EmptyTitle>
              <EmptyDescription>
                Call history will appear here once calls are made.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" size="sm" className="">
                <a
                  href="/workspace/videotutorials"
                  className="flex justify-center items-center gap-2"
                >
                  <SquarePlay /> Tutorials
                </a>
              </Button>
            </EmptyContent>
          </Empty>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
