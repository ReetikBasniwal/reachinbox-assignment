import React from 'react';
import { useTheme } from '../ThemeContext';
import { FcGoogle } from 'react-icons/fc';

function Login() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Create a new account</h2>
        
        <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md mb-4 flex items-center justify-center">
          <FcGoogle className="mr-2" />
          Sign Up with Google
        </button>
        
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mb-4">
          Create an Account
        </button>
        
        <p className="text-gray-400 text-center">
          Already have an account? <a href="#" className="text-blue-400 hover:underline">Sign In</a>
        </p>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-md text-sm">
        Anonymous
      </div>
    </div>
  );
}

export default Login;