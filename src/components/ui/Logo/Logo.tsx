import React from "react";

export type LogoProps = {
  NavigationComponent: React.ElementType;
  logoUrl: string;
};

const Logo = (props: LogoProps) => {
  const { NavigationComponent, logoUrl } = props;
  return (
    <NavigationComponent href="/">
      <img src={logoUrl} width={200} height={200} alt="" />
    </NavigationComponent>
  );
};

export default Logo;
