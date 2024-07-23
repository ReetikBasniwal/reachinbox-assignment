import React from 'react';
import { useSelector } from 'react-redux';

function Onebox() {
  const isDarkMode = useSelector(state => state.oneboxReducer.isDarkMode);
  const { user } = useSelector((state) => state.auth);

  console.log(user, "userr")

  return (
    <div className="p-4">
      <button className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded">
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <h1 className="text-2xl mb-4">Onebox</h1>
      {/* Add your Onebox content here */}
    </div>
  );
}

export default Onebox;