import { motion } from "framer-motion";

const Envelope = ({ onOpen }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      whileHover={{
        scale: 1.08,
        rotate: 2,
      }}

      transition={{
        duration: 1,
      }}

      onClick={onOpen}

      className="
      cursor-pointer
      relative
      z-20
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        rounded-3xl
        bg-pink-500
        blur-3xl
        opacity-30
        animate-pulse
        "
      />


      {/* Envelope */}
      <div
        className="
        relative
        w-[340px]
        h-[230px]
        rounded-3xl
        overflow-visible
        glass
        "
      >

        {/* Flap */}
        <motion.div

          initial={{
            rotateX:0,
          }}

          whileHover={{
            rotateX:-35,
          }}

          transition={{
            duration:0.5,
          }}

          style={{
            transformStyle:"preserve-3d",
          }}

          className="
          absolute
          top-0
          left-0
          w-full
          h-32
          rounded-t-3xl
          bg-gradient-to-r
          from-pink-400
          via-purple-400
          to-cyan-400
          opacity-40
          origin-top
          z-20
          "

        />


        {/* Letter inside */}
        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          "
        >

          <p
            className="
            font-heading
            text-3xl
            glow
            "
          >
            💌 Bhai
          </p>

        </div>


      </div>


      <p
        className="
        text-center
        mt-6
        text-gray-300
        "
      >
        Click to open
      </p>


    </motion.div>
  );
};

export default Envelope;