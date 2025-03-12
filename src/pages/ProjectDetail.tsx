import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  // Βρίσκουμε το project από τα projects με βάση το ID
  const project = projects.find(p => p.id.toString() === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'el' ? 'Το έργο δεν βρέθηκε' : 'Project not found'}
          </h1>
          <button
            onClick={() => navigate('/portfolio')}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            {language === 'el' ? 'Επιστροφή στο χαρτοφυλάκιο' : 'Back to portfolio'}
          </button>
        </div>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const fullscreenSliderSettings = {
    ...sliderSettings,
    initialSlide: selectedImageIndex || 0,
    dots: false,
    arrows: true,
    nextArrow: <ChevronRight className="text-white absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" size={40} />,
    prevArrow: <ChevronLeft className="text-white absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" size={40} />
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back button */}
        <button
          onClick={() => navigate('/portfolio')}
          className="mb-8 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          {language === 'el' ? 'Επιστροφή στο χαρτοφυλάκιο' : 'Back to portfolio'}
        </button>

        {/* Project Title */}
        <motion.h1 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {project.title[language]}
        </motion.h1>

        {/* Image Slider */}
        <motion.div className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Slider {...sliderSettings}>
            {project.images.map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <img
                  src={image}
                  alt={`${project.title[language]} ${index + 1}`}
                  className="w-full h-[600px] object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Fullscreen Image Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-20"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={32} />
              </button>
              <div className="w-full h-full flex items-center justify-center px-12">
                <div className="w-full max-w-[1400px]">
                  <Slider {...fullscreenSliderSettings}>
                    {project.images.map((image, index) => (
                      <div key={index} className="flex items-center justify-center outline-none">
                        <div className="flex items-center justify-center h-screen">
                          <img
                            src={image}
                            alt={`${project.title[language]} ${index + 1}`}
                            className="max-h-[85vh] w-auto mx-auto"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose max-w-none"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                {language === 'el' ? 'Περιγραφή' : 'Description'}
              </h2>
              <p className="text-gray-700 whitespace-pre-line">
                {project.detailedDescription[language]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 