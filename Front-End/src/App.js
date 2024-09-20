import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
          


      
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
