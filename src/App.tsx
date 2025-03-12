import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ArchitecturalOffice from './pages/ArchitecturalOffice';
import RealEstateValuation from './pages/RealEstateValuation';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import EngineeringServices from './pages/EngineeringServices';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import InteriorDesign from './pages/InteriorDesign';
import WhyInterested from './pages/WhyInterested';
import Renovations from './pages/Renovations';
import ArchitecturalDesign from './pages/ArchitecturalDesign';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/architectural-office" element={<ArchitecturalOffice />} />
              <Route path="/engineering-services" element={<EngineeringServices />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/interior-design" element={<InteriorDesign />} />
              <Route path="/whyinterested" element={<WhyInterested />} />
              <Route path="/renovations" element={<Renovations />} />
              <Route path="/architectural-design" element={<ArchitecturalDesign />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;