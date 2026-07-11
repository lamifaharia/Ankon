import { motion } from "framer-motion";

const stars = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 5,
}));

const FloatingStars = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
            boxShadow: "0 0 12px rgba(255,255,255,.9)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
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