import React from "react";

import { Button } from "@/components/ui/Button/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet/Sheet";
import Profile from "./Profile";
import { AppLayoutProps } from "./types";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";

const Header = (props: AppLayoutProps) => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Icon icon="lucide:menu" className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <Navbar {...props} />
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {/* <span className="text-lg">Home</span> */}
      </div>
      <Profile {...props.profileProps} />
    </header>
  );
};

export default Header;
