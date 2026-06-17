import React from "react";

const ContactFAQ = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* FAQ Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#003366] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="How quickly can you deploy a team?"
              answer="We offer rapid response and can deploy to major sites within 1-2 hours."
            />
            <FAQItem
              question="Do you provide K-9 security services?"
              answer="Yes, we have highly trained K-9 units for specialized protection."
            />
            <FAQItem
              question="Are your guards fully licensed?"
              answer="Absolutely, all our personnel are licensed, vetted, and undergo rigorous training."
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#C5A059]">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">
            Request a Security Proposal
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] outline-none"
            />
            <input
              type="text"
              placeholder="Company/Project Name"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] outline-none"
            />
            <textarea
              placeholder="Describe your security needs"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#003366] outline-none"
            ></textarea>
            <button className="w-full bg-[#C5A059] text-white font-bold py-3 rounded hover:bg-[#A8864A] transition duration-300">
              SUBMIT PROPOSAL REQUEST
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => (
  <div className="bg-white p-5 rounded border-l-4 border-[#003366] shadow-sm">
    <h3 className="font-semibold text-[#003366] mb-1">{question}</h3>
    <p className="text-gray-600 text-sm">{answer}</p>
  </div>
);

export default ContactFAQ;
