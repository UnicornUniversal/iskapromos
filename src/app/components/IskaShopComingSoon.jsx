'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MdEmail, MdNotifications } from 'react-icons/md'
import { toast } from 'react-toastify';
import axios from 'axios';

const IskaShopComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: "/1.jpg", alt: "IskaShop Preview 1" },
    { src: "/2.jpg", alt: "IskaShop Preview 2" },
    { src: "/3.jpg", alt: "IskaShop Preview 3" }
  ]

  // Auto-slide images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/email', { email });
      toast.success('Email submitted successfully');
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      toast.error('Error submitting email');
    } finally {
      setIsSubmitting(false);
    }
  };

  const imageVariants = {
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

  return (
    <div className="   flex items-center justify-center px-4 py-8 mt-[4em] md:mt-0">
      <div className=" mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/iska logo1.png"
                alt="IskaShop Logo"
                width={180}
                height={70}
                className="mb-6"
                priority
              />
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              {/* Header */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                IskaShop is Coming Soon !!!
                
              </h1>

              {/* Description */}
              <p className="text-smtext-gray-600 leading-relaxed max-w-lg">
                Get ready for the ultimate shopping experience! IskaShop is bringing you a revolutionary 
                e-commerce platform with the best deals, fastest delivery, and exceptional customer service.
              </p>

              {/* Email Signup Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className={`bg-primary hover:bg-primary/90 disabled:bg-gray-300 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${isSubmitting ? 'animate-pulse' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <MdNotifications />
                          Get Updates
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-green-800 font-medium">
                      Successfully subscribed! We'll notify you when IskaShop launches.
                    </p>
                  </div>
                </div>
              )}

              {/* Footer */}
              <p className="text-sm text-gray-500">
                Join thousands of customers waiting for the best shopping experience
              </p>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence initial={false} custom={currentImage}>
                <motion.div
                  key={currentImage}
                  custom={currentImage}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 }
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    fill
                    className="object-cover"
                    priority={currentImage === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={currentImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IskaShopComingSoon
