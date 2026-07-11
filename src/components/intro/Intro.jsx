import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Intro = ({ onStart }) => {

  const [showButton, setShowButton] = useState(false);


  // Lock scrolling while intro is open
  useEffect(() => {

    document.body.style.overflow = "hidden";

    return () => {
  document.body.style.overflow = "auto";
};

  }, []);



  const handleStart = () => {

    document.body.style.overflow = "";

    onStart();

  };


  return (
    <AnimatePresence>

      <motion.div

        className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        px-6
        overflow-hidden
        bg-[#050816]
        touch-none
        "

        initial={{
          opacity:1
        }}

        exit={{
          opacity:0
        }}

        transition={{
          duration:1
        }}

      >


        {/* Galaxy Background */}


        <div
          className="
          absolute
          top-[-150px]
          left-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-pink-500/20
          blur-[150px]
          "
        />


        <div
          className="
          absolute
          bottom-[-150px]
          right-[-150px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-purple-500/20
          blur-[170px]
          "
        />


        <div
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
          "
        />


        {/* Content */}


        <div
          className="
          relative
          z-10
          max-w-3xl
          text-center
          "
        >


          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              duration:1
            }}

            className="
            text-pink-400
            uppercase
            tracking-[8px]
            "

          >
            Dear Bhai,
          </motion.p>





          <motion.h1

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.6,
              duration:1
            }}

            onAnimationComplete={() => {

              setTimeout(() => {

                setShowButton(true);

              },1000);

            }}

            className="
            font-heading
            text-4xl
            md:text-6xl
            mt-10
            leading-tight
            text-white
            "

          >

            Before you continue...

          </motion.h1>






          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:1.4
            }}

            className="
            mt-10
            text-gray-300
            leading-9
            text-lg
            "

          >

            I made something for you.

            <br /><br />

            This isn't just another birthday Wish.

            <br /><br />

            It's almost four years of friendship,
            memories,
            laughter,
            fights,
            photos,
            and everything in between.

            <br /><br />

            So...

            <br />

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
                scale:1.08,
                y:-5
              }}


              whileTap={{
                scale:.95
              }}


              onClick={handleStart}


              className="
              mt-16
              rounded-full
              px-12
              py-4
              text-lg
              font-bold
              text-white
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-cyan-500
              shadow-[0_0_35px_rgba(236,72,153,0.7)]
              hover:shadow-[0_0_60px_rgba(139,92,246,0.9)]
              transition-all
              duration-300
              "

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