'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MdSecurity, 
  MdSpeed, 
  MdSavings, 
  MdSupport, 
  MdLocalShipping, 
  MdVerified,
  MdTrendingUp,
  MdPeople
} from 'react-icons/md'

const WhyIska = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const containerRef = useRef(null)

  const reasons = [
    {
      icon: <MdSecurity className="text-3xl" />,
      title: "Secure & Trusted",
      description: "Bank-level security with encrypted transactions and verified sellers for your peace of mind.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <MdSpeed className="text-3xl" />,
      title: "Lightning Fast",
      description: "Instant checkout, real-time tracking, and same-day delivery options for urgent needs.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <MdSavings className="text-3xl" />,
      title: "Best Prices",
      description: "Competitive pricing with exclusive deals, discounts, and price match guarantees.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <MdSupport className="text-3xl" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service with live chat, phone, and email support.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <MdLocalShipping className="text-3xl" />,  // Free Delivery
      title: "Fast Delivery",
      description: "Reliable delivery options with real-time tracking for your convenience.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <MdVerified className="text-3xl" />,
      title: "Quality Assured",
      description: "All products are verified for authenticity with money-back guarantee.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: <MdTrendingUp className="text-3xl" />,
      title: "Growing Community",
      description: "Join thousands of satisfied customers building the future of e-commerce in Ghana.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <MdPeople className="text-3xl" />,
      title: "Local Focus",
      description: "Built for Ghanaians, supporting local businesses and creating job opportunities.",
      color: "bg-pink-50 text-pink-600"
    }
  ]

  // Auto-calculate slides per view based on container width
  const calculateSlidesPerView = () => {
    if (!containerRef.current) return 3

    const containerWidth = containerRef.current.offsetWidth
    const cardWidth = 300 // Minimum card width
    const gap = 32 // Gap between cards (2rem)
    
    // Calculate how many cards can fit
    const availableWidth = containerWidth - gap // Account for padding
    const cardsThatFit = Math.floor(availableWidth / (cardWidth + gap))
    
    // Ensure at least 1 and at most 4 cards
    return Math.max(1, Math.min(4, cardsThatFit))
  }

  useEffect(() => {
    const updateSlidesPerView = () => {
      const newSlidesPerView = calculateSlidesPerView()
      setSlidesPerView(newSlidesPerView)
    }

    updateSlidesPerView()
    
    // Debounced resize listener
    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateSlidesPerView, 100)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Calculate total slides
  const totalSlides = Math.ceil(reasons.length / slidesPerView)

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalSlides])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setCurrentSlide((prev) => (prev + newDirection + totalSlides) % totalSlides)
  }

  // Get current slide items
  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * slidesPerView
    return reasons.slice(startIndex, startIndex + slidesPerView)
  }

  return (
    <div className="py-16 px-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary">Iska</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of online shopping with a platform designed specifically for Ghana's unique needs and preferences.
          </p>
        </div>

        {/* Slider Container */}
        <div ref={containerRef} className="relative  rounded-lg h-[300px] md:h-[400px] mb-12 overflow-hidden">
          <AnimatePresence initial={false} custom={currentSlide}>
            <motion.div
              key={currentSlide}
              custom={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="w-full mx-auto px-4">
                <div className="grid gap-6 md:gap-8" style={{ 
                  gridTemplateColumns: `repeat(${slidesPerView}, minmax(0, 1fr))` 
                }}>
                  {getCurrentSlideItems().map((reason, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-full ${reason.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {reason.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              key={currentSlide}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of customers who have already discovered why Iska is the preferred choice for online shopping in Ghana.
            </p>
            <button className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-lg">
              Get Started Today
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default WhyIska
