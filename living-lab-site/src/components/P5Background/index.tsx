import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import { useColorMode } from '@docusaurus/theme-common';

export default function P5Background() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  useEffect(() => {
    const sketch = (p: p5) => {
      let inc = 0.1;
      let scl = 20;
      let cols, rows;
      let zoff = 0;
      let rotationSpeed = 0.01;
      let particleCount = 9000;
      let particles = [];
      let flowField;
      let angleOffset = 30;
      const blueShades = ['#012626', '#04BFAD', '#038C7F', '#027368', '#01403A'];

      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        maxspeed: number;
        lifespan: number;
        color: string;

        constructor() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.maxspeed = 5;
          this.lifespan = randomLifespan();
          this.color = p.random(blueShades);
        }

        applyForce(force: p5.Vector) {
          this.acc.add(force);
        }

        follow(vectors: p5.Vector[]) {
          let x = Math.floor(this.pos.x / scl);
          let y = Math.floor(this.pos.y / scl);
          let index = x + y * cols;
          let force = vectors[index];
          this.applyForce(force);
        }

        update() {
          this.vel.add(this.acc);
          this.vel.limit(this.maxspeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
          this.lifespan -= 1;

          if (this.lifespan <= 460) {
            this.respawn();
          }
        }

        show() {
          p.noStroke();
          p.fill(this.color);
          p.ellipse(this.pos.x, this.pos.y, 2, 2);
        }

        edges() {
          if (this.pos.x > p.width) this.pos.x = 0;
          if (this.pos.x < 0) this.pos.x = p.width;
          if (this.pos.y > p.height) this.pos.y = 0;
          if (this.pos.y < 0) this.pos.y = p.height;
        }

        respawn() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.lifespan = randomLifespan();
          this.vel = p.createVector(0, 0);
          this.color = p.random(blueShades);
        }
      }

      function randomLifespan() {
        return Math.floor(p.random(500, 1000));
      }

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        cols = Math.floor(p.width / scl);
        rows = Math.floor(p.height / scl);
        flowField = new Array(cols * rows);

        for (let i = 0; i < particleCount; i++) {
          particles[i] = new Particle();
        }
      };

      p.draw = () => {
        p.background(0, 3);
        
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI + angleOffset;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowField[index] = v;
            xoff += inc;
          }
          yoff += inc;
        }
        zoff += 0.003;
        angleOffset += rotationSpeed;

        particles.forEach((particle: Particle) => {
          particle.follow(flowField);
          particle.edges();
          particle.show();
          particle.update();
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        cols = Math.floor(p.width / scl);
        rows = Math.floor(p.height / scl);
        flowField = new Array(cols * rows);
      };
    };

    const p5Instance = new p5(sketch, canvasRef.current!);

    return () => {
      p5Instance.remove();
    };
  }, [isDarkTheme]);

  return <div ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, }} />;
}
