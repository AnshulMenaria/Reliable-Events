import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home/Home';
import ServicesPage from './Components/Pages/View More/ServicesPage';
import Contact from './Components/Pages/View More/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />


        <Route path='services' element={<ServicesPage />} />
        <Route path='contact' element={<Contact />} />
          
    

      
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
