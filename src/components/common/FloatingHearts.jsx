import { motion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 10,
  duration: Math.random() * 8 + 12,
  size: Math.random() * 18 + 12,
}));

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.35, 0],
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: heart.left,
            fontSize: heart.size,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;