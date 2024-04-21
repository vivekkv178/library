import React from "react";

// framer motion
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu/Dropdown-menu";
import { Icon } from "@iconify/react";

export type MarketingRoute = {
  path: string;
  name: string;
  private?: boolean;
  nested?: boolean;
  subRoutes?: MarketingRoute[];
};

export type NavbarProps = {
  marketingRoutes: MarketingRoute[];
  NavigationComponent: React.ElementType;
  mobileView?: boolean;
  currentPath: string;
};

const Navbar = (props: NavbarProps) => {
  const { marketingRoutes, NavigationComponent, mobileView, currentPath } =
    props;

  return (
    <nav
      className={`${
        mobileView
          ? "flex flex-col items-center gap-y-6"
          : "hidden xl:flex gap-x-8 items-center"
      }`}
    >
      {marketingRoutes.map((link, index) => {
        return !link.nested ? (
          <NavigationComponent
            href={link.path}
            key={index}
            className={`capitalize ${
              mobileView
                ? "text-2xl"
                : "relative hover:text-primary transition-all"
            }`}
          >
            <>
              {link.path === currentPath && (
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className="absolute left-0 top-full h-[2px] bg-primary w-full"
                />
              )}
              {link.name}
            </>
          </NavigationComponent>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center justify-center">
                {link.name}
                <Icon icon="lucide:chevron-down" className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.subRoutes?.map((route, index) => (
                <NavigationComponent
                  href={route.path}
                  key={index}
                  className={`capitalize ${
                    mobileView
                      ? "text-2xl"
                      : "relative hover:text-primary transition-all"
                  }`}
                >
                  <DropdownMenuItem className="capitalize">
                    {route.name}
                  </DropdownMenuItem>
                </NavigationComponent>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </nav>
  );
};

export default Navbar;
