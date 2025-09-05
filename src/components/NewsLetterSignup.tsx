 import { useState, useEffect } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [visible, setVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessage({ type: "error", text: "Please enter your email." });
      setVisible(true);
    } else if (!emailRegex.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      setVisible(true);
    } else {
      setMessage({ type: "success", text: "Thanks for subscribing!" });
      setEmail("");
      setVisible(true);
      setDisabled(true); // lock input + button
    }
  };

  // Auto-fade out message + re-enable input/button
  useEffect(() => {
    if (message) {
      setVisible(true);

      const fadeTimer = setTimeout(() => setVisible(false), 2500); // start fading
      const removeTimer = setTimeout(() => {
        setMessage(null);
        setDisabled(false); // unlock after message clears
      }, 3000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [message]);

  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Text */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold">
            Want tips & tricks to optimize your flow?
          </h2>
          <p className="mt-2 text-gray-400">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={disabled}
            className={`bg-gray-400 flex-1 px-4 py-2 rounded-md w-full sm:w-72 ${
              disabled ? "bg-gray-200 cursor-not-allowed text-gray-500" : "text-black"
            }`}
          />
          <button
            type="submit"
            disabled={disabled}
            className={`px-6 py-2 rounded-md transition-colors w-full sm:w-auto 
              ${
                disabled
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
          >
            {message?.type === "success" ? "Subscribed" : "Notify me"}
          </button>
        </form>
      </div>

      {/* Privacy note */}
      <p className="text-gray-500 text-sm text-center mt-6">
        We care about the protection of your data. Read our{" "}
        <a href="#" className="underline text-green-500">Privacy Policy</a>.
      </p>

      {/* Message */}
      {message && (
        <p
          className={`mt-4 text-center text-sm transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          } ${message.type === "success" ? "text-green-400" : "text-red-400"}`}
        >
          {message.text}
        </p>
      )}
    </section>
  );
}
