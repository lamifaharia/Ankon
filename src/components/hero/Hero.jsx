import { motion } from "framer-motion";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";
import ScrollIndicator from "../common/ScrollIndicator";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,.35)]">
          <HeroText />

          <div className="flex justify-center mt-14">
            <HeroButton />
          </div>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;