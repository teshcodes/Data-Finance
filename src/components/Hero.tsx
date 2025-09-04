 import { ReactTyped } from "react-typed";
 import { motion } from "framer-motion"
 
 export default function Hero() {
  return (
    <section className="bg-[#000300] text-white min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
      <p className="text-[#00df9a] font-bold uppercase tracking-wide">
        Growing with data analytics
      </p>
      <h1 className="text-4xl md:text-6xl font-bold mt-4">
        Grow with data.
      </h1>
        <motion.h2
        className="text-2xl md:text-4xl font-bold mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Fast, flexible financing for{" "}
        <span className="text-gray-400">
          <ReactTyped
            strings={["BTC", "SaaS", "BTB"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </span>
      </motion.h2>
      <p className="text-gray-400 mt-4 max-w-2xl">
        Monitor your data analytics to increase revenue for BTB, BTC, & SaaS
        platforms.
      </p>
      <button className="mt-8 px-6 py-3 rounded-md bg-[#00df9a] text-black font-semibold hover:bg-[#00c985] cursor-pointer">
        Get Started
      </button>
    </section>
  );
}
