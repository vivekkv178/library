import React from "react";
import { AppLayoutProps } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Badge } from "@/components/ui/Badge/Badge";

const Navbar = (props: AppLayoutProps) => {
  const { NavigationComponent, navbarProps } = props;

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navbarProps.navs.map((nav) => (
        <NavigationComponent
          href={nav.path}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Icon icon={nav.icon} className="h-4 w-4" />
          {nav.title}
          {nav.badge && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              {nav.badge}
            </Badge>
          )}
        </NavigationComponent>
      ))}
    </nav>
  );
};

export default Navbar;
