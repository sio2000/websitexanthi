import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Slider from 'react-slick';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { projects, type Category } from '../data/projects';

interface Project {
  id: number;
  title: {
    el: string;
    en: string;
  };
  category: Category;
  images: string[];
  description: {
    el: string;
    en: string;
  };
  detailedDescription: {
    el: string;
    en: string;
  };
  date: string;
}

const Portfolio = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: { el: 'Όλα', en: 'All' } },
    { id: 'construction', label: { el: 'Κατασκευές', en: 'Construction' } },
    { id: 'interior', label: { el: 'Εσωτερική Διακόσμηση', en: 'Interior Decoration' } },
    { id: 'residential', label: { el: 'Κτίρια Κατοικιών', en: 'Residential Buildings' } },
    { id: 'suburban', label: { el: 'Προάστια', en: 'Suburban' } }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || 
      (Array.isArray(project.category) 
        ? project.category.includes(selectedCategory)
        : project.category === selectedCategory);
        
    const matchesSearch = project.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRight className="text-white" />,
    prevArrow: <ChevronLeft className="text-white" />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {language === 'el' ? 'Το Χαρτοφυλάκιό μας' : 'Our Portfolio'}
        </motion.h1>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'el' ? 'Αναζήτηση έργων...' : 'Search projects...'}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as Category)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.label[language]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.images[0]}
                  alt={project.title[language]}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
                <p className="text-gray-600">{project.description[language]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
                  >
                    <X size={24} />
                  </button>
                  <Slider {...sliderSettings}>
                    {selectedProject.images.map((image, index) => (
                      <div key={index} className="aspect-w-16 aspect-h-9">
                        <img
                          src={image}
                          alt={`${selectedProject.title[language]} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{selectedProject.title[language]}</h2>
                    <p className="text-gray-600 mb-4">{selectedProject.detailedDescription[language]}</p>
                    <p className="text-sm text-gray-500">{selectedProject.date}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio; 