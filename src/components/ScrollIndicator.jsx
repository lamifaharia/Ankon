import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <FaChevronDown size={30} />
    </motion.div>
  );
};

export default ScrollIndicator;