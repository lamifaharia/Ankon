import { motion } from "framer-motion";

const FunnyCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: .6,
        delay: index * .1,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
      }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
    >
      <div className="text-5xl">
        {item.emoji}
      </div>

      <h3 className="font-heading text-2xl mt-5">
        {item.title}
      </h3>

      <p className="text-gray-300 mt-4 leading-8">
        {item.text}
      </p>
    </motion.div>
  );
};

export default FunnyCard;