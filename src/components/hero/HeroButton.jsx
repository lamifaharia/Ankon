import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const HeroButton = () => {
  return (
    <Link to="story" smooth duration={800}>
      <motion.button
        whileHover={{
          scale: 1.08,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="btn btn-primary rounded-full px-10 py-7 text-lg gap-3"
      >
        Begin the Journey
        <FaArrowDown />
      </motion.button>
    </Link>
  );
};

export default HeroButton;