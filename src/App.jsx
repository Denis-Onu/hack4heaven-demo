// App.jsx
import { useEffect, useRef } from "react";

function App() {
  const canvasRef = useRef(null);
  const frameCount = 355; // total frames you exported with ffmpeg
  const currentFrame = (index) =>
    `/frames/frame_${String(index).padStart(4, "0")}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 1080; // match your video width
    canvas.height = 720; // match your video height

    const images = [];
    let frameIndex = 0;

    // Preload frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
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
    <div style={{ height: "500vh", background: "black" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div style={{ position: "relative", top: "400vh", color: "white" }}>
        <h1>Some text after the animation</h1>
      </div>
    </div>
  );
}

export default App;



// <div className="app-container">
//   <ScrollyVideo
//     src="/full-video.mp4"
//   />

//   <main>
//     <ScrollyVideo src="/falling-hacker-video.webm" />
//     <h1>Clouds → Mountain → City</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reic iendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore doloribus laboriosam tenetur vitae? Ratione, sit reiciendis neque iure harum laborum maxime. Unde exercitationem sint repellat amet nobis qui minima, temporibus ad mollitia quisquam enim debitis, autem, beatae at commodi. Quasi in consectetur suscipit aut quis magnam omnis blanditiis molestiae!</p>

//     <div style={{ marginTop: '1000px' }}>
//       <h1>Clouds → Mountain → City</h1>
//       <h1>Clouds → Mountain → City</h1>
//       <h1>Clouds → Mountain → City</h1>
//       <h1>Clouds → Mountain → City</h1>
//       <h1>Clouds → Mountain → City</h1>
//       <h1>Clouds → Mountain → City</h1>
//     </div>
//   </main>
// </div>
