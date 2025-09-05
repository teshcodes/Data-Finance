 import React from "react";
import PricingCard from "../components/PricingCard";

const pricingTiers = [
  {
    title: "Single User",
    price: "$149",
    storage: "1 TB Storage",
    usersAllowed: "1 User Allowed",
    uploadLimit: "Send up to 3 GB",
    featured: false,
  },
  {
    title: "Partnership",
    price: "$199",
    storage: "1 TB Storage",
    usersAllowed: "3 Users Allowed",
    uploadLimit: "Send up to 10 GB",
    featured: true, // ⭐ Highlighted plan
  },
  {
    title: "Group Account",
    price: "$299",
    storage: "5 TB Storage",
    usersAllowed: "10 Users Allowed",
    uploadLimit: "Send up to 20 GB",
    featured: false,
  },
];

const PricingPage: React.FC = () => {
  return (
    <section className="bg-white text-gray-700 py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Pricing
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose the plan that's right for you. Our pricing is transparent and
          flexible.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch relative">
        {pricingTiers.map((tier) => (
          <div
            key={tier.title}
            className={`w-full md:w-1/3 transition-transform duration-300 relative ${
              tier.featured
                ? "scale-105 md:scale-110 z-10"
                : "scale-100"
            }`}
          >
            {/* Gradient background for featured */}
            {tier.featured && (
              <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent rounded-2xl -z-10" />
            )}

            <PricingCard
              title={tier.title}
              price={tier.price}
              storage={tier.storage}
              usersAllowed={tier.usersAllowed}
              uploadLimit={tier.uploadLimit}
              featured={tier.featured}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
