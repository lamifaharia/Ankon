import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MouseTrail = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const id = Date.now() + Math.random();

      const particle = {
        id,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-18), particle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              opacity: 1,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              scale: 2.2,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              background:
                "radial-gradient(circle,#ffffff,#ff4fa3,#8b5cf6,transparent)",
              boxShadow:
                "0 0 15px #ff4fa3,0 0 25px #8b5cf6",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MouseTrail;