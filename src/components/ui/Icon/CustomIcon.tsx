import React from "react";
import { Icon } from "@iconify/react";

export type CustomIconProps = {
  NavigationComponent?: React.ElementType;
  href?: string;
  icon: string;
  className?: string;
};

const CustomIcon = (props: CustomIconProps) => {
  const { NavigationComponent, href, icon, className } = props;
  return (
    <>
      {NavigationComponent ? (
        <NavigationComponent href={href}>
          <Icon icon={icon} className={className} />
        </NavigationComponent>
      ) : (
        <Icon icon={icon} className={className} />
      )}
    </>
  );
};

export default CustomIcon;
