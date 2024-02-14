import React, { ReactNode } from "react";
import { User } from "lucide-react";

export type MarketingRoute = {
  path: string;
  name: string;
  private?: boolean;
};

export type MarketingHeaderProps = {
  brandName: string;
  brandLogo: string;
  marketingRoutes: MarketingRoute[];
  loginHandler: () => void;
  NavigationComponent: React.ElementType;
  authenticated: boolean;
  profileComponent: ReactNode;
};

const MarketingHeader = (props: MarketingHeaderProps) => {
  const {
    brandName,
    brandLogo,
    marketingRoutes,
    loginHandler,
    NavigationComponent,
    authenticated,
    profileComponent,
  } = props;

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <NavigationComponent
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            <div className="flex">
              <span className="h-7 w-7 mr-2 rounded-lg">
                <img src={brandLogo} alt={brandName} />
              </span>
              <span className="font-bold text-xl flex ">{brandName}</span>
            </div>
          </NavigationComponent>
        </div>

        <div className="hidden md:flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
          {marketingRoutes?.map((route, index) =>
            route.private ? (
              authenticated ? (
                <div key={index}>
                  <div className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
                    <NavigationComponent href={route.path}>
                      {route.name}
                    </NavigationComponent>
                  </div>
                </div>
              ) : (
                <></>
              )
            ) : (
              <div key={index}>
                <div className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
                  <NavigationComponent href={route.path}>
                    {route.name}
                  </NavigationComponent>
                </div>
              </div>
            )
          )}

          <NavigationComponent
            className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
            href="#"
            onClick={loginHandler}
          >
            {authenticated ? (
              profileComponent
            ) : (
              <>
                <User className="h-4 w-4" />
                Log in
              </>
            )}
          </NavigationComponent>
        </div>
      </nav>
    </header>
  );
};

export default MarketingHeader;
