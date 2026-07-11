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

        className="
        rounded-full
        px-10
        py-7
        text-lg
        gap-3
        flex
        items-center
        justify-center
        font-bold
        text-white
        bg-gradient-to-r
        from-pink-500
        via-purple-500
        to-cyan-500
        shadow-[0_0_35px_rgba(236,72,153,0.6)]
        hover:shadow-[0_0_50px_rgba(139,92,246,0.8)]
        transition-all
        duration-300
        "
      >
        Begin the Journey
        <FaArrowDown />
      </motion.button>
    </Link>
  );
};

export default HeroButton;