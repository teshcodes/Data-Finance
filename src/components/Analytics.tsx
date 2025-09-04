 import GeneratedAnalyticsImage from "./GeneratedAnalyticsImage";

export default function Analytics() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left AI generated image */}
        <div className="flex justify-center items-center">
          <GeneratedAnalyticsImage />
        </div>

        {/* Right text content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Manage your analytics easily
          </h2>
          <p className="text-gray-600 mt-4">
            Our dashboard gives you real-time insights into your SaaS performance.
            Generate visual analytics illustrations instantly with AI-powered tools.
          </p>
        </div>
      </div>
    </section>
  );
}
