import React, { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="font-inter"> 
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-violet-50 to-purple-50 font-inter">
      <h2 className="text-3xl font-bold text-gray-900">Choose your right plan!</h2>
      <p className="text-gray-500 text-center max-w-lg mt-2 font-inter">
        Select from best plans, ensuring a perfect match. Need more or less?
        Customize your subscription for a seamless fit!
      </p>
      
      {/* Billing Toggle */}
      <div className="mt-6 flex bg-gray-200 rounded-full p-1">
        <button
          className={`px-6 py-2 text-sm font-medium rounded-full transition ${
            billingCycle === "monthly" ? "bg-purple-500 text-white" : "text-gray-700"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 text-sm font-medium rounded-full transition ${
            billingCycle === "quarterly" ? "bg-purple-500 text-white" : "text-gray-700"
          }`}
          onClick={() => setBillingCycle("quarterly")}
        >
          Annual (save 25%)
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="bg-gradient-to-r from-violet-100 to-pink-100 shadow-md rounded-xl p-6 border-purple-500 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-purple-600 font-inter">Starter</h3>
            <p className="text-gray-500 text-sm mt-2">
              Ideal for those who’ve already got their website up and running.
            </p>
            <p className="text-4xl font-bold mt-4">99$<span className="text-lg font-medium">/month</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ 3 Domains</li>
              <li>✔ SEO fixes applied to site</li>
              <li>✔ Site Audit based on google guideline</li>
              <li>✔ 5 SEO blog posts every week</li>
              <li>✔ 24/7 support</li>
            </ul>
          </div>
          <button className="mt-6 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 font-bold">Get Started</button>
        </div>
        
        {/* Growth Plan */}
        <div className="bg-gradient-to-r from-violet-100 to-pink-100 shadow-lg rounded-xl p-6 border-purple-700 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-purple-700 font-inter">Growth</h3>
            <p className="text-gray-500 text-sm mt-2">
              Ideal if you want to build or scale your website fast.
            </p>
            <p className="text-4xl font-bold mt-4">119$<span className="text-lg font-medium">/month</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ 10 Domains</li>
              <li>✔ SEO fixes applied to site</li>
              <li>✔ Site Audit based on google guideline</li>
              <li>✔ 5 SEO blog posts every week</li>
              <li>✔ 24/7 support</li>
            </ul>
          </div>
          <button className="mt-6 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 font-bold">Get Started</button>
        </div>

        {/* Custom Plan */}
        <div className="bg-gradient-to-r from-violet-100 to-pink-100 shadow-lg rounded-xl p-6 border-gray-600 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 font-inter">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-2">
              Get a quote tailored to your needs
            </p>
            <p className="text-xl font-bold mt-4">Let’s Talk!</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Everything in Growth Plan</li>
              <li>✔ Greater than 10 domains</li>
              <li>✔ Dedicated SEO Expert for personalized guidance and oversight</li>
              <li>✔ 24/7 Support</li>
            </ul>
          </div>
          <button className="mt-6 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 font-bold">Talk to Sales</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
