import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Intro = ({ onStart }) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-slate-950 flex items-center justify-center px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-3xl text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-pink-400 uppercase tracking-[8px]"
          >
            Dear Bhai,
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .6,
              duration: 1
            }}
            onAnimationComplete={()=>{
              setTimeout(()=>{
                setShowButton(true)
              },1000)
            }}
            className="font-heading text-4xl md:text-6xl mt-10 leading-tight"
          >
            Before you continue...
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{
              delay:1.4
            }}
            className="mt-10 text-gray-300 leading-9 text-lg"
          >
            I made something for you.

            <br /><br />

            This isn't just another birthday website.

            <br /><br />

            It's four years of friendship,
            memories,
            laughter,
            fights,
            photos,
            and everything in between.

            <br /><br />

            So...

            Please don't rush.

            <br />

            Take your time.
          </motion.p>

          {showButton && (

            <motion.button

              initial={{
                opacity:0,
                scale:.8
              }}

              animate={{
                opacity:1,
                scale:1
              }}

              whileHover={{
                scale:1.08
              }}

              onClick={onStart}

              className="btn btn-primary rounded-full mt-16 px-12"

            >

              Begin Our Journey →

            </motion.button>

          )}

        </div>

      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;