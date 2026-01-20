"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Animated background glow */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-md text-center"
      >
        {/* Animated 404 */}
        <motion.h1
          className="text-9xl font-extrabold tracking-tight text-white"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          404
        </motion.h1>

        <p className="mt-4 text-xl font-semibold text-white">Page not found</p>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/workspace/dashboard">
            <Button className="w-full text-white hover:opacity-90">
              Go to Dashboard
            </Button>
          </Link>

          <Link href="/workspace/dashboard">
            <Button variant="ghost" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
