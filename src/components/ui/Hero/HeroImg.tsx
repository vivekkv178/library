import React from "react";

export type HeroImageProps = {
  containerStyles: string;
  imgSrc: string;
};

const HeroImage = (props: HeroImageProps) => {
  const { containerStyles, imgSrc } = props;
  return (
    <div className={`${containerStyles}`}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default HeroImage;
