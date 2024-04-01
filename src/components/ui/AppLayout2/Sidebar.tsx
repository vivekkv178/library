import React from "react";

import Navbar from "./Navbar";
import { AppLayoutProps } from "./types";

const Sidebar = (props: AppLayoutProps) => {
  const { NavigationComponent, sidebarProps } = props;

  return (
    <div className="hidden border-r md:block">
      <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavigationComponent href="/" className="w-full">
            <img src={sidebarProps.logo} className={sidebarProps.logoStyles} />
          </NavigationComponent>
          {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Icon icon="lucide:bell" className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button> */}
        </div>
        <div className="flex-1">
          <Navbar {...props} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
