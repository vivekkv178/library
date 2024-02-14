import React, { useState } from "react";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

import { SideNavItem } from "./types";
import { Icon } from "@iconify/react";

export type SidebarProps = {
  sidebarRoutes: SideNavItem[];
  NavigationComponent: React.ElementType;
  brandName: string;
  brandLogo: string;
  currentRoutePath: string;
};

const Sidebar = (props: SidebarProps) => {
  const { sidebarRoutes, brandName, brandLogo, NavigationComponent } = props;
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <NavigationComponent
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-[60px] w-full"
        >
          <span className="h-7 w-7 rounded-lg">
            <img src={brandLogo} alt={brandName} />
          </span>
          <span className="font-bold text-xl hidden md:flex">{brandName}</span>
        </NavigationComponent>
        <div className="flex flex-col space-y-2  md:px-6 ">
          {sidebarRoutes?.map((item, idx) => {
            return <MenuItem key={idx} item={item} {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const MenuItem = ({
  item,
  currentRoutePath,
  NavigationComponent,
}: {
  item: SideNavItem;
  currentRoutePath: string;
  NavigationComponent: React.ElementType;
}) => {
  //   const pathname = usePathname();
  const pathname = currentRoutePath;
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold  flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <NavigationComponent
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </NavigationComponent>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <NavigationComponent
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold flex">{item.title}</span>
        </NavigationComponent>
      )}
    </div>
  );
};
