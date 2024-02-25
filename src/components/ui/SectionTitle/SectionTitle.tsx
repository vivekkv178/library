import React from "react";

export type SectionTitleProps = {
  title: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;
  return (
    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">{title}</h2>
  );
};

export default SectionTitle;
