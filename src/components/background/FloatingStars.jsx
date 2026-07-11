import { motion } from "framer-motion";

const stars = Array.from({ length: 300 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 5 + 2,
  delay: Math.random() * 6,
  opacity: Math.random() * 0.8 + 0.2,
}));

const FloatingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: `
              0 0 6px rgba(255,255,255,.9),
              0 0 12px rgba(255,255,255,.7),
              0 0 18px rgba(255,255,255,.4)
            `,
          }}
          animate={{
            opacity: [
              star.opacity * 0.4,
              star.opacity,
              star.opacity * 0.4,
            ],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStars;