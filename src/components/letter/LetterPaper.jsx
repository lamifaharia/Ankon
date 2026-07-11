import { motion } from "framer-motion";
import TypingText from "../common/TypingText";

import letterData from "../../data/letterData";


const LetterPaper = ({ onComplete }) => {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:100,
        scale:0.8,
        rotateX:-60,
      }}

      animate={{
        opacity:1,
        y:0,
        scale:1,
        rotateX:0,
      }}

      transition={{
        duration:1.2,
        ease:"easeOut",
      }}

      className="
      relative
      max-w-4xl
      w-full
      "

    >

      {/* Paper glow */}

      <div
        className="
        absolute
        inset-0
        bg-pink-500
        blur-3xl
        opacity-20
        rounded-[50px]
        "
      />


      {/* Paper */}

      <div

        className="
        relative
        overflow-visible
        bg-gradient-to-br
        from-white
        to-pink-50
        text-gray-800
        rounded-[40px]
        p-10
        md:p-16
        shadow-2xl
        "

      >


        <motion.h2

          initial={{
            opacity:0,
            y:-20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:0.8
          }}

          className="
          font-heading
          text-5xl
          text-center
          text-pink-500
          mb-10
          "
        >

          Dear Bhai ❤️

        </motion.h2>



        <p
          className="
          text-lg
          leading-10
          whitespace-pre-line
          "
        >

          <TypingText
            text={letterData}
            speed={35}
          />

        </p>



        <motion.div

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:12
          }}

          className="
          flex
          justify-center
          mt-12
          "

        >




        </motion.div>


      </div>


    </motion.div>

  );

};


export default LetterPaper;