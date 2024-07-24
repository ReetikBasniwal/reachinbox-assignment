import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { oneboxAction } from '../../redux/reducers/oneboxSlice';

const ToggleMode = () => {

  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);
  const toggleSwitch = () => {
    dispatch(oneboxAction.setDarkMode(!isDarkMode));
  };

  return (
    <div
      className={`w-12 h-6 rounded-full flex items-center cursor-pointer dark:bg-white bg-green-500`}
      onClick={toggleSwitch}
    >
        <div
            className={`w-4 h-4 dark:bg-black bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                isDarkMode ? 'translate-x-7' : 'translate-x-1'
            }`}
        ></div>
    </div>
  );
};

export default ToggleMode;
