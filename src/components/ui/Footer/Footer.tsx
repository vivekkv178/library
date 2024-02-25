import React from "react";
import Socials, { Social } from "../Socials/Socials";

export type FooterProps = {
  NavigationComponent: React.ElementType;
  copyrightText: string;
  socials?: Social;
};

const Footer = (props: FooterProps) => {
  const { socials, NavigationComponent } = props;
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          {socials ? (
            <Socials
              socials={socials}
              footer
              NavigationComponent={NavigationComponent}
            />
          ) : null}
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Vivek KV. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
