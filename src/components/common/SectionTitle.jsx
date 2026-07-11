import { motion } from "framer-motion";

const SectionTitle = ({ chapter, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <p className="uppercase tracking-[8px] text-pink-400">
        {chapter}
      </p>

      <h2 className="font-heading text-5xl md:text-7xl mt-4">
        {title}
      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;