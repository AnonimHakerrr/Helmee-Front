import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0); // State for demonstration purposes

  return (
    <div>
      <Routes>
        {/* Ensure DefaultLayout is rendered as the initial route */}
        <Route path="/" element={<DefaultLayout />} />
        {/* Add other routes here if needed */}
      </Routes>
    </div>
  );
}

export default App;
