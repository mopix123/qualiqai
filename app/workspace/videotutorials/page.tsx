"use client";
import { Activeassistants } from "@/components/activeassistants";
import { EmptyOutline } from "@/components/EmptyOutline";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { voices } from "@/lib/voices";
import { VoiceCard } from "@/components/voice-card";
import { VoiceToolbar } from "@/components/voice-toolbar";
import VideoTutorials from "@/components/videotutorials";

export default function Page() {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [accent, setAccent] = useState("all");

  const filtered = voices.filter((v) => {
    return (
      v.name.toLowerCase().includes(search.toLowerCase()) &&
      (gender === "all" || v.gender === gender) &&
      (accent === "all" || v.accent === accent)
    );
  });
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-1">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="p-8">
        <div className="pb-8">
          <h3 className="text-2xl font-medium">Video Tutorials</h3>
        </div>
        <VideoTutorials />
      </div>
    </SidebarInset>
  );
}
