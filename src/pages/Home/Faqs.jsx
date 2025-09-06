import { useState } from "react";
import { Plus, X } from "lucide-react";
import faqImg from "../../assets/images/faq-img.png";

const faqs = [
  {
    question:
      "How do you ensure the professionals on your platform are qualified?",
    answer:
      "We have a strict vetting process. This includes verifying licenses with state boards, conducting thorough background checks, and confirming all required certifications (like CPR) are current and valid.",
  },
  {
    question: "What happens if a professional's license expires?",
    answer:
      "They must renew their license before continuing to provide services.",
  },
  {
    question: "How and when are the professionals paid?",
    answer: "Payments are processed weekly via secure payment channels.",
  },
  {
    question: "Are there any fees for the professionals?",
    answer:
      "No, professionals do not pay any fees to join or work on the platform.",
  },
  {
    question: "Are the professionals covered by insurance while on a shift?",
    answer:
      "Yes, we provide liability insurance for professionals during their shifts.",
  },
  {
    question: "Who is responsible for workers’ compensation insurance?",
    answer: "Workers’ compensation insurance is provided by our platform.",
  },
];

export default function Faqs() {
  const [active, setActive] = useState(null);

  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-center text-4xl font-bold mb-12">
        Frequently Asked Question
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Illustration */}
        <div className="flex justify-center">
          <img src={faqImg} alt="FAQ illustration" className="w-72 md:w-96" />
        </div>

        {/* Right Accordion */}
        <div>
          <div className="border border-[#D7DEF0]"></div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                className="flex justify-between items-center w-full text-left font-bold text-lg text-[#2c2c2c]"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {active === index ? (
                  <X className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {active === index && (
                <p className="mt-2 text-[#2c2c2c]/85 text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FAF8F2] px-16 py-10 max-w-3xl mx-auto flex flex-col justify-center items-center gap-6 mt-24 mb-8">
        <p className="font-semibold text-4xl text-[#2c2c2c]">
          Unlock Your Productivity Potential
        </p>
        <p className="text-center">
          Are you a healthcare provider looking to ensure at-home lab services
          for your patients? Or a certified phlebotomist/nurse interested in
          finding work on your own schedule? Click below to access your account
          or download the VeniX Lab app
        </p>
        <button className="px-7 py-6 text-sm font-medium rounded-lg text-white hover:opacity-90 bg-gradient-to-r from-[#887113] from-[5%] to-[#C9A14A] to-[100%]">
          Download The App
        </button>
      </div>
    </section>
  );
}
