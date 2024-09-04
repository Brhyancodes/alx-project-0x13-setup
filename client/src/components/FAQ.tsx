import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "How secure is my order information?",
      answer:
        "We prioritize the security of your order information by using advanced encryption and strict data protection measures, ensuring your data remains safe and confidential.",
    },
    {
      question: "Can I customize my pharmaceutical orders?",
      answer:
        "Yes, our system allows you to customize orders according to your specific needs, whether it's the quantity, packaging, or delivery preferences.",
    },
    {
      question: "What is the delivery time for orders?",
      answer:
        "Delivery times vary depending on the location and the type of products ordered. Typically, orders are processed and shipped within 24-48 hours.",
    },
  ];

  return (
    <div className="w-full bg-white ">
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 ">
        <div className="flex flex-col text-left basis-1/2 ">
          <p className="inline-block font-semibold text-primary mb-4">
            Pharmacy Wholesale FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          {faqs.map((faq, index) => (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg  border-base-content/10"
                aria-expanded={activeIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 text-base-content">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out"
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-full" : "max-h-0"
                }`}
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
