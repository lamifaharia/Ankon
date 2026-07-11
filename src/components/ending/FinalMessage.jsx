import { motion } from "framer-motion";


const FinalMessage = () => {

  return (

    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
      "
    >

      {/* Soft background glow */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-pink-500
        rounded-full
        blur-[150px]
        opacity-20
        "
      />


      <motion.div

        initial={{
          opacity:0,
          y:80,
          scale:.8
        }}

        animate={{
          opacity:1,
          y:0,
          scale:1
        }}

        transition={{
          duration:1.5,
          ease:"easeOut"
        }}

        className="
        relative
        z-10
        text-center
        max-w-4xl
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
            delay:1
          }}

          className="
          uppercase
          tracking-[10px]
          text-pink-400
          mb-8
          "
        >

          For My Bhai

        </motion.p>



        <motion.h1

          initial={{
            opacity:0,
            scale:.7
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            delay:.5,
            duration:1
          }}

          className="
          font-heading
          text-6xl
          md:text-9xl
          font-black
          bg-gradient-to-r
          from-pink-400
          via-purple-400
          to-cyan-400
          bg-clip-text
          text-transparent
          "

        >

          Happy Birthday
          <br />

          Ankon ❤️

        </motion.h1>



        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:2
          }}

          className="
          mt-12
          text-xl
          md:text-2xl
          leading-10
          text-gray-300
          "
        >

          Some people enter your life as friends...

          <br />

          but somehow become family.

          <br /><br />

          Thank you for being my first university friend,

          my biggest annoyance,

          and my forever Bhai.

          <br /><br />

          No matter how much we fight,

          I will always be grateful that life gave me you.

        </motion.p>



        <motion.div

          initial={{
            opacity:0,
            scale:0
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            delay:3,
            duration:1
          }}

          className="
          mt-14
          text-6xl
          "
        >

          ❤️

        </motion.div>


      </motion.div>


    </section>

  );

};


export default FinalMessage;