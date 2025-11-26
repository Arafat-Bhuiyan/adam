import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Log In
          </h1>
          <p className="text-center text-gray-600 text-sm mb-8">
            Enter your credentials to access the admin portal
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Official Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="you@company.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Create Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
