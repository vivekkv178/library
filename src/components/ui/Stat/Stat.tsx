import React, { ReactNode } from "react";
import CountUp from "react-countup";

export type StatProps = {
  containerStyles: string;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
  icon: ReactNode;
};

const Stat = (props: StatProps) => {
  const { containerStyles, endCountNum, endCountText, badgeText, icon } = props;
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        {endCountNum ? (
          <div className="text-4xl leading-none font-bold text-primary">
            <CountUp end={endCountNum} delay={1} duration={4} />
            {endCountText}
          </div>
        ) : null}
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Stat;
