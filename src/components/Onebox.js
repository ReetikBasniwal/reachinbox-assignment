import React from 'react';
import { useTheme } from '../ThemeContext';

function Onebox() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="p-4">
      <button onClick={toggleDarkMode} className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded">
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <h1 className="text-2xl mb-4">Onebox</h1>
      {/* Add your Onebox content here */}
    </div>
  );
}

export default Onebox;