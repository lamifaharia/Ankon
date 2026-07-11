import { motion } from "framer-motion";

const AuroraGlow = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute
        w-[700px]
        h-[700px]
        rounded-full
        blur-[170px]
        bg-pink-500/30
        -top-52
        -left-40"
      />

      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -80, 0],
          scale: [1, .9, 1.2, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute
        w-[650px]
        h-[650px]
        rounded-full
        blur-[170px]
        bg-cyan-500/25
        bottom-0
        right-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute
        w-[500px]
        h-[500px]
        rounded-full
        blur-[150px]
        bg-purple-500/25
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2"
      />
    </div>
  );
};

export default AuroraGlow;