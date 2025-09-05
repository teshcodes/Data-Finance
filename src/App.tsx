import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsletterSignup from "./components/NewsLetterSignup";
import PricingPage from "./components/PricingPage";


export default function App() {
  return (
    <div className="bg-[#000300] min-h-screen">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsletterSignup />
      <PricingPage />
    </div>
  );
}
