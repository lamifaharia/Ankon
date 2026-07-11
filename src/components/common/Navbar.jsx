import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "Home",
    to: "home",
  },
  {
    title: "Story",
    to: "story",
  },
  {
    title: "Gallery",
    to: "gallery",
  },
  {
    title: "Bhai",
    to: "memories",
  },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-full px-8 py-4 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
        <ul className="flex gap-8 text-sm md:text-base">

          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                className="cursor-pointer text-gray-300 hover:text-pink-400 transition duration-300"
                activeClass="text-pink-400"
              >
                {item.title}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;