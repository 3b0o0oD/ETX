import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce"; // Install lodash: npm install lodash

const BlurryBottomOverlay = ({
  blurIntensity = 10,
  overlayHeight = "h-30",
  opacityRange = 200,
}) => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the distance from the bottom of the page
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);

      // Adjust the opacity based on the distance from the bottom
      const calculatedOpacity = Math.min(
        1,
        Math.max(0, 1 - distanceFromBottom / opacityRange)
      );
      setOverlayOpacity(calculatedOpacity);
    };

    const debouncedScroll = debounce(handleScroll, 50); // Debounce scroll events

    window.addEventListener("scroll", debouncedScroll);
    debouncedScroll(); // Initial call to set opacity

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [opacityRange]); // Re-run effect if opacityRange changes

  return (
    <div
      className={`z-99 fixed bottom-0 left-0 w-full ${overlayHeight} bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-300 ease-in-out`}
      style={{
        backdropFilter: `blur(${blurIntensity}px)`,
        opacity: overlayOpacity,
      }}
    />
  );
};

export default BlurryBottomOverlay;
