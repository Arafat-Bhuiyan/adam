import React from "react";
import { Check, Syringe } from "lucide-react";
import tube from "../../assets/images/tube.png";
import dr from "../../assets/images/health-user.png";

const HealthcareServices = () => {
  const services = [
    {
      id: 1,
      icon: <img src={tube} alt="" />,
      title: "Mobile Blood Draws & Testing",
      description:
        "Professional blood collection and specimen testing in the comfort of your home",
      price: "$75",
      priceNote: "starting at",
      features: [
        "Professional phlebotomist",
        "All collection supplies",
        "Lab processing",
      ],
    },
    {
      id: 2,
      icon: <img src={dr} alt="" />,
      title: "Home Health Assessments",
      description:
        "Comprehensive health evaluations performed by licensed healthcare professionals",
      price: "$150",
      priceNote: "starting at",
      features: [
        "Licensed nurse practitioner",
        "Vital signs monitoring",
        "Health report",
      ],
    },
    {
      id: 3,
      icon: <Syringe className="w-6 h-6" />,
      title: "Vaccinations",
      description:
        "Safe and convenient vaccination services administered at your location",
      price: "$50",
      priceNote: "starting at",
      features: [
        "Licensed healthcare provider",
        "Vaccine administration",
        "Documentation",
      ],
    },
    {
      id: 4,
      icon: <img src={tube} alt="" />,
      title: "Mobile Blood Draws & Testing",
      description:
        "Professional blood collection and specimen testing in the comfort of your home",
      price: "$75",
      priceNote: "starting at",
      features: [
        "Professional phlebotomist",
        "All collection supplies",
        "Lab processing",
      ],
    },
    {
      id: 5,
      icon: <img src={dr} alt="" />,
      title: "Home Health Assessments",
      description:
        "Comprehensive health evaluations performed by licensed healthcare professionals",
      price: "$150",
      priceNote: "starting at",
      features: [
        "Licensed nurse practitioner",
        "Vital signs monitoring",
        "Health report",
      ],
    },
    {
      id: 6,
      icon: <Syringe className="w-6 h-6" />,
      title: "Mobile Vaccinations",
      description:
        "Safe and convenient vaccination services administered at your location",
      price: "$50",
      priceNote: "starting at",
      features: [
        "Licensed healthcare provider",
        "Vaccine administration",
        "Documentation",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            Detailed Service Offerings
          </h1>
          <p className="text-[#4B5563] text-xl">
            Comprehensive healthcare services delivered directly to your
            location
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#C9A14A] rounded-full flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#C9A14A]">
                  {service.price}
                </span>
                <span className="text-gray-500 ml-2 text-sm">
                  {service.priceNote}
                </span>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="w-full bg-[#C9A14A] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareServices;
