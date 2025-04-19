
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CurlyArrow from "@/components/CurlyArrow";

const GOOGLE_FORM_URL = "https://forms.google.com";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      {/* Background image with white overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/lovable-uploads/AdobeStock_783136158_Preview.jpeg')"  ,
          }}
        ></div>
        {/* White overlay for watermark effect */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
      </div>

      {/* Foreground content */}
      <div className="z-10 max-w-4xl w-full text-center">
        {/* Hero Section */}
        <h1 className="baby-font headline text-primary text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
           Give your baby gear a second home<br />—make space, make an impact
        </h1>

        {/* How It Works Section */}
        <div className="mt-24 mb-16">
          <h2 className="baby-font text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-primary text-2xl font-bold mb-3">1</div>
              <h3 className="baby-font text-primary text-xl md:text-2xl font-bold mb-4">
                Pick the Gear to Share
              </h3>
              <p className="text-primary/80 text-lg">
                Decide the baby items you'd like to share with other families
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <CurlyArrow />
              <div className="text-primary text-2xl font-bold mb-3">2</div>
              <h3 className="baby-font text-primary text-xl md:text-2xl font-bold mb-4">
                Give Us a Ring (or Ping!)
              </h3>
              <p className="text-primary/80 text-lg">
                Contact us to arrange the details and schedule
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <CurlyArrow />
              <div className="text-primary text-2xl font-bold mb-3">3</div>
              <h3 className="baby-font text-primary text-xl md:text-2xl font-bold mb-4">
                Sit Back—We've Got It Covered
              </h3>
              <p className="text-primary/80 text-lg">
                Relax while we handle the logistics and connections
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-8 baby-font text-primary text-2xl md:text-3xl font-bold mb-10">
          <span>DONATE</span>
          <span className="text-gray-400">|</span>
          <span>RENT</span>
          <span className="text-gray-400">|</span>
          <span>REPURPOSE</span>
        </div>

        <div className="flex justify-center mb-16 mt-12">
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="baby-button baby-font bg-primary hover:bg-primary/90 text-white text-xl md:text-2xl px-8 py-6 rounded-xl flex items-center gap-2">
              JOIN NOW
              <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>

        <div className="text-primary/80 text-lg md:text-xl mt-16">
          <p className="mb-2">www.toybuddy.shop</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
