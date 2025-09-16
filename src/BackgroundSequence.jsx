import { useEffect, useRef } from "react";

const BackgroundSequence = () => {
    const canvasRef = useRef(null);
    const frameCount = 355;
    const currentFrame = (i) =>
      `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = 1080;
      canvas.height = 720;
  
      const images = [];
      let frameIndex = 0;
  
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
  
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
      };
      images[0].onload = render;
  
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScrollTop = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
  
        frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );
  
        requestAnimationFrame(render);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
    );
}

export default BackgroundSequence