import type React from 'react';

export const About: React.FC = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#f5cf83] via-[#fbeac9] to-[#f5cf83]text-white py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <div className='text-center lg:text-left order-2 lg:order-1'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6 leading-tight'>
                About SwatiTechnical
              </h1>
              <p className='text-lg sm:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto lg:mx-0'>
                We are a leading technical solutions company dedicated to
                providing innovative software development and consulting
                services. Our team of experienced professionals is committed to
                delivering high-quality solutions that drive business growth and
                digital transformation.
              </p>
            </div>
            <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
              <div className='relative'>
                <img
                  src='/images/engineering-team.png'
                  alt='Our Team'
                  className='w-full max-w-lg h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 opacity-10'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-16 lg:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 lg:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Our Mission
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Empowering businesses through innovative technology solutions and
              exceptional service
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group'>
              <div className='mb-6 lg:mb-8 overflow-hidden rounded-xl'>
                <img
                  src='/images/developer-activity.png'
                  alt='Innovation'
                  className='w-full max-w-sm h-48 sm:h-56 object-contain mx-auto group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 text-center group-hover:text-indigo-700 transition-colors duration-300'>
                Innovation
              </h3>
              <p className='text-gray-600 text-center leading-relaxed text-base sm:text-lg'>
                We stay at the forefront of technology to deliver cutting-edge
                solutions that transform businesses and create lasting value for
                our clients.
              </p>
            </div>

            <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group'>
              <div className='mb-6 lg:mb-8 overflow-hidden rounded-xl'>
                <img
                  src='/images/development.png'
                  alt='Collaboration'
                  className='w-full max-w-sm h-48 sm:h-56 object-contain mx-auto group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 text-center group-hover:text-indigo-700 transition-colors duration-300'>
                Collaboration
              </h3>
              <p className='text-gray-600 text-center leading-relaxed text-base sm:text-lg'>
                We work closely with our clients to understand and exceed their
                expectations through genuine partnership and transparent
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
