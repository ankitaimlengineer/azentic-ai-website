import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <Button
        size="lg"
        className="rounded-xl px-8 py-7 text-lg"
      >
        Start Your Project
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-xl px-8 py-7 text-lg"
      >
        <PlayCircle className="mr-2 h-5 w-5" />
        Watch Demo
      </Button>
    </div>
  );
}