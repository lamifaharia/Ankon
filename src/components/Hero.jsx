import { motion } from "framer-motion";
import BirthdayCountdown from "./BirthdayCountdown";
import TypeWriter from "./TypeWriter";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-12 shadow-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-pink-400 tracking-[6px] uppercase text-center"
          >
            Happy Birthday
          </motion.p>

          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="font-heading glow text-center text-7xl md:text-9xl font-black mt-5"
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ankon
            </span>
          </motion.h1>

          <div className="mt-8 text-center">
            <TypeWriter />
          </div>

          <BirthdayCountdown />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-center text-gray-300 leading-9 max-w-2xl mx-auto"
          >
            Some people become friends. Some become family. You became my Bhai.
          </motion.p>

          <div className="flex justify-center mt-12">
            <button className="btn btn-primary rounded-full px-12 text-lg shadow-xl hover:scale-110 duration-300">
              Begin Our Journey →
            </button>
          </div>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
