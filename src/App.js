import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Login from './components/Login';
import Onebox from './components/Onebox';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/onebox" element={<Onebox />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;