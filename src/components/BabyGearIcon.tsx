
import React from "react";

type BabyGearIconProps = {
  svgPath: string;
  className?: string;
};

const BabyGearIcon = ({ svgPath, className = "" }: BabyGearIconProps) => {
  return (
    <div className={className}>
      <img src={svgPath} alt="Baby gear illustration" className="w-full h-full" />
    </div>
  );
};

export default BabyGearIcon;
