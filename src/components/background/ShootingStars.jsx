import { motion } from "framer-motion";

const meteors = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  top: Math.random() * 40,
  delay: i * 4,
}));

const ShootingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">

      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{
            x: "-20vw",
            y: `${meteor.top}vh`,
            opacity: 0,
          }}
          animate={{
            x: "120vw",
            y: `${meteor.top + 35}vh`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 12,
            delay: meteor.delay,
            ease: "easeOut",
          }}
          className="absolute"
        >
          <div className="w-36 h-[2px] bg-gradient-to-r from-white to-transparent rotate-[25deg]" />
        </motion.div>
      ))}

    </div>
  );
};

export default ShootingStars;