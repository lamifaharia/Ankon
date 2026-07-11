import { motion } from "framer-motion";

const blobs = [
  {
    size: 380,
    color: "bg-pink-500/20",
    top: "-8%",
    left: "-10%",
    duration: 18,
  },
  {
    size: 320,
    color: "bg-cyan-500/20",
    bottom: "-8%",
    right: "-8%",
    duration: 22,
  },
  {
    size: 260,
    color: "bg-purple-500/20",
    top: "45%",
    left: "40%",
    duration: 20,
  },
];

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[120px] ${blob.color}`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -70, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs;