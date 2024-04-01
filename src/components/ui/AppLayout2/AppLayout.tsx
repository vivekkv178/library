import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { AppLayoutProps } from "./types";

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar {...props} />
      <div className="flex flex-col">
        <Header {...props} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
