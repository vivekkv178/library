import React, { ReactNode } from "react";
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";
import MarginWidthWrapper from "@/hooks/MarginWidthWrapper";
import AppHeader, { AppHeaderProps } from "../AppHeader/AppHeader";
import PageWrapper from "@/hooks/PageWrapper";
import MobileHeader, { MobileHeaderProps } from "../MobileHeader/MobileHeader";

export type AppLayoutProps = {
  children: ReactNode;
  sidebarProps: SidebarProps;
  mobileHeaderProps: MobileHeaderProps;
  appHeaderProps: AppHeaderProps;
};

const AppLayout = (props: AppLayoutProps) => {
  const { children, sidebarProps, mobileHeaderProps, appHeaderProps } = props;
  return (
    <div className="flex">
      <Sidebar {...sidebarProps} />
      <main className="flex-1">
        <MarginWidthWrapper>
          <AppHeader {...appHeaderProps} />
          <MobileHeader {...mobileHeaderProps} />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
};

export default AppLayout;
