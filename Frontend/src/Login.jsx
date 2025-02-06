import React from 'react';

const Login = () => {
  return (
    <>
      <div className="min-h-screen  flex justify-center items-center relative">
        <img
          src="/public/bg.webp"
          alt="About Fungroww"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl w-96 z-10">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Login</h2>
          <form>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-50 transition-all duration-300 ease-in-out transform hover:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-amber-50 transition-all duration-300 ease-in-out transform hover:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Login
            </button>
          </form>

          
        </div>
      </div>
    </>
  );
};

export default Login;
