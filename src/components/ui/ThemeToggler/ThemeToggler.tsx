import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../Button/Button";
import { Theme } from "@/lib/constants";

export type ThemeTogglerProps = {
  theme: Theme;
  setTheme: (theme: string) => void;
};

const ThemeToggler = (props: ThemeTogglerProps) => {
  const { theme, setTheme } = props;
  return (
    <>
      <div>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
          }
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </>
  );
};

export default ThemeToggler;
