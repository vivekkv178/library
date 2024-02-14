import React, { ReactNode } from "react";

// import Link from "next/link";
// import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export type AppHeaderProps = {
  brandName: string;
  brandLogo: string;
  currentRouteName: string;
  profileComponent: ReactNode;
  NavigationComponent: React.ElementType;
};

const AppHeader = (props: AppHeaderProps) => {
  const {
    profileComponent,
    brandName,
    brandLogo,
    currentRouteName,
    NavigationComponent,
  } = props;
  const scrolled = useScroll(5);
  const selectedLayout = "test";

  //   const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[60px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <NavigationComponent
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 rounded-lg">
              <img src={brandLogo} alt={brandName} />
            </span>
            <span className="font-bold text-xl flex ">{brandName}</span>
          </NavigationComponent>
          <div className="font-semibold flex ml-2 md:hidden">
            {currentRouteName}
          </div>
        </div>

        <div className="hidden md:block">{currentRouteName}</div>
        <div className="hidden md:block">{profileComponent}</div>
      </div>
    </div>
  );
};

export default AppHeader;
