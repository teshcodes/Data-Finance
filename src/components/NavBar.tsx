 import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence} from "framer-motion";
import type { Variants } from "framer-motion";

const menuVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const initialTheme = savedTheme || "light"; // ✅ default is light
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="shadow-md fixed w-full top-0 left-0 z-50 bg-white dark:bg-[#000300] text-black dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#00df9a] font-sans">
              DataFinance
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="hover:text-[#00df9a]">
              Home
            </a>
            <a href="#" className="hover:text-[#00df9a]">
              Company
            </a>
            <a href="#" className="hover:text-[#00df9a]">
              Services
            </a>
            <a href="#" className="hover:text-[#00df9a]">
              Contact
            </a>

            {/* Dark/Light toggle */}
            <button
              onClick={toggleTheme}
              className="ml-6 p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:border-[#00df9a] transition"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-blue-500" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Dark/Light toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:border-[#00df9a] transition"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-blue-500" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:text-[#00df9a]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-slate-900 shadow-md overflow-hidden relative z-40"
          >
            <div className="flex flex-col space-y-2 px-6 py-3 gap-2">
              <a href="#" className="hover:text-[#00df9a] border-b w-1/2 pb-3">
                Home
              </a>
              <a href="#" className="hover:text-[#00df9a] border-b w-1/2 pb-3">
                About
              </a>
              <a href="#" className="hover:text-[#00df9a] border-b w-1/2 pb-3">
                Resources
              </a>
              <a href="#" className="hover:text-[#00df9a] border-b w-1/2 pb-3">
                Services
              </a>
              <a href="#" className="hover:text-[#00df9a]">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
