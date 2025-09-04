import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const menuVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md fixed w-full top-0 left-0 z-50 bg-[#000300] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#00df9a] font-sans">
              DataFinance
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
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
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:text-[#00df9a]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#000300] shadow-md overflow-hidden relative z-40"
          >
            <div className="flex flex-col space-y-2 px-6 py-3 gap-2">
              <a href="#" className="hover:text-[#00df9a] border-b w-1/2 pb-3 ">
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
