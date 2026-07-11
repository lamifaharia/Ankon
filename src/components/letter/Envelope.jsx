import { motion } from "framer-motion";

const Envelope = ({ onOpen }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        scale: .8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        scale: 1.05,
        rotate: -2,
      }}
      transition={{
        duration: .8,
      }}
      onClick={onOpen}
      className="cursor-pointer"
    >
      <div className="glass w-[340px] h-[230px] rounded-2xl relative overflow-hidden">

        <div
          className="absolute inset-0 bg-gradient-to-r
          from-pink-500
          via-purple-500
          to-cyan-500
          opacity-30"
        />

        <div
          className="absolute
          left-0
          right-0
          top-0
          border-l-[170px]
          border-r-[170px]
          border-t-[120px]
          border-l-transparent
          border-r-transparent
          border-t-white/20"
        />

        <div className="absolute inset-0 flex items-center justify-center">

          <p className="font-heading text-2xl glow">
            Click to Open 💌
          </p>

        </div>

      </div>
    </motion.div>
  );
};

export default Envelope;