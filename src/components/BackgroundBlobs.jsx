import { motion } from "framer-motion";

const blobStyle =
  "absolute rounded-full blur-[120px] opacity-30";

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      <motion.div
        animate={{
          x: [0, 120, -50, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className={`${blobStyle} w-[450px] h-[450px] bg-pink-500 top-[-120px] left-[-100px]`}
      />

      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className={`${blobStyle} w-[400px] h-[400px] bg-cyan-500 bottom-[-80px] right-[-80px]`}
      />

      <motion.div
        animate={{
          x: [0, 50, -80, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className={`${blobStyle} w-[350px] h-[350px] bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      />

    </div>
  );
};

export default BackgroundBlobs;