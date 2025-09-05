 import React from "react";
import { User, Users, Layers } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  storage: string;
  usersAllowed: string;
  uploadLimit: string;
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  storage,
  usersAllowed,
  uploadLimit,
  featured = false,
}) => {
  // Pick an icon based on the plan
  const getIcon = () => {
    if (title.includes("Single")) return <User className="w-10 h-10 text-green-500" />;
    if (title.includes("Partner")) return <Users className="w-10 h-10 text-green-500" />;
    return <Layers className="w-10 h-10 text-green-500" />;
  };

  return (
    <div
      className={`relative bg-white p-8 rounded-xl flex-1 min-w-[280px] max-w-sm transition transform duration-300
        ${
          featured
            ? "border-2 border-green-500 shadow-lg hover:shadow-2xl hover:scale-105"
            : "border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2"
        }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Most Popular
        </div>
      )}

      <div className="flex items-center justify-center mb-4">{getIcon()}</div>

      <h3 className="text-2xl font-bold text-gray-900 text-center mb-1">{title}</h3>
      <p className="text-4xl font-extrabold text-green-600 text-center mb-6">{price}</p>

      <ul className="text-gray-600 text-sm space-y-3 mb-8">
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {storage}
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {usersAllowed}
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {uploadLimit}
        </li>
      </ul>

      {/* CTA Button */}
      <div className="text-center">
        <button
          className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-300
            ${
              featured
                ? "bg-green-500 text-white hover:bg-green-600 hover:shadow-[0_0_12px_rgba(34,197,94,0.7)]"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
