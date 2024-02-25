import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip/Tooltip";
import { Button } from "../Button/Button";
import { Icon } from "@iconify/react";

type Technology = {
  icon: string;
  name: string;
};

export type BuiltWithProps = {
  techStack: Technology[];
};

const BuiltWith = (props: BuiltWithProps) => {
  const { techStack } = props;
  const [hide, setHide] = useState(false);
  return hide ? (
    <></>
  ) : (
    <div className="fixed bottom-0 end-0 z-[60] sm:max-w-sm w-auto mx-auto p-4">
      <div className="px-2 bg-white border border-primary-100 rounded-xl shadow-sm dark:bg-none dark:border-secondary">
        <div className="flex justify-between items-center">
          <div className=" pl-2 text-sm text-secondary mt- mr-2 font-bold">
            Made with
          </div>
          <TooltipProvider delayDuration={0}>
            {techStack?.map((tech, index) => (
              <div key={index} className="mr-1 mt-1">
                <Tooltip>
                  <TooltipTrigger>
                    <Icon icon={tech.icon} className="w-6 h-6" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className="dark:bg-none dark:hover:bg-transparent"
                  onClick={() => setHide(true)}
                >
                  <Icon icon="lucide:x" className="dark:text-black" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hide</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default BuiltWith;
