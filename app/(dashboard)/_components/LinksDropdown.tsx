"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { DynamicLinksList } from "@/app/_components/Links";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 lg:hidden" align="start" sideOffset={25}>
        <DynamicLinksList asDropdownMenuItem={true} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
