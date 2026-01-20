"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/client";
import { Empty } from "@/components/ui/empty";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AudioLines,
  Blocks,
  Brain,
  ClipboardType,
  Link,
  Loader2,
  Phone,
  PhoneOutgoing,
  Users,
} from "lucide-react";
import { EmptyOutline } from "./EmptyOutline";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { CgOrganisation } from "react-icons/cg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { FaGoogle, FaSquarespace, FaVideo } from "react-icons/fa";
import { IntegrationCard } from "@/components/integrations/integration-card";
import { SiCaldotcom, SiCalendly, SiZoho } from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

/* ------------------ Types ------------------ */
type Assistant = {
  id: string;
  user_id: string;
  name: string;
  provider: string | null;
  model: string | null;
  voice_provider: string | null;
  voice: string | null;
  first_message_mode: string | null;
  company_name: string | null;
  country: string | null;
  phone_number: string | null;
  phone_number_location: string | null;

  business_type: string | null;
  ideal_customer: string | null;
  budget_range: string | null;
  competitive_advantage: string | null;
  core_value: string | null;
  expected_outcomes: string | null;
  bad_fit_customers: string | null;

  qualification_questions: any; // jsonb
  website: any; // jsonb
  team: any; // jsonb
  integrations: any; // jsonb

  created_at: string;
  updated_at: string;
};

