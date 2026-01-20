// import { AudioLines, Brain, TextAlignStart, ClipboardType  } from "lucide-react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
// import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet";
// import { Skeleton } from "./ui/skeleton";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
// import { InputGroupButton } from "./ui/input-group";
// import { IconInfoCircle } from "@tabler/icons-react";
// import { RiGeminiFill } from "react-icons/ri";
// import { PiOpenAiLogoLight } from "react-icons/pi";
// import { VscAzure } from "react-icons/vsc";
// import { SiAnthropic } from "react-icons/si";
// import { Textarea } from "./ui/textarea";

// export function SheetContentass() {
//   return (
//      <SheetContent side="right" className="lg:max-w-screen-lg h-full max-h-screen overflow-y-auto">
//         <SheetHeader>
//           <SheetTitle>Create assistants</SheetTitle>
//           <SheetDescription>
//             Make changes to your profile here. Click save when you&apos;re done.
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid flex-1 auto-rows-min gap-6 px-4">
//           <div className="grid gap-3">
//             <Label htmlFor="sheet-demo-name">Name</Label>
//             <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
//           </div>
//           <Tabs defaultValue="model" className="flex flex-1 flex-col">

//           {/* Mobile Dropdown */}
//           <Select defaultValue="model">
//             <SelectTrigger className="flex w-fit lg:hidden" id="view-selector">
//               <SelectValue placeholder="Select a view" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="model">Model</SelectItem>
//               <SelectItem value="voice">Voice</SelectItem>
//               <SelectItem value="transcriber">Transcriber</SelectItem>
//               <SelectItem value="form">Form</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Desktop Tabs */}
//           <TabsList className="hidden lg:flex">
//             <TabsTrigger value="model"><Brain className="w-4 h-4"/>Model</TabsTrigger>
//             <TabsTrigger value="voice"><AudioLines className="w-4 h-4"/>Voice</TabsTrigger>
//             <TabsTrigger value="transcriber"><TextAlignStart className="w-4 h-4"/>Transcriber</TabsTrigger>
//             <TabsTrigger value="form"><ClipboardType className="w-4 h-4"/>Form</TabsTrigger>
//           </TabsList>

//         {/* Tabs Content */}
//         <div className="flex-1 overflow-hidden border border-double rounded-md overflow-y-auto">
//           <TabsContent value="model" className="overflow-y-auto p-4 lg:p-6">
//              <div className="grid gap-3">
//             <div className="flex justify-between items-center flex-1 gap-3">
//               <div className="gap-3 grid w-full">
//               <Label htmlFor="sheet-demo-username">Provider
//                  <Tooltip>
//             <TooltipTrigger asChild>
//               <InputGroupButton className="rounded-full text-gray-700 hover:text-gray-700" size="icon-xs">
//                 <IconInfoCircle />
//               </InputGroupButton>
//             </TooltipTrigger>
//             <TooltipContent>This is content in a tooltip.</TooltipContent>
//           </Tooltip>
//             </Label>
//               <Select>
//       <SelectTrigger className="w-full">
//         <SelectValue placeholder="Select a fruit" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectItem value="openAI"><PiOpenAiLogoLight />OpenAI</SelectItem>
//           <SelectItem value="azureopenAi"><VscAzure />Azure OpenAi</SelectItem>
//           <SelectItem value="google"><RiGeminiFill />Google</SelectItem>
//           <SelectItem value="anthropic"><SiAnthropic />Anthropic</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select></div>
//      <div className="gap-3 grid w-full">
//     <Label htmlFor="sheet-demo-username">Model
//               <Tooltip>
//             <TooltipTrigger asChild>
//               <InputGroupButton className="rounded-full text-gray-700 hover:text-gray-700" size="icon-xs">
//                 <IconInfoCircle />
//               </InputGroupButton>
//             </TooltipTrigger>
//             <TooltipContent>This is content in a tooltip.</TooltipContent>
//           </Tooltip>

//             </Label>
//     <Select>
//       <SelectTrigger className="w-full">
//         <SelectValue placeholder="Select a fruit" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectItem value="Assistant speaks first">Assistant speaks first</SelectItem>
//           <SelectItem value="Assistant waits for user">Assistant waits for user</SelectItem>
//           <SelectItem value="Assistant speaks first with model generated message">Assistant speaks first with model generated message</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select></div>
//             </div>

