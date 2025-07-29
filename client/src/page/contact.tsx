'use client';

import type React from 'react';
import { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Contact form data:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#f5cf83] via-[#fbeac9] to-[#f5cf83]text-white py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-3xl  text-[#380e0f] sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6'>
            Get In Touch
          </h1>
          <p className='text-lg  text-[#380e0f] sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed'>
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className='py-16 lg:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Contact Information */}
            <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='mt-8 text-center'>
                <div className='inline-block p-4 bg-gray-50 rounded-xl'>
                  <img
                    src='/images/contact.png'
                    alt='Contact Us'
                    className='w-full max-w-sm h-auto mx-auto transform hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <h2 className='text-2xl sm:text-3xl font-bold text-indigo-600 mb-6 lg:mb-8'>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Your full name'
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm sm:text-base placeholder-gray-400'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='Your email address'
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm sm:text-base placeholder-gray-400'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder='Tell us about your project or inquiry...'
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-vertical text-sm sm:text-base placeholder-gray-400'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-sm sm:text-base'
                >
                  {isLoading ? (
                    <div className='flex items-center justify-center'>
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
