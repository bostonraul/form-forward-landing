
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BabyGearIcon from "@/components/BabyGearIcon";

const GOOGLE_FORM_URL = "https://forms.google.com";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      {/* Background baby gear illustrations */}
      <BabyGearIcon 
        svgPath="/lovable-uploads/a4229c87-0e94-40a8-93b8-606114b99f60.png" 
        className="absolute w-36 h-36 md:w-48 md:h-48 left-5 top-20 animate-float" 
        alt="Baby stroller"
      />
      <BabyGearIcon 
        svgPath="/lovable-uploads/a4229c87-0e94-40a8-93b8-606114b99f60.png" 
        className="absolute w-36 h-36 md:w-48 md:h-48 right-5 bottom-24 animate-float animation-delay-2000" 
        alt="Baby crib"
      />
      <BabyGearIcon 
        svgPath="/lovable-uploads/a4229c87-0e94-40a8-93b8-606114b99f60.png" 
        className="absolute w-36 h-36 md:w-48 md:h-48 left-5 bottom-24 animate-float animation-delay-1000" 
        alt="Baby tricycle"
      />
      <BabyGearIcon 
        svgPath="/lovable-uploads/a4229c87-0e94-40a8-93b8-606114b99f60.png" 
        className="absolute w-28 h-28 md:w-40 md:h-40 right-5 top-20 animate-float animation-delay-3000" 
        alt="Baby high chair"
      />
      <BabyGearIcon 
        svgPath="/lovable-uploads/a4229c87-0e94-40a8-93b8-606114b99f60.png" 
        className="absolute w-28 h-28 md:w-36 md:h-36 left-1/4 top-1/3 animate-float animation-delay-2500" 
        alt="Baby rocker"
      />
      <BabyGearIcon 
        svgPath="/lovable-uploads/a4229c87-0e94-40a8-93b8-606114b99f60.png" 
        className="absolute w-24 h-24 md:w-32 md:h-32 right-1/4 top-1/3 animate-float animation-delay-1500" 
        alt="Baby toy"
      />
      
      <div className="z-10 max-w-4xl w-full text-center">
        {/* Main headline */}
        <h1 className="baby-font headline text-primary text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          ARE YOU LOOKING FOR A WAY TO GIVE YOUR <br />
          UNUSED BABY GEAR A NEW LIFE?
        </h1>
        
        {/* Call-to-action button */}
        <div className="flex justify-center mb-16 mt-12">
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="baby-button baby-font bg-primary hover:bg-primary/90 text-white text-xl md:text-2xl px-8 py-6 rounded-xl flex items-center gap-2">
              JOIN NOW
              <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
        
        {/* Sub headline */}
        <h2 className="baby-font sub-headline text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Join our parent community
        </h2>
        
        {/* Options */}
        <div className="flex justify-center items-center gap-4 md:gap-8 baby-font text-primary text-2xl md:text-3xl font-bold mb-10">
          <span>DONATE</span>
          <span className="text-gray-400">|</span>
          <span>RENT</span>
          <span className="text-gray-400">|</span>
          <span>DISPOSE</span>
        </div>
        
        {/* Contact info */}
        <div className="text-primary/80 text-lg md:text-xl mt-16">
          <p className="mb-2">www.toybuddy.shop</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