//             <div className="flex justify-between items-center flex-1 gap-3">
//               <div className="gap-3 grid w-full">
//               <Label htmlFor="sheet-demo-username">First Massage Model
//                  <Tooltip>
//             <TooltipTrigger asChild>
//               <InputGroupButton className="rounded-full text-gray-700 hover:text-gray-700" size="icon-xs">
//                 <IconInfoCircle />
//               </InputGroupButton>
//             </TooltipTrigger>
//             <TooltipContent>This is content in a tooltip.</TooltipContent>
//           </Tooltip>
//             </Label>
//               <Select>
//       <SelectTrigger className="w-full">
//         <SelectValue placeholder="Select a First Massage Model" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectItem value="Assistant speaks first">Assistant speaks first</SelectItem>
//           <SelectItem value="Assistant waits for user">Assistant waits for user</SelectItem>
//           <SelectItem value="Assistant speaks first with model generated message">Assistant speaks first with model generated message</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select></div>
//             </div>

//             <div className="flex justify-between items-center flex-1 gap-3">
//              <div className="grid w-full gap-3">
//               <Label htmlFor="message">System Prompt<Tooltip>
//             <TooltipTrigger asChild>
//               <InputGroupButton className="rounded-full text-gray-700 hover:text-gray-700" size="icon-xs">
//                 <IconInfoCircle />
//               </InputGroupButton>
//             </TooltipTrigger>
//             <TooltipContent>This is content in a tooltip.</TooltipContent>
//           </Tooltip></Label>
//               <Textarea placeholder="Type your message here." id="message" className="h-80"/>
//              </div>
//              </div>
//           </div>
//           </TabsContent>
//         </div>
//       </Tabs>
//         </div>
//         <SheetFooter>
//           <Button type="submit">Save changes</Button>
//           {/* <SheetClose asChild>
//             <Button variant="outline">Close</Button>
//           </SheetClose> */}
//         </SheetFooter>
//       </SheetContent>
//   )}

"use client";

