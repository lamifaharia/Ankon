import { motion } from "framer-motion";

const MemoryCard = ({ reason, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,.35)]"
    >
      <div className="text-5xl mb-6">
        {reason.emoji}
      </div>

      <h3 className="font-heading text-2xl mb-4">
        {reason.title}
      </h3>

      <p className="text-gray-300 leading-8">
        {reason.description}
      </p>
    </motion.div>
  );
};

export default MemoryCard;