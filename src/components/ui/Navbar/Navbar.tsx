import React from "react";

// framer motion
import { motion } from "framer-motion";

export type MarketingRoute = {
  path: string;
  name: string;
  private?: boolean;
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
        return (
          <NavigationComponent
            href={link.path}
            key={index}
            className={`capitalize ${
              mobileView
                ? "text-2xl"
                : "relative hover:text-primary transition-all"
            }`}
          >
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
          </NavigationComponent>
        );
      })}
    </nav>
  );
};

export default Navbar;
