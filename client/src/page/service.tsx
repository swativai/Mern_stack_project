import type React from 'react';

export const Service: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      image: '/images/web-development.png',
      description:
        'Modern, responsive websites and web applications built with the latest technologies',
      features: [
        'React & Next.js Development',
        'Node.js Backend Services',
        'Database Design & Integration',
        'API Development',
      ],
    },
    {
      title: 'Custom Software Development',
      image: '/images/programming.png',
      description:
        'Tailored software solutions to streamline your business processes',
      features: [
        'Desktop Applications',
        'Mobile App Development',
        'Enterprise Software',
        'System Integration',
      ],
    },
    {
      title: 'Technical Consulting',
      image: '/images/developer-activity.png',
      description:
        'Expert guidance to help you make informed technical decisions',
      features: [
        'Technology Assessment',
        'Architecture Planning',
        'Performance Optimization',
        'Security Audits',
      ],
    },
    {
      title: 'Maintenance & Support',
      image: '/images/dev-environment.png',
      description: 'Ongoing support to keep your systems running smoothly',
      features: [
        '24/7 Technical Support',
        'Regular Updates',
        'Bug Fixes',
        'Performance Monitoring',
      ],
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#f5cf83] via-[#fbeac9] to-[#f5cf83] text-white py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-3xl text-[#380e0f] sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6'>
            Our Services
          </h1>
          <p className='text-lg text-[#380e0f] sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed'>
            Comprehensive technical solutions tailored to your unique business
            needs and goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-16 lg:py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group'
              >
                <div className='mb-6 overflow-hidden rounded-xl'>
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className='w-full h-36 sm:h-40 object-contain mx-auto group-hover:scale-110 transition-transform duration-300'
                  />
                </div>

                <h3 className='text-xl sm:text-2xl font-bold text-indigo-600 mb-4 group-hover:text-indigo-700 transition-colors duration-300'>
                  {service.title}
                </h3>

                <p className='text-gray-600 mb-6 leading-relaxed text-sm sm:text-base'>
                  {service.description}
                </p>

                <ul className='space-y-3'>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-700 text-sm sm:text-base'
                    >
                      <span className='text-indigo-600 font-bold mr-3 text-lg'>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
