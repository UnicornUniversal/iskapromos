'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

const ShopFaq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is ISKA shop and how does it work ?",
      answer: "ISKA Shop is Ghana’s trusted e-commerce hub — with verified sellers, secure checkout, and fast delivery to your door."
    },
    {
      question: "How do I create an account on ISKA SHOP ?",
      answer: "Just click Sign Up, enter your email, phone number, and password, then verify with the code we send. You can also sign up instantly with Google or Facebook."
    },
    {
      question: "What payment methods are accepted ?",
      answer: "You can pay with Mobile Money (MTN, Vodafone, AirtelTigo), credit/debit cards, — all secured with bank-level encryption."
    },
    {
      question: "How long does delivery take ?",
      answer: "In Accra, Kumasi, and Takoradi, delivery takes 1–3 business days. Other areas usually take 3–7 days. Same-day delivery is available in select locations, with real-time tracking via SMS and email."
    },
    // {
    //   question: "Is delivery free ?",
    //   answer: "Yes! Orders above ₵100 get free delivery. For smaller orders, delivery costs ₵5–₵15 based on your location. Need it fast? Choose express delivery for an extra fee. Disclaimer : Ideally, delivery should not be free. Delivery cost should reflect before checkout. Free delivery should only be applicable during PROMO’s on certain products only."
    // },
    {
      question: "What if I am not satisfied with my purchase ?",
      answer: "You can return most items within 7 days for a full refund or exchange, as long as they’re in original condition. Electronics and personal care items may have special rules — just contact our support team for help."
    },
    {
      question: "How do I track my order ?",
      answer: "Once confirmed, you’ll get a tracking number via SMS and email. Track it in real-time on our website or app, and get updates from our delivery partners until it’s in your hands."
    },
    {
      question: "Are the products authentic and genuine ?",
      answer: "Absolutely! All sellers on IskaShop are verified and vetted. We have strict quality control measures in place to ensure all products are authentic and meet our quality standards. If you ever receive a counterfeit product, we'll provide a full refund and take action against the seller."
    },
    {
      question: "Can I sell my products on ISKA shop ?",
      answer: "Local businesses and entrepreneurs can join our platform by registering, submitting required documents, and completing verification. We offer competitive commission rates and marketing support to help your business grow."
    },
    {
      question: "How can I contact customer support ?",
      answer: "Our support team is available 24/7 via live chat, phone (020-XXX-XXXX), email (support@iskashop.com), or our contact form, with typical responses within 2 hours or less."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about IskaShop. Can't find what you're looking for? 
            <span className="text-primary font-semibold"> Contact our support team</span>.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <MdExpandLess className="text-2xl text-primary" />
                  ) : (
                    <MdExpandMore className="text-2xl text-gray-400" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <Link href={`mailto:info@iskaglobal.com`}>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">
                Contact Support
              </button>
              </Link>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-semibold">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopFaq
