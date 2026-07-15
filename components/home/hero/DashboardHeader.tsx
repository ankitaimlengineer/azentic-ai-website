"use client";

import { Badge } from "@/components/ui/badge";
import { Bot, Wifi } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-5">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
          <Bot className="h-6 w-6 text-blue-400" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            AI Dashboard
          </h3>

          <p className="text-sm text-slate-400">
            Azentic AI Technologies
          </p>
        </div>
      </div>

      <Badge className="border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
        <Wifi className="mr-1 h-3 w-3" />
        Live
      </Badge>
    </div>
  );
}