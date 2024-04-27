import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/Home-page';
import NeedsHelps from './pages/needs-help/NeedsHelps';

function App() {
  const [count, setCount] = useState(0); // State for demonstration purposes

  return (
    <div>
      <Routes>
       
        <Route path="/" element={<DefaultLayout />}  >
      <Route index element={<HomePage />} /> 
      <Route path="needs" element={<NeedsHelps />}/>    </Route>
      </Routes>
    </div>
  );
}

export default App;
