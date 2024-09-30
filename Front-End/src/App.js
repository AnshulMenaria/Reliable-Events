import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home/Home';
import ServicesPage from './Components/Pages/View More/ServicesPage';
import Contact from './Components/Pages/View More/Contact';
import About from './Components/Pages/View More/About';
import TestimonialsPage from './Components/Pages/View More/Testimonials';
import GallerySection from './Components/Pages/View More/Gallery';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index exact element={<Home />} />

        <Route path='services' element={<ServicesPage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='testimonials' element={<TestimonialsPage />} />
        <Route path='gallery' element={<GallerySection />} />
      
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
