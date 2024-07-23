import React from 'react';
import './login.css'
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../../redux/reducers/authSlice';

function Login() {

  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <>
    <div className="flex w-full items-center justify-center min-h-screen bg-black">
      <div className="login-popup p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Create a new account</h2>
        
        <button className="sign-up-with-google w-full text-white py-2 px-4 rounded-md mb-4 flex items-center justify-center">
          <FcGoogle className="mr-2" />
          <span className='login-google-text'>Sign Up with Google</span>
        </button>
        
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mb-4">
          Create an Account
        </button>
        
        <p className="text-gray-400 text-center">
          Already have an account? <span className="text-blue-400 hover:underline cursor-pointer" onClick={handleGoogleLogin}>Sign In</span>
        </p>
      </div>

    </div>
    </>
  );
}

export default Login;