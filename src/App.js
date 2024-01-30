import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
// Import your Add page component
import Add from './Add'; // Assuming your Add page component is in AddPage.js
import './App.css';
import Data from './Data';
import Update from './Update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add/>} />
	  <Route path="/data" element={<Data/>} />
	<Route path="/update" element={<Update/>} />
	
      </Routes>
    </BrowserRouter>
  );
}
export default App;