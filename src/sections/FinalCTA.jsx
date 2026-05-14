import React from "react";

const FinalCTA = () => {
  const whatsappNumber = "+2347011704047";

  const message =
    "Hi, I want a website for my gym";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="py-24 px-6 bg-black text-white text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Get More Members for Your Gym?
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg mb-10">
          Get a simple, professional website that helps you attract, convert,
          and retain more members without stress.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          
          {/* Primary CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get This For Your Gym
          </a>

          {/* Secondary CTA */}
          <a
            href="#top" // make sure your hero has id="top"
            className="px-8 py-3 rounded-full border border-gray-500 text-white font-semibold hover:bg-white hover:text-black transition"
          >
            View Demo Again
          </a>
        </div>

        {/* Trust line */}
        <p className="text-sm text-gray-400">
          Fast setup • Mobile-friendly • Designed to bring you more members
        </p>

        {/* Optional reassurance */}
        <p className="text-xs text-gray-500 mt-2">
          No technical knowledge needed.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;