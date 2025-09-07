 import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-gray-700 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-green-500 font-bold text-2xl mb-4">DataFinance</h2>
          <p className="text-gray-400 text-sm mb-6">
            Building reliable and scalable digital solutions to help you grow
            faster and smarter.
          </p>
          <div className="flex space-x-4 text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Github"
              className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition-colors"
            >
              <FaDribbble />
            </a>
          </div>
        </div>

        {/* Footer Links Sections */}
        {[
          {
            title: "Solutions",
            links: ["Analytics", "Marketing", "Commerce", "Insights"],
          },
          {
            title: "Support",
            links: ["Pricing", "Documentation", "Guides", "API Status"],
          },
          {
            title: "Company",
            links: ["About", "Blog", "Jobs", "Press", "Careers"],
          },
          {
            title: "Legal",
            links: ["Claim", "Policy", "Terms"],
          },
        ].map((section) => (
          <div key={section.title}>
            {/* Desktop Title */}
            <h3 className="hidden md:block text-white font-semibold mb-4">
              {section.title}
            </h3>

            {/* Mobile Accordion */}
            <button
              onClick={() => toggleSection(section.title)}
              className="flex md:hidden justify-between items-center w-full text-white font-semibold mb-2"
            >
              {section.title}
              <FiChevronDown
                className={`transform transition-transform ${
                  openSection === section.title ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Links */}
            <ul
              className={`space-y-2 text-sm overflow-hidden transition-all duration-300 ${
                openSection === section.title || window.innerWidth >= 768
                  ? "max-h-40"
                  : "max-h-0"
              }`}
            >
              {section.links.map((link) => (
                <li
                  key={link}
                  className="hover:text-green-500 hover:underline cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2025 DataFinance. All rights reserved.</p>
        <p>Made with 💖 by TeshCodes</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 md:mt-0 hover:text-green-500 transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
