import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleAuthCallback } from '../../redux/reducers/authSlice';

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      // Store the token in Redux
      dispatch(handleAuthCallback(token)).unwrap()
        .then(() => {
          navigate('/onebox');
          console.log(token, "full filling")
        })
        .catch((error) => {
          console.error('Login failed:', error);
          navigate('/login'); // Redirect back to login on error
        });

    } else {
      // Handle error - no token received
      navigate('/login');
    }
  }, [dispatch, navigate, location]);

  return <div>Logging you in...</div>;
};

export default AuthCallback;