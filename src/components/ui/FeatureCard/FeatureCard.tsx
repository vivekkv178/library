import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";

export type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const FeatureCard = (props: FeatureCardProps) => {
  const { icon, title, description } = props;
  return (
    <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
      <CardHeader className="text-primary absolute -top-[60px]">
        <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="mb-4">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
