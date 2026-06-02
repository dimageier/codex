import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";
import { album } from "@/data/tracks";

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.2, 4.2);

    const geometry = new THREE.BoxGeometry(1.4, 1.9, 0.55);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xc9a962,
      metalness: 0.85,
      roughness: 0.12,
      transmission: 0.72,
      thickness: 0.8,
      transparent: true,
      opacity: 0.88,
      emissive: 0x3d2e14,
      emissiveIntensity: 0.35,
    });
    const tome = new THREE.Mesh(geometry, material);
    scene.add(tome);
    const edges = new THREE.EdgesGeometry(geometry);
    const wireframe = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xe8d5a3, transparent: true, opacity: 0.65 })
    );
    scene.add(wireframe);
    const light1 = new THREE.PointLight(0xffd89b, 2.2, 12);
    light1.position.set(2, 1.5, 3);
    scene.add(light1);
    scene.add(new THREE.AmbientLight(0x1a1520, 0.6));

    let frame = 0;
    let animId = 0;
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);
    const animate = () => {
      frame += 0.008;
      tome.rotation.y = Math.sin(frame) * 0.35;
      tome.rotation.x = Math.sin(frame * 0.7) * 0.12;
      wireframe.rotation.copy(tome.rotation);
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      edges.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden sacred-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08)_0%,transparent_55%)]" />
      <div className="light-ray" style={{ left: "22%" }} />
      <div className="light-ray" style={{ left: "48%", animationDelay: "-6s" }} />
      <div className="light-ray" style={{ left: "74%", animationDelay: "-12s" }} />
      <ParticleField />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.img
          src="/cover.jpg"
          alt="Codex album cover"
          className="mx-auto mb-8 h-48 w-48 rounded-sm object-cover shadow-[0_0_80px_rgba(201,169,98,0.35)] md:h-56 md:w-56"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.p className="mb-3 font-grotesk text-[11px] tracking-[0.45em] text-[#c9a962]">
          [{album.label.toUpperCase()} · {album.year}]
        </motion.p>
        <motion.h1 className="codex-title text-6xl md:text-8xl">CODEX</motion.h1>
        <motion.p className="mx-auto mt-6 max-w-lg text-lg font-light text-[#c3b8a3] md:text-xl">
          Twelve transmissions. One mythic arc.
        </motion.p>
        <motion.div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={album.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#fa233b] to-[#fb5c74] px-8 py-3 font-grotesk text-sm tracking-widest text-white transition hover:brightness-110"
          >
            LISTEN ON APPLE MUSIC
          </a>
          <button
            type="button"
            onClick={() =>
              document.getElementById("tracks")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-[#c9a962]/40 bg-[#c9a962]/10 px-8 py-3 font-grotesk text-sm tracking-widest text-[#e8d5a3] transition hover:border-[#c9a962]"
          >
            ENTER THE CODEX
          </button>
        </motion.div>
      </div>
    </section>
  );
}