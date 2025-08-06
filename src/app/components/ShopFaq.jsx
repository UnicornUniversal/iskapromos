'use client'
import React, { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

const ShopFaq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is IskaShop and how does it work?",
      answer: "IskaShop is Ghana's premier e-commerce platform designed specifically for local businesses and customers. You can browse products from verified sellers, place orders securely, and enjoy fast delivery across Ghana. Simply create an account, browse categories, add items to cart, and checkout with multiple payment options."
    },
    {
      question: "How do I create an account on IskaShop?",
      answer: "Creating an account is simple! Click the 'Sign Up' button, provide your email address, phone number, and create a password. You'll receive a verification code via SMS or email. Once verified, you can start shopping immediately. You can also sign up using your Google or Facebook account for faster registration."
    },
    {
      question: "What payment methods are accepted?",
      answer: "IskaShop accepts multiple payment methods including Mobile Money (MTN, Vodafone, AirtelTigo), bank transfers, debit/credit cards, and cash on delivery. All online payments are processed securely with bank-level encryption to protect your financial information."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary by location. In major cities like Accra, Kumasi, and Takoradi, you can expect delivery within 1-3 business days. For other locations, delivery typically takes 3-7 business days. We also offer same-day delivery for urgent orders in select areas. You'll receive real-time tracking updates via SMS and email."
    },
    {
      question: "Is delivery free?",
      answer: "Yes! We offer free delivery on all orders above ₵100. For orders below ₵100, a small delivery fee of ₵5-₵15 applies depending on your location. We also offer express delivery options for an additional fee if you need your order urgently."
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We offer a 7-day return policy for most items. If you're not completely satisfied, you can return the item in its original condition for a full refund or exchange. Some items like electronics and personal care products may have different return policies. Contact our customer support team for assistance with returns."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is confirmed, you'll receive a tracking number via SMS and email. You can track your order in real-time through our website or mobile app. Our delivery partners will also send you updates about your package status, including delivery attempts and final delivery confirmation."
    },
    {
      question: "Are the products authentic and genuine?",
      answer: "Absolutely! All sellers on IskaShop are verified and vetted. We have strict quality control measures in place to ensure all products are authentic and meet our quality standards. If you ever receive a counterfeit product, we'll provide a full refund and take action against the seller."
    },
    {
      question: "Can I sell my products on IskaShop?",
      answer: "Yes! We welcome local businesses and entrepreneurs to join our platform. To become a seller, you'll need to register as a business, provide necessary documentation, and complete our verification process. We offer competitive commission rates and provide marketing support to help you grow your business."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7. You can reach us through live chat on our website, call us at 020-XXX-XXXX, email us at support@iskashop.com, or use our contact form. We typically respond within 2 hours and are committed to resolving any issues quickly and efficiently."
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-16 px-4 bg-gray-50">
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
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">
                Contact Support
              </button>
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
