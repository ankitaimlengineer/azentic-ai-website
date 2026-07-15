import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <Badge
      className="
      px-5
      py-2
      rounded-full
      bg-blue-500/10
      text-blue-400
      border
      border-blue-500/20
      backdrop-blur-md
      hover:bg-blue-500/20
      transition-all
    "
    >
      <Sparkles className="mr-2 h-4 w-4" />
      Next Generation AI Company
    </Badge>
  );
}