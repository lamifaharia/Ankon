import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 120,
      }}
      className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(236,72,153,.18) 0%, rgba(139,92,246,.12) 35%, transparent 70%)",
      }}
    />
  );
};

export default CursorGlow;