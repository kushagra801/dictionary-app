import React, { useRef, useEffect } from "react";

// Universe background (animated stars)
export default function UniverseBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    const DPR = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
      createStars();
    }

    function createStars() {
      // density scales with resolution
      const STAR_COUNT = Math.floor((width * height) / 6500);
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.15 + 0.25,
          speed: Math.random() * 0.11 + 0.04,
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      // subtle radial gradient behind (for slight nebula feel)
      const grd = ctx.createRadialGradient(
        width / 2, height / 2, height / 4,
        width / 2, height / 2, Math.max(width, height) / 1
      );
      grd.addColorStop(0, "rgba(100,73,255,0.18)");
      grd.addColorStop(0.57, "rgba(63, 206, 255, 0.06)");
      grd.addColorStop(1, "rgba(0,0,32,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // draw/animate stars
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y >= height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        // twinkle with slight opacity variation
        const opacity = 0.52 + Math.sin(star.twinkle + Date.now() * 0.001) * 0.36;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fffbe7";
        ctx.shadowColor = "#dbeafe";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;
      });
    }

    function animate() {
      drawStars();
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        zIndex: 0,
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        background: "radial-gradient(ellipse at bottom right, #160b35 10%, #1a2549 90%)",
        transition: "background 1.4s"
      }}
      aria-hidden="true"
    />
  );
}