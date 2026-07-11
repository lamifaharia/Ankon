import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }) => {
  const texts = [
    "Loading memories...",
    "Collecting photos...",
    "Preparing something special...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texts.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 1800);

      return () => clearTimeout(timer);
    }

    const finish = setTimeout(() => {
      onFinish();
    }, 1800);

    return () => clearTimeout(finish);
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-5xl"
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;