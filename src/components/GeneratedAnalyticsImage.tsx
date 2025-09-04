import { useState, useEffect } from "react";

const images = [
  "/images/image-1.png",
  "/images/image-2.png",
  "/images/image-3.png",
  "/images/image-4.webp",
  "/images/image-5.webp",
  "/images/image-6.webp",
  "/images/image-7.webp",
  "/images/image-8.webp",
  "/images/image-9.png",
  "/images/image-10.webp",
  "/images/image-11.png",
  "/images/image-12.webp",
  "/images/image-13.webp",
  "/images/image-14.webp",
  "/images/image-15.png",
  "/images/image-16.png",
  "/images/image-17.png",
  "/images/image-18.png",
  "/images/image-19.png",
  "/images/image-20.png",
  "/images/image-21.png",
  "/images/image-22.png",
  "/images/image-23.webp",
  "/images/image-24.png",
  "/images/image-25.png",
  "/images/image-26.webp",
];

export default function GeneratedAnalyticsImage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length); // switch image
        setFade(true); // fade-in
      }, 3000); // fade duration in ms
    }, 3000); // total time per image (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[index]}
      alt="Analytics"
      className={`w-full max-w-lg rounded-xl shadow transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
