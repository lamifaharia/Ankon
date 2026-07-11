import { motion } from "framer-motion";

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 15,
  duration: Math.random() * 8 + 12,
  size: Math.random() * 18 + 12,
}));

const Heart = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#ff4d9d"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 016.5 4c1.74 0 3.41.81 4.5 2.09A6.03 6.03 0 0115.5 4 4.5 4.5 0 0120 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.5, 0],
            x: [0, 25, -15, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${heart.left}%`,
          }}
        >
          <Heart size={heart.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;