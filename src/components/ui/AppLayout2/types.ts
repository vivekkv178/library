import { ReactNode } from "react";

export type NavItem = {
  title: string;
  path: string;
  icon: string;
  submenu?: boolean;
  subMenuItems?: NavItem[];
  customClick?: boolean;
  badge?: number;
};

export type NavbarProps = {
  navs: NavItem[];
};

export type SidebarProps = {
  logo: string;
  logoStyles: string;
};

export type ProfileProps = {
  name: string;
  email: string;
  userImage: string;
  logoutHandler: () => void;
};

export type AppLayoutProps = {
  children: ReactNode;
  NavigationComponent: React.ElementType;
  profileProps: ProfileProps;
  navbarProps: NavbarProps;
  sidebarProps: SidebarProps;
};
