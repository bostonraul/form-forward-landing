import React, { useState } from "react";
import FormLightbox from "@/components/FormLightbox";
import StoryLightbox from "@/components/StoryLightbox";
import { trackClick } from "@/lib/trackClick"; // Add this import at top

const Index = () => {
  const [showFormLightbox, setShowFormLightbox] = useState(false);
  const [showStoryLightbox, setShowStoryLightbox] = useState(false);
  const [ctaClicked, setCtaClicked] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/AdobeStock_783136158_Preview.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
      </div>

      <div className="z-10 max-w-4xl w-full text-center">
        <h1 className="baby-font headline text-primary text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Give your unused baby gear to someone who may need it
          <br className="mb-1" /> 
          <span className="relative inline-block text-xl md:text-4xl font-light">
            <span className="relative z-10 px-4">-make space, make an impact</span>
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10"
              viewBox="0 0 220 60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <ellipse cx="110" cy="30" rx="110" ry="30" stroke="#86efac" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        <div className="mt-24 mb-16">
          <h2 className="baby-font text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-12 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:bg-green-300">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Steps */}
            {["Have a Gear to Share?", "Connect and list with us!!", "Sit Back—We've Got It Covered!!"].map((title, i) => (
              <div className="flex flex-col items-center" key={i}>
                <div className="w-12 h-12 flex items-center justify-center text-primary text-2xl font-bold mb-3 border-2 border-dashed border-blue-400 rounded-full">
                  {i + 1}
                </div>
                <h3 className="baby-font text-primary text-xl md:text-2xl font-bold mb-4">{title}</h3>
                <p className="text-primary/80 text-lg">
                  {i === 0 && "Decide the baby items you'd like to share with other families"}
                  {i === 1 && "Contact us to share the details and schedule a visit"}
                  {i === 2 && "We’ll take care of the logistics & give it to a parent in need"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex justify-center items-center gap-4 md:gap-8 baby-font text-primary text-2xl md:text-3xl font-bold mb-10">
          {["DONATE", "|", "RENT", "|", "REPURPOSE"].map((label) => (
            <span
              key={label}
              onClick={() => label !== "|" && (trackClick(label),setCtaClicked(label), setShowFormLightbox(true))}
              className={`cursor-pointer ${label !== "|" ? "hover:underline hover:text-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" : ""}`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Lightboxes */}
        {showFormLightbox && (
          <FormLightbox
            isOpen={showFormLightbox}
            onClose={() => setShowFormLightbox(false)}
            ctaClicked={ctaClicked}
          />
        )}

        <div className="text-primary/80 text-lg md:text-xl mt-16">
          <button
            onClick={() => (trackClick("KNOW_US"), setShowStoryLightbox(true))}
            className="underline text-blue-500 hover:text-blue-700 transition"
          >
            Know Us. Join Us. Make an Impact →
          </button>

          {showStoryLightbox && (
            <StoryLightbox onClose={() => setShowStoryLightbox(false)} />
          )}
        </div>

      </div>
    </div>
  );
};

export default Index;
