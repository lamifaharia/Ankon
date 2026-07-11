import { motion } from "framer-motion";
import TypeWriter from "../common/TypeWriter";

const HeroText = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="uppercase tracking-[8px] text-pink-400 text-center"
      >
        Dear Bhai
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="font-heading text-center text-6xl md:text-8xl lg:text-9xl font-black mt-6"
      >
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          ANKON
        </span>
      </motion.h1>

      <div className="mt-10 text-center">
        <TypeWriter />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-10 text-gray-300 max-w-2xl mx-auto leading-9"
      >
        This isn't just a website.
        <br />
        It's a collection of memories,
        laughter, and everything I never
        found the right words to say.
      </motion.p>
    </>
  );
};

export default HeroText;