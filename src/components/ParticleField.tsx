import { motion } from "framer-motion";

export function ParticleField({ count = 24 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-px w-px rounded-full bg-[#c9a962]"
          style={{
            left: `${12 + (i % 9) * 9}%`,
            top: `${18 + Math.floor(i / 4) * 11}%`,
          }}
          animate={{
            y: [0, -32, 0],
            opacity: [0.12, 0.6, 0.12],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            delay: i * 0.14,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}