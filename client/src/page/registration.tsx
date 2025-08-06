import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    isAdmin: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Registration data:', formData);
      setIsLoading(false);
      // Handle registration logic here
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#f5cf83] via-[#fbeac9] to-[#f5cf83] flex items-center justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[700px]'>
          {/* Image Section */}
          <div className='bg-gray-50 flex items-center justify-center p-6 lg:p-12 order-2 lg:order-1'>
            <div className='text-center'>
              <img
                src='/images/sign-up.png'
                alt='Sign Up'
                className='w-full max-w-sm h-auto mx-auto mb-6 transform hover:scale-105 transition-transform duration-300'
              />
              <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>
                Join Our Team!
              </h3>
              <p className='text-gray-600 text-sm sm:text-base'>
                Create your VaidyaTechnical account today
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className='p-6 lg:p-12 flex items-center order-1 lg:order-2'>
            <div className='w-full max-w-md mx-auto'>
              <div className='text-center mb-8'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
                  Create Account
                </h2>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Fill in your details to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Username
                  </label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder='Enter your username'
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
                    placeholder='Enter your email'
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm sm:text-base placeholder-gray-400'
                  />
                </div>

                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder='Enter your password'
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm sm:text-base placeholder-gray-400'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder='Enter your phone number'
                    className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 text-sm sm:text-base placeholder-gray-400'
                  />
                </div>

                <div className='flex items-center space-x-3 py-2'>
                  <input
                    type='checkbox'
                    id='isAdmin'
                    name='isAdmin'
                    checked={formData.isAdmin}
                    onChange={handleChange}
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors duration-300'
                  />
                  <label
                    htmlFor='isAdmin'
                    className='text-sm text-gray-700 font-medium'
                  >
                    Register as Admin
                  </label>
                </div>

                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-sm sm:text-base'
                >
                  {isLoading ? (
                    <div className='flex items-center justify-center'>
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>

              <div className='text-center mt-6'>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Already have an account?{' '}
                  <Link
                    to='/login'
                    className='text-indigo-600 hover:text-indigo-500 font-medium hover:underline transition-colors duration-300'
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
