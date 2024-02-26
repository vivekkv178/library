import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";

export type ReviewCardProps = {
  avatar: string;
  name: string;
  job: string;
  review: string;
};

const ReviewCard = (props: ReviewCardProps) => {
  const { avatar, name, job, review } = props;
  return (
    <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
      <CardHeader className="p-0 mb-10">
        <div className="flex items-center gap-x-4">
          {/* image */}
          <img
            src={avatar}
            className="w-[4.5rem] h-[4.5rem] rounded-full"
            alt=""
          />
          {/* name */}
          <div className="flex flex-col">
            <CardTitle>{name}</CardTitle>
            <p>{job}</p>
          </div>
        </div>
      </CardHeader>
      <CardDescription className="text-lg text-muted-foreground">
        {review}
      </CardDescription>
    </Card>
  );
};

export default ReviewCard;
