import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, 
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 8,
      scale: Math.random() * 0.5 + 0.5,
      size: Math.random() * 18 + 18,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            opacity: 0,
            scale: heart.scale,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          className="absolute text-pink-400"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;