import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu/Dropdown-menu";
import { ProfileProps } from "./types";
import { Icon } from "@iconify/react";

const Profile = (props: ProfileProps) => {
  const { name, email, userImage, logoutHandler } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full cursor-pointer">
          {userImage ? (
            <img src={userImage} className="h-9 w-9 rounded-full" />
          ) : (
            <Icon icon="lucide:circle-user" className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle user menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col mx-4">
          <span className="font-bold">{name}</span>
          <span className="">{email}</span>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
