import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LifDocPage from './Pages/LifDocPage/LifDocPage';
import Home from './Pages/HomePage/HomePage'; // <-- New Home component
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LifDocumentation" element={<LifDocPage />} />
      </Routes>
    </>
  );
};

export default App;
