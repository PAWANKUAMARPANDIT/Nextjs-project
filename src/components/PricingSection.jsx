import React from "react";
import Link from "next/link";
import axios from "axios";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: 49,
      features: [
        "10k Visitors/mo",
        "10 Funnels, 50 Pages",
        "Unlimited Transactions",
        "Analytics",
        "Integrations",
        "Audience Data",
        "Premium templates",
        "White Labelling",
      ],
      available: [true, true, true, true, true, false, false, false],
      buttonText: "Get Basic",
    },
    {
      name: "Professional",
      price: 69,
      features: [
        "10k Visitors/mo",
        "10 Funnels, 50 Pages",
        "Unlimited Transactions",
        "Analytics",
        "Integrations",
        "Audience Data",
        "Premium templates",
        "White Labelling",
      ],
      available: [true, true, true, true, true, true, true, false],
      buttonText: "Get Pro",
      isPopular: true,
    },
    {
      name: "Ultimate",
      price: 89,
      features: [
        "10k Visitors/mo",
        "10 Funnels, 50 Pages",
        "Unlimited Transactions",
        "Analytics",
        "Integrations",
        "Audience Data",
        "Premium templates",
        "White Labelling",
      ],
      available: [true, true, true, true, true, true, true, true],
      buttonText: "Get Ultimate",
    },
  ];

  const handlePlanSelection = async (plan) => {
    try {
      const response = await axios.post('/api/user/storePlan', {
        username: 'John Doe', 
        email: 'john@example.com', 
        selectedPlan: {
          planName: plan.name,
          price: plan.price,
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error(error.response?.data?.error || 'Error saving the plan');
    }
  };

  return (
    <section className="py-20 relative z-10 pt-28 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container px-6">
        <div className="mx-auto max-w-2xl sm:text-center">
          <span className="font-medium text-gray-500 tracking-widest">Our Price</span>
          <h2 className="md:text-5xl text-3xl font-medium tracking-tight mt-7 text-gray-800">Price Plans</h2>
          <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-700">
            Choose the plan that suits your needs best and enjoy the creative process of brainstorming the new project of yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 2xl:px-28 mt-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border border-gray-300 rounded-xl overflow-hidden dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-lg ${plan.isPopular ? "z-20" : ""}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 flex justify-center -mt-0">
                  <span className="text-xs font-light uppercase border border-gray-700 text-white bg-black px-10 py-1 mb-1 rounded-md">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center pt-10">
                <h5 className="text-xl font-semibold text-gray-800">{plan.name}</h5>
                <h2 className="text-5xl mt-8 mb-3 items-center align-middle text-purple-600">
                  <sup className="text-2xl align-middle">$</sup>
                  {plan.price}
                </h2>
                <span className="text-gray-500">per user, per month</span>
              </div>
              <div className="p-10">
                <ul className="mb-10 text-center">
                  {plan.features.map((feature, idx) => (
                    <li key={feature} className="my-4">
                      <h5
                        className={`font-medium ${
                          plan.available[idx]
                            ? "text-gray-700 dark:text-gray-700"
                            : "text-gray-400 line-through dark:text-gray-700"
                        }`}
                      >
                        {feature}
                      </h5>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <Link
                    href={{
                      pathname: "/payment",
                      query: { price: plan.price },
                    }}
                    onClick={() => handlePlanSelection(plan)}
                    className={`py-3 px-6 font-medium border rounded-md transition-all duration-500 ${
                      plan.isPopular
                        ? "bg-purple-500 text-white border-purple-500 hover:bg-purple-700"
                        : "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
