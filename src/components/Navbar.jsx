import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    "home",
    "gallery",
    "timeline",
    "memories",
    "letter",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="backdrop-blur-lg bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          <h1 className="font-bold text-pink-400 text-xl">
            🎂 Ankon
          </h1>

          <div className="hidden md:flex gap-8">
            {links.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={800}
                className="cursor-pointer hover:text-pink-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;