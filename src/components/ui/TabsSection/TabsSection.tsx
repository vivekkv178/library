import React, { ReactNode } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs/Tabs";

export type Tab = {
  tabContent: ReactNode;
  tabImage: ReactNode;
  tabTrigger: string;
  tabTriggerValue: string;
};

export type TabsSectionProps = {
  tabs: Tab[];
  sectionTitle?: string;
};

const TabsSection = (props: TabsSectionProps) => {
  const { tabs, sectionTitle } = props;

  return (
    <section className="xs:mt-6 xl:h-auto pb-12 xl:py-24">
      <div className="container mx-auto">
        {sectionTitle ? (
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            {sectionTitle}
          </h2>
        ) : null}
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            {tabs[0].tabImage}
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                {tabs.map((tab) => (
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value={tab.tabTriggerValue}
                  >
                    {tab.tabTrigger}
                  </TabsTrigger>
                ))}
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {tabs.map((tab) => (
                  <TabsContent value={tab.tabTriggerValue}>
                    {tab.tabContent}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
