import React from 'react';
import './topbar.css'
import { FiChevronDown } from 'react-icons/fi';
import ToggleMode from './ToggleMode';
import { useSelector } from 'react-redux';

const TopBar = () => {

  const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={`flex topbar-container ${isDarkMode ? 'darkprop' : ''} justify-between items-center text-black px-4 py-2`}>
      <div className="text-lg font-semibold">Onebox</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
          <span>{user?.firstName}'s Workspace</span>
          <FiChevronDown className="ml-1" />
        </div>

        <ToggleMode />
      </div>
    </div>
  );
};

export default TopBar;