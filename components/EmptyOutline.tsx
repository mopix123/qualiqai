import { IconCloud, IconFolderCode } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowUpRightIcon, Bot } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SheetContentass } from "./sheetcontentass";
import { useState } from "react";

export function EmptyOutline() {
  const [sheetOpen, setSheetOpen] = useState(true);

  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bot />
        </EmptyMedia>
        <EmptyTitle>No Assistant yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created an assistant yet. Get started by creating
          your assistant. Create assistant
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <SheetContentass />
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground cursor-pointer"
        size="sm"
      >
        <a href="/workspace/videotutorials">
          Video tutorials <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  );
}
