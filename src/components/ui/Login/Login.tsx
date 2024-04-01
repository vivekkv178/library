import React from "react";
import { Icon } from "@iconify/react";

export type LoginProps = {
  NavigationComponent: React.ElementType;
  mobileView?: boolean;
  loginRedirect: string;
  loggedIn: boolean;
  userImage: string;
};

const Login = (props: LoginProps) => {
  const {
    NavigationComponent,
    mobileView,
    loginRedirect,
    loggedIn,
    userImage,
  } = props;
  return (
    <NavigationComponent href={loginRedirect}>
      {!loggedIn ? (
        <div
          className={`items-center gap-x-2 pl-4 ${
            mobileView
              ? "flex text-2xl"
              : "hidden xl:flex border-s-2 hover:text-primary transition-all"
          }`}
        >
          <Icon
            icon="lucide:circle-user"
            className={mobileView ? "h-6 w-6" : "h-4 w-4"}
          />
          <span>Login</span>
        </div>
      ) : (
        <div
          className={`items-center gap-x-2 pl-4 ${
            mobileView
              ? "flex text-2xl"
              : "hidden xl:flex border-s-2 hover:text-primary transition-all"
          }`}
        >
          {userImage ? (
            <img src={userImage} className="h-6 w-6 rounded-full" />
          ) : (
            <Icon icon="lucide:circle-user" className="h-6 w-6 rounded-full" />
          )}
          <span>Go To App</span>
        </div>
      )}
    </NavigationComponent>
  );
};

export default Login;
