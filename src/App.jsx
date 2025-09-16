import BackgroundSequence from "./BackgroundSequence";
import HackerOverlay from "./HackerOverlay";

function App() {

  return (
    <div style={{ height: "500vh", background: "black" }}>
      <BackgroundSequence />
      <HackerOverlay />

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
