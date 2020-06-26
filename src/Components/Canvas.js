import React from "react";
import Sketch from "react-p5";
import "../Styles/Canvas.scss";

export default class Canvas extends React.Component {
  x = 50;
  y = 50;
  points = [];
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.pixelDensity(1);
    let height = p5.height;
    let width = p5.width;
    for (let i = 0; i < 25; i++) {
      this.points[i] = p5.createVector(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height)
      );
    }
    p5.noLoop();
  };

  draw = (p5) => {
    console.time("draw");
    let height = p5.height;
    let width = p5.width;
    p5.loadPixels();
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let distances = [];
        for (let i = 0; i < this.points.length; i++) {
          let v = this.points[i];
          let d = p5.dist(x, y, v.x, v.y);
          distances[i] = d;
        }
        let sorted = p5.sort(distances);
        let r = p5.map(sorted[0], 0, 150, 0, 200);
        let g = p5.map(sorted[2], 0, 75, 200, 0);
        let b = p5.map(sorted[5], 0, 200, 255, 0);

        let index = (x + y * width) * 4;
        p5.pixels[index + 0] = r;
        p5.pixels[index + 1] = g;
        p5.pixels[index + 2] = b;
        p5.pixels[index + 3] = 255;
      }
    }
    p5.updatePixels();
    console.timeEnd("draw");
  };

  render() {
    return (
      <div id="canvas">
        <Sketch setup={this.setup} draw={this.draw} />
        Worley Noise algorithm using P5.js
      </div>
    );
  }
}
