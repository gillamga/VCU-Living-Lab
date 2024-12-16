import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import p5 from 'p5';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './modules/index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
        // Set background based on theme
        p.background(isDarkTheme ? 0 : 255, 3);
        
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
  }, [isDarkTheme]); // Add isDarkTheme as dependency to re-initialize when theme changes

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div ref={canvasRef} className={styles.canvasBackground}></div>
      <div className={styles.container}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a 
            className="button button--secondary button--lg" 
            href="/Project Description.pdf" 
            download
          >
            Download Project Description
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description goes in meta tag in <head>">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
