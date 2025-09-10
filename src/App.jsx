import { useEffect, useRef, useState } from "react";
import ScrollMagic from "scrollmagic";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setDuration(video.duration || 0);
    };

    video.addEventListener("loadedmetadata", handleLoaded);

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      duration: 3000, // scrolling distance controls playback
      triggerElement: "#video-trigger", // ✅ wrapper div, not video
      triggerHook: 0,
    })
      .addTo(controller)
      .on("progress", (event) => {
        if (!duration) return;

        const scrollProgress = event.progress;
        const targetTime = scrollProgress * duration;

        requestAnimationFrame(() => {
          video.currentTime = targetTime;
        });
      });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      controller.destroy(true);
    };
  }, [duration]);

  return (
    <div style={{ height: "500vh", background: "black" }}>
      {/* Wrapper div for ScrollMagic trigger */}
      <div id="video-trigger" style={{ height: "3000px" }}>
        <video
          ref={videoRef}
          src="/full-video.mp4"
          playsInline
          muted
          preload="auto"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Some content after */}
      <div style={{ position: "relative", top: "400vh", color: "white" }}>
        <h1>Some text after the video</h1>
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
