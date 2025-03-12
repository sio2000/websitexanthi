import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ArchitecturalOffice from '../pages/ArchitecturalOffice';
import EngineeringServices from '../pages/EngineeringServices';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/architectural-office" element={<ArchitecturalOffice />} />
      <Route path="/engineering-services" element={<EngineeringServices />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes; 