export function Activeassistants() {
  const supabase = createClient();

  const [assistants, setAssistants] = useState<Assistant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssistants() {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setAssistants([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("assistants")
        .select("*") // ✅ FETCH ALL COLUMNS
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching assistants:", error.message);
        setAssistants([]);
      } else {
        setAssistants(data || []);
      }

      setLoading(false);
    }

    fetchAssistants();
  }, []);

  /* ------------------ Loading ------------------ */
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  /* ------------------ Empty ------------------ */
  if (!assistants.length) {
    return <EmptyOutline />;
  }

  /* ------------------ List ------------------ */
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <Tabs defaultValue="model">
          <Card className="w-full rounded-lg border p-1">
            <TabsList className="bg-transparent px-4 gap-2">
              <TabsTrigger value="model" className="text-md">
                <Brain className="w-4 h-4" />
                Model
              </TabsTrigger>
              <TabsTrigger value="information" className="text-md">
                <ClipboardType className="w-4 h-4" />
                Information
              </TabsTrigger>
              <TabsTrigger value="phone" className="text-md">
                <Phone className="w-4 h-4" />
                Phone number
              </TabsTrigger>
              <TabsTrigger value="intrigration" className="text-md">
                <Blocks className="w-4 h-4" />
                Intrigration
              </TabsTrigger>
            </TabsList>
          </Card>
          <TabsContent value="model">
            <div className="grid gap-6 ">
              {assistants.map((assistant) => (
                <div key={assistant.id} className="border-1 rounded-lg">
                  <CardContent className="p-10">
                    <div className="space-y-3">
                      {/* <div className="flex justify-start items-center gap-2">
                        <h3 className="font-bold text-2xl">{assistant.name}</h3>

                        <Badge
                          variant="secondary"
                          className="text-md text-muted-foreground"
                        >
                          {assistant.provider ?? "—"} · {assistant.model ?? "—"}
                        </Badge>
                      </div> */}
                      <div className="p-5 border-1 rounded-lg gap-3 grid">
                        <h3 className="text-lg font-semibold flex gap-2 items-center">
                          <TbBrain className="w-4 h-4" />
                          Model information
                        </h3>
                        <Separator />

                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Assistance name:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.name}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Assistance model:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.model}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Assistance model provider:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.provider}
                          </h3>
                        </div>
                      </div>
                      {/* <Separator className="my-4" /> */}
                      <div className="p-5 border-1 rounded-lg gap-3 grid">
                        <div className="grid gap-8">
                          <h3 className="text-lg font-semibold flex gap-2 items-center">
                            <IoBusiness className="w-4 h-4" />
                            Business Information
                          </h3>
                          <Separator />
                          <div>
                            <h3 className="font-medium text-md ">
                              1. What type of business are you running, and
                              which industry do you operate in?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.business_type}
                            </h3>
                          </div>
                          <div>
                            <h3 className="font-medium text-md">
                              2. Who is your ideal customer or client?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.ideal_customer}
                            </h3>
                          </div>
                          <div>
                            <h3 className="font-medium text-md">
                              3. What is the ideal budget range of customers you
                              want to work with?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.budget_range}
                            </h3>
                          </div>
                          <div>
                            <h3 className="font-medium text-md">
                              4. Why do customers choose your product or service
                              over competitors?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.competitive_advantage}
                            </h3>
                          </div>
                          <div>
                            <h3 className="font-medium text-md">
                              5. What core value do you deliver to your
                              customers?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.core_value}
                            </h3>
                          </div>
                          <div>
                            <h3 className="font-medium text-md">
                              6. What main outcomes or results do customers
                              expect from working with you?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.expected_outcomes}
                            </h3>
                          </div>
                          <div>
                            <h3 className="font-medium text-md">
                              7. What type of customers are not a good fit for
                              your business?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.bad_fit_customers}
                            </h3>
                          </div>
                          <div>
                            <h3 className="font-medium text-md">
                              8. What industry or type of business are you in?
                            </h3>
                            <h3 className="font-normal text-md text-neutral-400">
                              {assistant.expected_outcomes}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="information">
            {/* RIGHT COLUMN */}
            <div className="grid gap-4">
              {assistants.map((assistant) => (
                <div key={assistant.id} className="border-2 rounded-lg">
                  <CardContent className="p-10">
                    <div className="gap-3 grid">
                      {/* <div className="flex justify-start items-end gap-2">
                        <h3 className="font-bold text-2xl">Motionplex</h3>

                        <Badge
                          variant="secondary"
                          className="text-md text-muted-foreground"
                        >
                          <Link className="w-4 h-4" />
                          <a
                            href={`https://${assistant.website.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-md hover:underline"
                          >
                            {assistant.website.url}
                          </a>
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-md text-muted-foreground"
                        >
                          <AudioLines className="w-5 h-5" />
                          {assistant.voice_provider}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-md text-muted-foreground"
                        >
                          <AudioLines className="w-5 h-5" />
                          {assistant.voice}
                        </Badge>
                      </div> */}
                      <div className="p-5 border-1 rounded-lg gap-3 grid">
                        <h3 className="text-lg font-semibold flex gap-2 items-center">
                          <IoIosInformationCircleOutline className="w-4 h-4" />
                          Information
                        </h3>
                        <Separator />
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Company Name:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.company_name}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Company location:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.country}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5 border-1 rounded-lg gap-3 grid">
                        <h3 className="text-lg font-semibold flex gap-2 items-center">
                          <AudioLines className="w-4 h-4" />
                          Voice
                        </h3>
                        <Separator />
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">Voice:</h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.voice}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Voice provider:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.voice_provider}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5 border-1 rounded-lg gap-3 grid">
                        <h3 className="text-lg font-semibold flex gap-2 items-center">
                          <Link className="w-4 h-4" />
                          Website
                        </h3>
                        <Separator />
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">Website URL:</h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.website.url}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Website provider:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.website.provider}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <h3 className="font-medium text-md ">
                            Website username:
                          </h3>
                          <h3 className="font-normal text-md text-neutral-400">
                            {assistant.website.username}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="phone">
            {/* RIGHT COLUMN */}
            <div className="grid gap-4">
              {assistants.map((assistant) => (
                <div key={assistant.id} className="border-2 rounded-lg">
                  <CardContent className="p-10">
                    <div className="p-5 border-1 rounded-lg gap-3 grid">
                      <h3 className="text-lg font-semibold flex gap-2 items-center">
                        <Phone className="w-4 h-4" />
                        AI Phone number
                      </h3>
                      <Separator />
                      <div className="flex gap-2">
                        <h3 className="font-medium text-md ">
                          Outbound Phone number:
                        </h3>
                        <h3 className="font-normal text-md text-neutral-400">
                          {assistant.phone_number ?? "—"}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <h3 className="font-medium text-md ">
                          Phone number Location:
                        </h3>
                        <h3 className="font-normal text-md text-neutral-400">
                          {assistant.phone_number_location ?? "—"}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="intrigration">
            {/* RIGHT COLUMN */}
            <div className="grid gap-4">
              {assistants.map((assistant) => (
                <div key={assistant.id} className="border-2 rounded-lg">
                  <CardContent className="p-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                      <IntegrationCard
                        title="Cal.com"
                        description="Integrate Cal.com to let users book meetings and consultations directly through your platform with real-time availability."
                        icon={<SiCaldotcom className="h-8 w-8" />}
                      />

                      <IntegrationCard
                        title="Calendly"
                        description="Connect Calendly to allow clients and users to schedule meetings automatically based on your availability."
                        icon={<SiCalendly className="h-7 w-7" />}
                      />

                      <IntegrationCard
                        title="Zoho Booking"
                        description="Enable Zoho Bookings to manage appointments, staff availability, and automated scheduling from one place."
                        icon={<SiZoho className="h-8 w-8" />}
                      />

                      <IntegrationCard
                        title="Squarespace"
                        description="Integrate Squarespace to embed booking forms, landing pages, and scheduling tools directly into your website."
                        icon={<FaSquarespace className="h-7 w-7" />}
                      />
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
