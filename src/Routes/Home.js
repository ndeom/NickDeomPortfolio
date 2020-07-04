import React from "react";
import Canvas from "../Components/Canvas";
import "../Styles/Home.scss";

export default function Home() {
  return (
    <div id="home">
      <Canvas />
      <span id="canvas-annotation">
        Worley Noise Algorithm (reload to generate a new pattern)
      </span>
    </div>
  );
}
