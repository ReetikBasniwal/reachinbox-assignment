import React from 'react'
import './senderdetail.css';
import { useSelector } from 'react-redux';

const SenderDetail = () => {

  const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);

  return (
    <div className={`flex-none senderdetail-container ${isDarkMode ? 'border-dark' : 'border-light'} dark:bg-black`}>
        <div className={`text-black dark:text-white info-header ${isDarkMode ? 'info-header-dark':'info-header-light'} font-normal`}>Lead Details</div>

        <div className={`text-black dark:text-white info-header ${isDarkMode ? 'info-header-dark':'info-header-light'} font-normal`}>Activities</div>
    </div>
  )
}

export default SenderDetail