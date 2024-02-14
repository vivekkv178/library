import React, { ReactNode } from "react";
import MarketingHeader, {
  MarketingHeaderProps,
} from "../MarketingHeader/MarketingHeader";
import PageWrapper from "@/hooks/PageWrapper";
import MobileHeader, { MobileHeaderProps } from "../MobileHeader/MobileHeader";

export type MarketingLayoutProps = {
  children: ReactNode;
  marketingHeaderProps: MarketingHeaderProps;
  mobileHeaderProps: MobileHeaderProps;
};

const MarketingLayout = (props: MarketingLayoutProps) => {
  const { children, marketingHeaderProps, mobileHeaderProps } = props;
  return (
    <div className="flex">
      <main className="flex-1">
        {/* <MarginWidthWrapper> */}
        <MarketingHeader {...marketingHeaderProps} />
        <MobileHeader {...mobileHeaderProps} />
        <PageWrapper>{children}</PageWrapper>
        {/* </MarginWidthWrapper> */}
      </main>
    </div>
  );
};

export default MarketingLayout;
