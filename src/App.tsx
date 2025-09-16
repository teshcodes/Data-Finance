import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsletterSignup from "./components/NewsLetterSignup";
import PricingPage from "./components/PricingPage";
import Footer from "./components/Footer.tsx";


export default function App() {
  return (
    <div className="bg-white text-black dark:bg-[#000300] dark:text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsletterSignup />
      <PricingPage />
      <Footer />
    </div>
  );
}
