'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';

const IskaHomesComingSoon = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };






  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/home', { email });
      toast.success('Email submitted successfully');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      toast.error('Error submitting email');
    } finally {
      setLoading(false);
    }
  };

  // console.log(process.env.NEXT_PUBLIC_SHEET_URL);

  return (
    <div
      className="flex flex-col items-center justify-center px-[2em] min-h-screen min-h-[400px]"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/homes.jpg')",
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className='rounded-lg p-4 py-[4em] flex flex-col items-center justify-center backdrop-blur-md bg-gradient-to-b from-white to-transparent bg-opacity-30'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-[3em] font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          IskaHomes Coming Soon
        </motion.h1>
        <motion.p
          className="text-lg mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Stay tuned for updates! Enter your email to be notified <br/> when we launch.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center bg-white px-2 rounded-full py-2">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-sm md:text-md"
              required
              disabled={loading}
            />
            <button
              type="submit"
              className={`flex-shrink-0 bg-primary h-full hover:bg-primary-dark border-primary hover:border-primary-dark text-sm md:text-md p-2 border-4 text-white rounded-full ${loading ? 'animate-pulse' : ''}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Get Updates'}
            </button>
          </div>
      
        </motion.form>
      </motion.div>

  
    </div>
  );
};

export default IskaHomesComingSoon;
