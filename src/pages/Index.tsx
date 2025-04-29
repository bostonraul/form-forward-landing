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
        <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap baby-font text-primary text-2xl md:text-3xl font-bold mb-10">
  {[
    { label: "DONATE", tip: "Give away your baby gear to help a family in need." },
    { label: "RENT", tip: "List your baby gear and earn rental income from it." },
    { label: "REPURPOSE", tip: "Let us refurbish and redirect your gear to community impact." },
  ].map(({ label, tip }, index, arr) => (
    <React.Fragment key={label}>
      {/* Label + Tooltip */}
      <div className="relative group cursor-pointer">
        <span
          onClick={() => {
            trackClick(label);
            setCtaClicked(label);
            setShowFormLightbox(true);
          }}
          className="hover:underline hover:text-blue-700 hover:scale-105 transition relative inline-block"
        >
          {label}
          <sup className="absolute -top-3 -right-4 text-xs w-4 h-4 flex items-center justify-center rounded-full border border-blue-400 bg-white text-blue-600 font-semibold group-hover:opacity-100 transition-opacity">
            ?
          </sup>
        </span>

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs bg-gray-900 text-white text-sm px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          {tip}
        </div>
      </div>

      {/* Separator (add only between items) */}
      {index < arr.length - 1 && <span className="text-gray-400">|</span>}
    </React.Fragment>
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
