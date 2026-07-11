import { motion } from "framer-motion";

const sparkles = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 10,
}));

const Sparkles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-white"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            rotate: [0, 180],
            scale: [0.3, 1.3, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: sparkle.delay,
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;