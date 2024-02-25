import React from "react";

export type LogoProps = {
  NavigationComponent: React.ElementType;
  logoUrl: string;
};

const Logo = (props: LogoProps) => {
  const { NavigationComponent, logoUrl } = props;
  return (
    <NavigationComponent href="/">
      <img src={logoUrl} width={54} height={54} alt="" />
    </NavigationComponent>
  );
};

export default Logo;
