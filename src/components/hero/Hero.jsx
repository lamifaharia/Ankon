import { motion } from "framer-motion";

import TypeWriter from "../common/TypeWriter";
import ScrollIndicator from "../common/ScrollIndicator";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      overflow-hidden
      "
    >
      {/* Floating Galaxy Orbs */}

      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        top-32
        left-20
        w-40
        h-40
        bg-pink-500/20
        rounded-full
        blur-3xl
        "
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        right-20
        w-52
        h-52
        bg-purple-500/20
        rounded-full
        blur-3xl
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
        relative
        z-10
        max-w-5xl
        w-full
        "
      >
        <div
          className="
          backdrop-blur-2xl
          bg-white/5
          border
          border-white/10
          rounded-[50px]
          p-10
          md:p-16
          shadow-2xl
          "
        >
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
            text-center
            uppercase
            tracking-[12px]
            text-pink-300
            text-sm
            md:text-base
            "
          >
            Happy Birthday
          </motion.p>

          <motion.h1
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="
            mt-6
            text-center
            font-heading
            text-7xl
            md:text-9xl
            font-black
            "
          >
            <span
              className="
              bg-gradient-to-r
              from-pink-400
              via-purple-400
              to-cyan-400
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]
              "
            >
              Ankon
            </span>
          </motion.h1>

          <div
            className="
            mt-8
            text-center
            "
          >
            <TypeWriter />
          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
            }}
            className="
            mt-12
            max-w-2xl
            mx-auto
            text-center
            text-gray-300
            text-lg
            leading-9
            "
          >
            Some people enter your life as friends.
            <br />
            Some people become family.
            <br />
            You became my Bhai ❤️
          </motion.p>

          <motion.a
            href="#story"
            whileHover={{
              scale: 1.1,
            }}
            className="
mt-12
mx-auto
flex
w-fit
items-center
justify-center
rounded-full
px-12
py-4
font-bold
text-white
bg-gradient-to-r
from-pink-500
via-purple-500
to-cyan-500
shadow-[0_0_30px_rgba(236,72,153,0.6)]
hover:scale-105
transition-all
duration-300
"
          >
            Begin Our Journey ✨
          </motion.a>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
