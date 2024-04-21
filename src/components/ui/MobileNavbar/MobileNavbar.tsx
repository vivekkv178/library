import React from "react";

// framer motion
import { Sheet, SheetContent, SheetTrigger } from "../Sheet/Sheet";
import { AlignJustify } from "lucide-react";
import Navbar, { NavbarProps } from "../Navbar/Navbar";
import Logo, { LogoProps } from "../Logo/Logo";
import Login, { LoginProps } from "../Login/Login";

export type MobileNavbarProps = {
  navbarProps: NavbarProps;
  logoProps: LogoProps;
  loginProps: LoginProps;
};

const MobileNavbar = (props: MobileNavbarProps) => {
  const { navbarProps, logoProps, loginProps } = props;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo {...logoProps} />
            <Navbar {...navbarProps} mobileView />
            <Login {...loginProps} mobileView />
          </div>
          {/* <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
