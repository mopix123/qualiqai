"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type IntegrationCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function IntegrationCard({
  title,
  description,
  icon,
}: IntegrationCardProps) {
  const [isEnabled, setIsEnabled] = useState();

  return (
    <div className="rounded-lg border shadow-sm p-5 flex flex-col justify-between gap-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="flex items-center justify-between pt-3 border-t">
        <span className="text-xs text-muted-foreground">
          No extra plugin required
        </span>

        <Badge
          variant={enabled ? "default" : "secondary"}
          className={enabled ? "bg-green-500 text-white" : ""}
        >
          {enabled ? "Active" : "Inactive"}
        </Badge>
      </div> */}
    </div>
  );
}
