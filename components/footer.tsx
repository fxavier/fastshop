import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-between md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}