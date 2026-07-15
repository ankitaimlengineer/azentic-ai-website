"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "10%", top: "15%", size: 120, duration: 8 },
  { left: "25%", top: "70%", size: 80, duration: 10 },
  { left: "45%", top: "20%", size: 100, duration: 9 },
  { left: "60%", top: "60%", size: 140, duration: 11 },
  { left: "80%", top: "30%", size: 90, duration: 7 },
  { left: "90%", top: "80%", size: 110, duration: 12 },
];

export default function FloatingParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-500/20 blur-3xl"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}