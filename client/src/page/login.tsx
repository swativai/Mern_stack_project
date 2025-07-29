import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      console.log('Login data:', formData);
      setIsLoading(false);
      // Handle login logic here
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 flex items-center justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[600px]'>
          {/* Image Section */}
          <div className='bg-gray-50 flex items-center justify-center p-6 lg:p-12 order-2 lg:order-1'>
            <div className='text-center'>
              <img
                src='/images/login.png'
                alt='Login'
                className='w-full max-w-sm h-auto mx-auto mb-6 transform hover:scale-105 transition-transform duration-300'
              />
              <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2'>
                Welcome Back!
              </h3>
              <p className='text-gray-600 text-sm sm:text-base'>
                Access your SwatiTechnical dashboard
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className='p-6 lg:p-12 flex items-center order-1 lg:order-2'>
            <div className='w-full max-w-md mx-auto'>
              <div className='text-center mb-8'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
                  Sign In
                </h2>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Enter your credentials to continue
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
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

                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-sm sm:text-base'
                >
                  {isLoading ? (
                    <div className='flex items-center justify-center'>
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                      Signing In...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              <div className='text-center mt-6'>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Don't have an account?{' '}
                  <Link
                    to='/registration'
                    className='text-indigo-600 hover:text-indigo-500 font-medium hover:underline transition-colors duration-300'
                  >
                    Sign up here
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
