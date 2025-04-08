
import React from "react";

type BabyGearIconProps = {
  svgPath: string;
  className?: string;
  alt?: string;
};

const BabyGearIcon = ({ svgPath, className = "", alt = "Baby gear illustration" }: BabyGearIconProps) => {
  return (
    <div className={`transition-transform duration-500 ${className}`}>
      <img src={svgPath} alt={alt} className="w-full h-full" />
    </div>
  );
};

export default BabyGearIcon;
