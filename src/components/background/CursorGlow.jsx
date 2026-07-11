import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) => {
      setMouse({
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
        x: mouse.x - 180,
        y: mouse.y - 180,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
      }}
      className="fixed w-[360px] h-[360px] rounded-full pointer-events-none -z-10 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(236,72,153,.20), rgba(139,92,246,.15), transparent 70%)",
      }}
    />
  );
};

export default CursorGlow;