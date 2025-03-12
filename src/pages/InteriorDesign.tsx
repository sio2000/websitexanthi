import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

const InteriorDesign = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Φιλτράρισμα των projects για την κατηγορία interior
  const interiorProjects = projects.filter(project => {
    if (Array.isArray(project.category)) {
      return project.category.includes('interior');
    }
    return project.category === 'interior';
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Κουμπί επιστροφής */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          {language === 'el' ? 'Πίσω' : 'Back'}
        </button>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {language === 'el' ? 'Εσωτερική Διακόσμηση' : 'Interior Design'}
        </h1>

        {/* Grid προβολή των projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interiorProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link to={`/portfolio/${project.id}`}>
                <div className="relative aspect-video">
                  <img
                    src={project.images[0]}
                    alt={project.title[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title[language]}</h2>
                  <p className="text-gray-600 line-clamp-2">{project.description[language]}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Μήνυμα αν δεν υπάρχουν projects */}
        {interiorProjects.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            {language === 'el' 
              ? 'Δεν υπάρχουν διαθέσιμα έργα σε αυτή την κατηγορία.'
              : 'No projects available in this category.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteriorDesign; 