import { useState } from "react";
import {
  AudioLines,
  Brain,
  TextAlignStart,
  ClipboardType,
  LayoutPanelTop,
  Blocks,
  BadgeQuestionMark,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "./ui/input-group";
import { IconChartBar, IconInfoCircle } from "@tabler/icons-react";
import { RiGeminiFill } from "react-icons/ri";
import { PiOpenAiLogoLight } from "react-icons/pi";
import { VscAzure } from "react-icons/vsc";
import {
  SiAnthropic,
  SiCaldotcom,
  SiCalendly,
  SiElevenlabs,
  SiGodaddy,
  SiGooglemeet,
  SiHostinger,
  SiShopify,
  SiSquarespace,
  SiWebflow,
  SiWix,
  SiZoho,
} from "react-icons/si";
import { Textarea } from "./ui/textarea";
import { FaWeebly, FaWordpress } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { createClient } from "@/lib/client";
import { Toaster } from "@/components/ui/sonner";

/* ------------------ MODEL MAP ------------------ */

const MODELS_BY_PROVIDER: Record<string, { label: string; value: string }[]> = {
  openAI: [
    { label: "GPT 5.2", value: "gpt-5.2" },
    { label: "GPT 5.1", value: "gpt-5.1" },
    { label: "GPT 5", value: "gpt-5" },
    { label: "GPT 5 Mini", value: "gpt-5-mini" },
    { label: "GPT-4o", value: "gpt-4o" },
    { label: "GPT-4.1", value: "gpt-4.1" },
  ],
  azureopenAi: [
    { label: "GPT 5.2", value: "gpt-5.2" },
    { label: "GPT 5.1", value: "gpt-5.1" },
    { label: "GPT 5", value: "gpt-5" },
    { label: "GPT 5 Mini", value: "gpt-5-mini" },
    { label: "GPT 4", value: "gpt-4" },
    { label: "GPT 3.5", value: "gpt-3.5" },
  ],
  google: [
    { label: "Gemini 3", value: "gemini-3" },
    { label: "Gemini 2.5 Flash", value: "gemini-2.5-flash" },
    { label: "Gemini 2.5 Pro", value: "gemini-2.5-pro" },
    { label: "Gemini Flash", value: "gemini-flash" },
  ],
  anthropic: [
    { label: "Claude 4 Opus", value: "claude-4-opus" },
    { label: "Claude 4.5 Sonnet", value: "claude-4.5-sonnet" },
    { label: "Claude 3 Opus", value: "claude-3-opus" },
    { label: "Claude 3 Sonnet", value: "claude-3-sonnet" },
  ],
};

const VOICE_BY_PROVIDER: Record<string, { label: string; value: string }[]> = {
  _11labs: [
    { label: "Will", value: "will" },
    { label: "Manav", value: "manav" },
    { label: "Sunny", value: "sunny" },
    { label: "Sean", value: "sean" },
  ],
  openAI: [
    { label: "Will", value: "will" },
    { label: "Manav", value: "manav" },
    { label: "Sunny", value: "sunny" },
    { label: "Sean", value: "sean" },
  ],
  vapi: [
    { label: "Will", value: "will" },
    { label: "Manav", value: "manav" },
    { label: "Sunny", value: "sunny" },
    { label: "Sean", value: "sean" },
  ],
  rimeAI: [
    { label: "Will", value: "will" },
    { label: "Manav", value: "manav" },
    { label: "Sunny", value: "sunny" },
    { label: "Sean", value: "sean" },
  ],
};

/* ------------------ COMPONENT ------------------ */

export function SheetContentass() {
  const supabase = createClient();
  const [provider, setProvider] = useState<string | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [voice, setVoice] = useState<string | null>(null);
  //cal.com
  const [calcomEnabled, setCalcomEnabled] = useState(false);
  const [calcomEmail, setCalcomEmail] = useState("");
  const [calcomPassword, setCalcomPassword] = useState("");
  const [calcomEventname, setCalcomEventname] = useState("");
  //squarespace
  const [squarespaceEnabled, setSquarespaceEnabled] = useState(false);
  const [squarespaceEmail, setSquarespaceEmail] = useState("");
  const [squarespacePassword, setSquarespacePassword] = useState("");
  const [squarespaceEventname, setSquarespaceEventname] = useState("");
  //calendly
  const [calendlyEnabled, setCalendlyEnabled] = useState(false);
  const [calendlyEmail, setCalendlyEmail] = useState("");
  const [calendlyPassword, setCalendlyPassword] = useState("");
  const [calendlyEventname, setCalendlyEventname] = useState("");
  //zoho_booking
  const [zoho_bookingEnabled, setZoho_bookingEnabled] = useState(false);
  const [zoho_bookingEmail, setZoho_bookingEmail] = useState("");
  const [zoho_bookingPassword, setZoho_bookingPassword] = useState("");
  const [zoho_bookingEventname, setZoho_bookingEventname] = useState("");

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [businessType, setbusinessType] = useState("");
  const [idealCustomer, setidealCustomer] = useState("");
  const [budgetRange, setbudgetRange] = useState("");
  const [competitiveAdvantage, setcompetitiveAdvantage] = useState("");
  const [coreValue, setcoreValue] = useState("");
  const [expectedOutcomes, setexpectedOutcomes] = useState("");
  const [badFitCustomers, setbadFitCustomers] = useState("");
  const [qualificationQuestions, setQualificationQuestions] = useState({
    industry: false,
    business_use_case: false,
    solution_type: false,
    current_solution: false,
    budget: false,
    timeline: false,
    urgency: false,
    decision_maker: false,
  });
  const [voice_provider, setvoice_provider] = useState("");
  const [websiteInfo, setWebsiteInfo] = useState({
    url: "",
    provider: "",
    username: "",
    password: "",
  });

  const isFormValid =
    name.trim() !== "" &&
    provider &&
    model &&
    voice &&
    companyName &&
    country &&
    businessType &&
    idealCustomer &&
    budgetRange &&
    competitiveAdvantage &&
    coreValue &&
    expectedOutcomes &&
    badFitCustomers &&
    voice_provider &&
    websiteInfo.url &&
    websiteInfo.provider &&
    websiteInfo.username &&
    websiteInfo.password;

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  /* ---------- Reset Form ---------- */
  function resetForm() {
    setName("");
    setProvider(null);
    setModel(null);
    setCompanyName("");
    setCountry("");
    setbusinessType("");
    setbudgetRange("");
    setcompetitiveAdvantage("");
    setcoreValue("");
    setexpectedOutcomes("");
    setbadFitCustomers("");

    setConfirmOpen(false);
  }

  /* ---------- Save Handler ---------- */
  async function handleSave() {
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("User not authenticated");

      const { error } = await supabase.from("assistants").insert({
        user_id: user.id,
        name,
        provider,
        model,
        company_name: companyName,
        country: country,
        business_type: businessType,
        ideal_customer: idealCustomer,
        budget_range: budgetRange,
        competitive_advantage: competitiveAdvantage,
        core_value: coreValue,
        expected_outcomes: expectedOutcomes,
        bad_fit_customers: badFitCustomers,
        qualification_questions: qualificationQuestions,
        voice_provider,
        website: websiteInfo,
        integrations: {
          calcom: {
            enabled: calcomEnabled,
            email: calcomEmail,
            password: calcomPassword,
            Eventname: calcomEventname,
          },
          calendly: {
            enabled: calendlyEnabled,
            email: calendlyEmail,
            password: calendlyPassword,
            Eventname: calendlyEventname,
          },
          zoho_booking: {
            enabled: zoho_bookingEnabled,
            email: zoho_bookingEmail,
            password: zoho_bookingPassword,
            Eventname: zoho_bookingEventname,
          },
          squarespace: {
            enabled: squarespaceEnabled,
            email: squarespaceEmail,
            password: squarespacePassword,
            Eventname: squarespaceEventname,
          },
        },
      });

      if (error) throw error;

      resetForm();
      setSheetOpen(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Failed to save assistant");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet
      open={sheetOpen}
      onOpenChange={(open) => {
        setSheetOpen(open);
        if (!open) resetForm();
      }}
    >
      {/* ---------- Trigger ---------- */}
      <SheetTrigger asChild>
        <Button>Create your assistant</Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="lg:max-w-screen-lg h-full max-h-screen overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>Create Assistant</SheetTitle>
          <SheetDescription>
            Configure your assistant here. Click Save when you&apos;re
            done.Watch{" "}
            <a
              href="/workspace/videotutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-red-500"
            >
              video tutorials
            </a>{" "}
            if you need help.
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label>Assistant Name</Label>
            <Input
              required
              placeholder="josn"
              defaultValue="Pedro Duarte"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <Tabs defaultValue="model" className="flex flex-1 flex-col">
            <TabsList className="hidden lg:flex">
              <TabsTrigger value="model">
                <Brain className="w-4 h-4" /> Model
              </TabsTrigger>
              <TabsTrigger value="questions">
                <BadgeQuestionMark className="w-4 h-4" /> Questions
              </TabsTrigger>
              <TabsTrigger value="voice">
                <AudioLines className="w-4 h-4" /> Voice
              </TabsTrigger>
              <TabsTrigger value="website">
                <LayoutPanelTop className="w-4 h-4" /> Website
              </TabsTrigger>

              <TabsTrigger value="intrigration">
                <Blocks className="w-4 h-4" />
                Intrigration
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-hidden border rounded-md overflow-y-auto">
              <TabsContent value="model" className="p-6">
                <div className="grid gap-6 overflow-y-auto">
                  <div className="flex gap-3">
                    {/* PROVIDER */}
                    <div className="grid w-full gap-3">
                      <Label>Company Name</Label>
                      <Input
                        required
                        placeholder="example LLC"
                        defaultValue="Pedro Duarte"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div className="grid w-full gap-3">
                      <Label>Company Location</Label>
                      <Input
                        required
                        placeholder="47 W 13th St, New York, NY 10011, USA"
                        defaultValue="Pedro Duarte"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {/* PROVIDER */}
                    <div className="grid w-full gap-3">
                      <Label>Provider</Label>

                      <Select
                        required
                        value={provider ?? undefined}
                        onValueChange={(v) => {
                          setProvider(v);
                          setModel(null);
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="openAI">
                              <PiOpenAiLogoLight /> OpenAI
                            </SelectItem>
                            <SelectItem value="azureopenAi">
                              <VscAzure /> Azure OpenAI
                            </SelectItem>
                            <SelectItem value="google">
                              <RiGeminiFill /> Google
                            </SelectItem>
                            <SelectItem value="anthropic">
                              <SiAnthropic /> Anthropic
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* MODEL */}
                    <div className="grid w-full gap-3">
                      <Label>Model</Label>

                      <Select
                        value={model ?? undefined}
                        onValueChange={setModel}
                        disabled={!provider}
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={
                              provider
                                ? "Select model"
                                : "Select provider first"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {provider &&
                              MODELS_BY_PROVIDER[provider]?.map((m) => (
                                <SelectItem key={m.value} value={m.value}>
                                  {m.label}
                                </SelectItem>
                              ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex justify-start items-center gap-2">
                      <Label>Business Information</Label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InputGroupButton
                            size="icon-xs"
                            className="text-gray-700 hover:text-gray-700"
                          >
                            <IconInfoCircle />
                          </InputGroupButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          Provide details about your business and customers to
                          help the assistant respond accurately.
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    {/* PROVIDER + MODEL */}
                  </div>
                  <div className="flex justify-between items-center flex-1 gap-3">
                    <div className="grid w-full gap-3">
                      <Label htmlFor="message">
                        What type of business are you running, and which
                        industry do you operate in?
                      </Label>
                      <Textarea
                        required
                        value={businessType}
                        onChange={(e) => setbusinessType(e.target.value)}
                        placeholder="Briefly describe what your company does and what you sell."
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-1 gap-3">
                    <div className="grid w-full gap-3">
                      <Label htmlFor="message">
                        Who is your ideal customer or client?
                      </Label>
                      <Textarea
                        required
                        value={idealCustomer}
                        onChange={(e) => setidealCustomer(e.target.value)}
                        placeholder="Describe your ideal customer profile (industry, company size, and decision-maker level)."
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-1 gap-3">
                    <div className="grid w-full gap-3">
                      <Label htmlFor="message">
                        What is the ideal budget range of customers you want to
                        work with?
                      </Label>
                      <Textarea
                        required
                        value={budgetRange}
                        onChange={(e) => setbudgetRange(e.target.value)}
                        placeholder="Describe the typical budget range of customers you want to work with."
                        id="message"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-1 gap-3">
                    <div className="grid w-full gap-3">
                      <Label htmlFor="message">
                        Why do customers choose your product or service over
                        competitors?
                      </Label>
                      <Textarea
                        required
                        value={competitiveAdvantage}
                        onChange={(e) =>
                          setcompetitiveAdvantage(e.target.value)
                        }
                        placeholder="Explain what differentiates your product or service."
                        id="message"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-1 gap-3">
                    <div className="grid w-full gap-3">
                      <Label htmlFor="message">
                        What core value do you deliver to your customers?
                      </Label>
                      <Textarea
                        required
                        value={coreValue}
                        onChange={(e) => setcoreValue(e.target.value)}
                        placeholder="Describe the primary value your customers receive."
                        id="message"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-1 gap-3">
                    <div className="grid w-full gap-3">
                      <Label htmlFor="message">
                        What main outcomes or results do customers expect from
                        working with you?
                      </Label>
                      <Textarea
                        required
                        value={expectedOutcomes}
                        onChange={(e) => setexpectedOutcomes(e.target.value)}
                        placeholder="Describe the key results customers typically expect."
                        id="message"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-1 gap-3">
                    <div className="grid w-full gap-3">
                      <Label htmlFor="message">
                        What type of customers are not a good fit for your
                        business?
                      </Label>
                      <Textarea
                        required
                        value={badFitCustomers}
                        onChange={(e) => setbadFitCustomers(e.target.value)}
                        placeholder="Describe customers who are not a good fit for your product or service."
                        id="message"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="questions" className="p-6">
                <div className="grid gap-6 ">
                  <div className="grid gap-2">
                    <Label>Prospect Qualification Questions:</Label>
                    <p className="text-muted-foreground text-sm flex-1">
                      Select the questions your assistant will ask to qualify
                      prospects.
                    </p>
                    {/* PROVIDER + MODEL */}
                  </div>

                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="industry"
                      checked={qualificationQuestions.industry}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          industry: !prev.industry,
                        }))
                      }
                    />
                    <Label htmlFor="industry">
                      What industry or type of business are you in?
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="business_use_case"
                      checked={qualificationQuestions.business_use_case}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          business_use_case: !prev.business_use_case,
                        }))
                      }
                    />
                    <Label htmlFor="business_use_case">
                      Can you briefly describe your business or the use case
                      you’re exploring?
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="solution_type"
                      checked={qualificationQuestions.solution_type}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          solution_type: !prev.solution_type,
                        }))
                      }
                    />
                    <Label htmlFor="solution_type">
                      What type of solution are you currently looking for?
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="current_solution"
                      checked={qualificationQuestions.current_solution}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          current_solution: !prev.current_solution,
                        }))
                      }
                    />
                    <Label htmlFor="current_solution">
                      Are you using any solution right now to address this need?
                      If yes, which one?
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="budget"
                      checked={qualificationQuestions.budget}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          budget: !prev.budget,
                        }))
                      }
                    />
                    <Label htmlFor="budget">
                      Do you have an estimated budget allocated for this
                      solution?
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="timeline"
                      checked={qualificationQuestions.timeline}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          timeline: !prev.timeline,
                        }))
                      }
                    />
                    <Label htmlFor="timeline">
                      When are you planning to move forward or get started?
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="urgency"
                      checked={qualificationQuestions.urgency}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          urgency: !prev.urgency,
                        }))
                      }
                    />
                    <Label htmlFor="urgency">
                      How urgent is this requirement for you at the moment?
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="decision_maker"
                      checked={qualificationQuestions.decision_maker}
                      onCheckedChange={() =>
                        setQualificationQuestions((prev) => ({
                          ...prev,
                          decision_maker: !prev.decision_maker,
                        }))
                      }
                    />
                    <Label htmlFor="decision_maker">
                      Are you the primary decision-maker for this purchase?
                    </Label>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="voice" className="p-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label> Voice Configuration</Label>
                    <p className="text-muted-foreground text-sm flex-1">
                      Preview voices in the{" "}
                      <a
                        href="/workspace/voice_libary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-400 hover:text-red-500"
                      >
                        Voice Library
                      </a>
                      , then search and select your chosen voice here.
                    </p>
                    {/* PROVIDER + MODEL */}
                  </div>
                  <div className="flex gap-3">
                    <div className="grid w-full gap-3">
                      <Label>Provider</Label>

                      <Select
                        value={voice_provider ?? undefined}
                        onValueChange={(v) => {
                          setvoice_provider(v);
                          setVoice(null);
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="_11labs">
                              <SiElevenlabs /> 11labs
                            </SelectItem>
                            <SelectItem value="openAI">
                              <VscAzure /> OpenAI
                            </SelectItem>
                            <SelectItem value="vapi">
                              <RiGeminiFill /> Vapi
                            </SelectItem>
                            <SelectItem value="rimeAI">
                              <SiAnthropic /> Rime AI
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid w-full gap-3">
                      <Label>Voice</Label>

                      <Select
                        value={voice ?? undefined}
                        onValueChange={setVoice}
                        disabled={!voice_provider}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={
                              voice_provider
                                ? "Select voice"
                                : "Select provider first"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {voice_provider &&
                              VOICE_BY_PROVIDER[voice_provider]?.map((m) => (
                                <SelectItem key={m.value} value={m.value}>
                                  {m.label}
                                </SelectItem>
                              ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="website" className="p-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label> Website information</Label>
                    <p className="text-muted-foreground text-sm flex-1">
                      Provide your website details so the assistant can connect
                      and function correctly.
                    </p>
                    {/* PROVIDER + MODEL */}
                  </div>
                  <div className="flex gap-3">
                    <div className="grid w-full gap-3">
                      <Label>Website Domain</Label>

                      <InputGroup>
                        <InputGroupInput
                          placeholder="example.com"
                          className="!pl-1"
                          value={websiteInfo.url}
                          onChange={(e) =>
                            setWebsiteInfo((prev) => ({
                              ...prev,
                              url: e.target.value,
                            }))
                          }
                        />
                        <InputGroupAddon>
                          <InputGroupText>https://</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <div className="grid w-full gap-3">
                      <Label>Website Provider</Label>

                      <Select
                        value={websiteInfo.provider}
                        onValueChange={(value) =>
                          setWebsiteInfo((prev) => ({
                            ...prev,
                            provider: value,
                          }))
                        }
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="wix">
                              <SiWix /> Wix
                            </SelectItem>
                            <SelectItem value="squarespace">
                              <SiSquarespace />
                              Squarespace
                            </SelectItem>
                            <SelectItem value="wordPress">
                              <FaWordpress />
                              WordPress
                            </SelectItem>
                            <SelectItem value="shopify">
                              <SiShopify />
                              Shopify
                            </SelectItem>
                            <SelectItem value="hostinger">
                              <SiHostinger />
                              Hostinger
                            </SelectItem>
                            <SelectItem value="goDaddy">
                              <SiGodaddy />
                              GoDaddy
                            </SelectItem>
                            <SelectItem value="weebly">
                              <FaWeebly />
                              Weebly
                            </SelectItem>
                            <SelectItem value="webflow">
                              <SiWebflow />
                              Webflow
                            </SelectItem>
                            <SelectItem value="custom">
                              <MdDashboardCustomize />
                              Custom
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="grid w-full gap-3">
                      <Label>Website Username</Label>

                      <Input
                        type="text"
                        placeholder="Email/username"
                        value={websiteInfo.username}
                        onChange={(e) =>
                          setWebsiteInfo((prev) => ({
                            ...prev,
                            username: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="grid w-full gap-3">
                      <Label>Website Password</Label>

                      <Input
                        type="text"
                        placeholder="Password"
                        value={websiteInfo.password}
                        onChange={(e) =>
                          setWebsiteInfo((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="grid w-full gap-3">
                      <p className="text-muted-foreground text-sm flex-1">
                        If you have trouble submitting your credentials, email
                        them to{" "}
                        <a className="font-bold">support@quliquiai.com</a> and
                        ensure the details are correct for contact form
                        integration.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="intrigration" className="p-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label>Integration</Label>
                    <p className="text-muted-foreground text-sm">
                      Connect your scheduling tool to allow the AI to
                      automatically book meetings with your team.
                    </p>
                  </div>

                  {/* Cal.com Integration */}
                  <div className="flex-1 overflow-hidden border rounded-md p-2">
                    {/* Header */}
                    <div className="flex justify-between items-center gap-4 p-2">
                      <div className="flex items-center gap-4">
                        <div className="border rounded-full p-2">
                          <SiCaldotcom className="w-10 h-10 text-zinc-700" />
                        </div>
                        <p className="text-lg">Cal.com</p>
                      </div>

                      <Switch
                        checked={calcomEnabled}
                        onCheckedChange={setCalcomEnabled}
                      />
                    </div>

                    {/* Animated Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        calcomEnabled
                          ? "max-h-[300px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 translate-y-4"
                      }`}
                    >
                      {calcomEnabled && (
                        <div className="border-t p-4 flex gap-4">
                          <div className="grid gap-2 w-full">
                            <Label>
                              Email
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Cal.com account email
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="email"
                              placeholder="email@example.com"
                              value={calcomEmail}
                              onChange={(e) => setCalcomEmail(e.target.value)}
                            />
                          </div>

                          <div className="grid gap-2 w-full">
                            <Label>
                              Password
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Cal.com account password
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="password"
                              placeholder="••••••••"
                              value={calcomPassword}
                              onChange={(e) =>
                                setCalcomPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="grid gap-2 w-full">
                            <Label>
                              Event Link
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Cal.com event name
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="name"
                              placeholder="https://cal.com/workspacename/eventname"
                              value={calcomEventname}
                              onChange={(e) =>
                                setCalcomEventname(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Calendly Integration */}
                  <div className="flex-1 overflow-hidden border rounded-md p-2">
                    {/* Header */}
                    <div className="flex justify-between items-center gap-4 p-2">
                      <div className="flex items-center gap-4">
                        <div className="border rounded-full p-3">
                          <SiCalendly className="w-8 h-8 text-zinc-700" />
                        </div>
                        <p className="text-lg">Calendly</p>
                      </div>

                      <Switch
                        checked={calendlyEnabled}
                        onCheckedChange={setCalendlyEnabled}
                      />
                    </div>

                    {/* Animated Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        calendlyEnabled
                          ? "max-h-[300px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 translate-y-4"
                      }`}
                    >
                      {calendlyEnabled && (
                        <div className="border-t p-4 flex gap-4">
                          <div className="grid gap-2 w-full">
                            <Label>
                              Email
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Calendly account email
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="email"
                              placeholder="email@example.com"
                              value={calendlyEmail}
                              onChange={(e) => setCalendlyEmail(e.target.value)}
                            />
                          </div>

                          <div className="grid gap-2 w-full">
                            <Label>
                              Password
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Calendly account password
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="password"
                              placeholder="••••••••"
                              value={calendlyPassword}
                              onChange={(e) =>
                                setCalendlyPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="grid gap-2 w-full">
                            <Label>
                              Event Link
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Calendly event link
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="name"
                              placeholder="https://calendly.com/workspacename/eventname"
                              value={calendlyEventname}
                              onChange={(e) =>
                                setCalendlyEventname(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Zoho Booking Integration */}
                  <div className="flex-1 overflow-hidden border rounded-md p-2">
                    {/* Header */}
                    <div className="flex justify-between items-center gap-4 p-2">
                      <div className="flex items-center gap-4">
                        <div className="border rounded-full p-3">
                          <SiZoho className="w-8 h-8 text-zinc-700" />
                        </div>
                        <p className="text-lg">Zoho booking</p>
                      </div>

                      <Switch
                        checked={zoho_bookingEnabled}
                        onCheckedChange={setZoho_bookingEnabled}
                      />
                    </div>

                    {/* Animated Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        zoho_bookingEnabled
                          ? "max-h-[300px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 translate-y-4"
                      }`}
                    >
                      {zoho_bookingEnabled && (
                        <div className="border-t p-4 flex gap-4">
                          <div className="grid gap-2 w-full">
                            <Label>
                              Email
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Zoho booking account email
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="email"
                              placeholder="email@example.com"
                              value={zoho_bookingEmail}
                              onChange={(e) =>
                                setZoho_bookingEmail(e.target.value)
                              }
                            />
                          </div>

                          <div className="grid gap-2 w-full">
                            <Label>
                              Password
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Zoho booking account password
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="password"
                              placeholder="••••••••"
                              value={zoho_bookingPassword}
                              onChange={(e) =>
                                setZoho_bookingPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="grid gap-2 w-full">
                            <Label>
                              Event Link
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your Zoho booking event link
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="name"
                              placeholder="https://zoho.com/workspacename/eventname"
                              value={zoho_bookingEventname}
                              onChange={(e) =>
                                setZoho_bookingEventname(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Squarespace Integration */}
                  <div className="flex-1 overflow-hidden border rounded-md p-2">
                    {/* Header */}
                    <div className="flex justify-between items-center gap-4 p-2">
                      <div className="flex items-center gap-4">
                        <div className="border rounded-full p-3">
                          <SiSquarespace className="w-8 h-8 text-zinc-700" />
                        </div>
                        <p className="text-lg">Squarespace</p>
                      </div>

                      <Switch
                        checked={squarespaceEnabled}
                        onCheckedChange={setSquarespaceEnabled}
                      />
                    </div>

                    {/* Animated Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        squarespaceEnabled
                          ? "max-h-[300px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 translate-y-4"
                      }`}
                    >
                      {squarespaceEnabled && (
                        <div className="border-t p-4 flex gap-4">
                          <div className="grid gap-2 w-full">
                            <Label>
                              Email
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your squarespace account email
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="email"
                              placeholder="email@example.com"
                              value={squarespaceEmail}
                              onChange={(e) =>
                                setSquarespaceEmail(e.target.value)
                              }
                            />
                          </div>

                          <div className="grid gap-2 w-full">
                            <Label>
                              Password
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your squarespace account password
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="password"
                              placeholder="••••••••"
                              value={squarespacePassword}
                              onChange={(e) =>
                                setSquarespacePassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="grid gap-2 w-full">
                            <Label>
                              Event Link
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <InputGroupButton size="icon-xs">
                                    <IconInfoCircle />
                                  </InputGroupButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                  Enter your squarespace event link
                                </TooltipContent>
                              </Tooltip>
                            </Label>

                            <Input
                              type="name"
                              placeholder="https://squarespace.com/workspacename/eventname"
                              value={squarespaceEventname}
                              onChange={(e) =>
                                setSquarespaceEventname(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <SheetFooter>
          <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <DialogTrigger asChild>
              <Button type="button" disabled={!isFormValid || loading}>
                Submit
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ready to submit?</DialogTitle>
                <DialogDescription>
                  <br />
                  <br />
                  Once submitted, this assistant can’t be edited directly. For
                  any changes, contact{" "}
                  <span className="font-medium">support@qualiqai.com</span>
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button variant="outline" onClick={() => setConfirmOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={handleSave} disabled={loading}>
                  {loading ? "Submiting..." : "Yes, Submit"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
