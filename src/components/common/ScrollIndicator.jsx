import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.6,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pink-400 text-3xl"
    >
      <FaAnglesDown />
    </motion.div>
  );
};

export default ScrollIndicator;