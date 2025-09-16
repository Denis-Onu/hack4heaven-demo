import { useEffect, useState } from "react";

function HackerOverlay() {
  const frameCount = 150; // total frames
  const [currentFrame, setCurrentFrame] = useState(1);

  // helper to generate frame filename
  const getFrameSrc = (index) =>
    `/hacker-frames/unscreen-${String(index).padStart(3, "0")}.png`;

  useEffect(() => {
    let frameIndex = 1;

    const handleScroll = () => {
      // advance 1 frame per scroll event
      frameIndex += 1;
      if (frameIndex > frameCount) frameIndex = 1; // loop back

      setCurrentFrame(frameIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      src={getFrameSrc(currentFrame)}
      alt="Hacker overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30%",
        height: "30%",
        objectFit: "cover",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}

export default HackerOverlay;
