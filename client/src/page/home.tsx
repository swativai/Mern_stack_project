import type React from 'react';

export const Home: React.FC = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section
        className='bg-gradient-to-br from-[#f5cf83] via-[#fbeac9] to-[#f5cf83]
 text-black py-16 lg:py-20 min-h-screen flex items-center'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <div className='text-center lg:text-left order-2 lg:order-1'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight'>
                Welcome to VaidyaTechnical
              </h1>
              <p className='text-lg sm:text-xl md:text-2xl mb-6 lg:mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                Your trusted partner for innovative technical solutions and
                development services
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300'>
                  Get Started
                </button>
                <button className='border-2 border-white text-black hover:bg-white hover:text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
              <div className='relative'>
                <img
                  src='/images/developer-activity.png'
                  alt='Developer'
                  className='w-full max-w-sm lg:max-w-md h-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-20 animate-pulse'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 lg:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 lg:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Our Expertise
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              We deliver cutting-edge solutions tailored to your business needs
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group'>
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='/images/web-development.png'
                  alt='Web Development'
                  className='w-full h-36 sm:h-40 object-contain mx-auto group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300'>
                Web Development
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Modern, responsive websites built with cutting-edge technologies
              </p>
            </div>

            <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group'>
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='/images/programming.png'
                  alt='Programming'
                  className='w-full h-36 sm:h-40 object-contain mx-auto group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300'>
                Custom Software
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Tailored software solutions to meet your specific business needs
              </p>
            </div>

            <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group md:col-span-2 lg:col-span-1'>
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src='/images/dev-environment.png'
                  alt='Development Environment'
                  className='w-full h-36 sm:h-40 object-contain mx-auto group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300'>
                Technical Consulting
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Expert guidance to help you make the right technical decisions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
