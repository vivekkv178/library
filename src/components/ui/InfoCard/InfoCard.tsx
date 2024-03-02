import React from "react";
import { Card, CardHeader } from "../Card/Card";
import { Badge } from "../Badge/Badge";
import { Github, Link2Icon } from "lucide-react";

export type InfoCardProps = {
  NavigationComponent: React.ElementType;
  image: string;
  link: string;
  github: string;
  category: string;
  name: string;
  description: string;
};

const InfoCard = (props: InfoCardProps) => {
  const {
    NavigationComponent,
    image,
    link,
    github,
    category,
    name,
    description,
  } = props;

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-56 flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <img
            className="absolute bottom-0 shadow-2xl h-full w-full"
            src={image}
            alt=""
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            <NavigationComponent
              href={link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </NavigationComponent>
            <NavigationComponent
              href={github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <Github className="text-white" />
            </NavigationComponent>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2">{category}</Badge>
        <h4 className="h4 mb-1">{name}</h4>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </Card>
  );
};

export default InfoCard;
