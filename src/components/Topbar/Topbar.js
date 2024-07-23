import React from 'react';
import './topbar.css'
import { FiChevronDown } from 'react-icons/fi'; // You'll need to install react-icons

const TopBar = () => {
  return (
    <div className="flex topbar-container justify-between items-center text-white px-4 py-2">
      <div className="text-lg font-semibold">Onebox</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
          <span>Tim's Workspace</span>
          <FiChevronDown className="ml-1" />
        </div>
        <div className="w-10 h-6 bg-gray-700 rounded-full flex items-center">
          <div className="w-4 h-4 bg-gray-400 rounded-full ml-1"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;