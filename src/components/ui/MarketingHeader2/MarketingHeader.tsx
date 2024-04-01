import React, { useEffect, useState } from "react";
import ThemeToggler, { ThemeTogglerProps } from "../ThemeToggler/ThemeToggler";
import Navbar, { NavbarProps } from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Logo, { LogoProps } from "../Logo/Logo";
import Login, { LoginProps } from "../Login/Login";

export type MarketingHeaderProps = {
  themeProps: ThemeTogglerProps;
  navbarProps: NavbarProps;
  // mobileNavProps: MobileNavbarProps;
  logoProps: LogoProps;
  loginProps?: LoginProps;
};

const MarketingHeader = (props: MarketingHeaderProps) => {
  const { themeProps, navbarProps, logoProps, loginProps } = props;

  const [header, setHeader] = useState(false);
  const pathname = "/";

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-4 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo {...logoProps} />
          <div className="flex items-center gap-x-6">
            <Navbar {...navbarProps} />
            {loginProps ? <Login {...loginProps} /> : null}
            <ThemeToggler {...themeProps} />
            <div className="xl:hidden">
              <MobileNavbar
                // {...mobileNavProps}
                navbarProps={navbarProps}
                logoProps={logoProps}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
