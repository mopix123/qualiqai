"use client";

import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WelcomeVideoDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:max-w-5xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle>Welcome to QualiQ AI</DialogTitle>
        </DialogHeader>

        {/* YouTube Video */}
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/pmVd0NUpc5w?si=M0M7EZfDPKRGH43W"
            title="Welcome video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* <div className="w-full max-w-full">
          {" "}
          <Image
            src="https://img.youtube.com/vi/E6wjse3Vcac/maxresdefault.jpg"
            alt="Photo"
            width={800}
            height={800}
            className="  justify-center items-center rounded-md"
          />{" "}
        </div> */}

        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Skip now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
