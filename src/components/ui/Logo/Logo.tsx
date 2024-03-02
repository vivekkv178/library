import React from "react";

export type LogoProps = {
  NavigationComponent: React.ElementType;
  logoUrl: string;
  className?: string;
};

const Logo = (props: LogoProps) => {
  const { NavigationComponent, logoUrl, className } = props;
  return (
    <NavigationComponent href="/">
      <img
        src={logoUrl}
        width={200}
        height={200}
        className={className}
        alt=""
      />
    </NavigationComponent>
  );
};

export default Logo;
