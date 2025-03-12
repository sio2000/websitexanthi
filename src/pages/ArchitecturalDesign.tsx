import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/d3d.png';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/d6.jpg';

const ArchitecturalDesign = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    el: {
      title: 'Αρχιτεκτονικός Σχεδιασμός',
      subtitle: 'Δημιουργούμε χώρους που εμπνέουν',
      description: 'Συνδυάζουμε την αισθητική με τη λειτουργικότητα για να δημιουργήσουμε κτίρια που ανταποκρίνονται στις ανάγκες σας και ξεπερνούν τις προσδοκίες σας.',
      services: [
        {
          title: 'Σχεδιασμός Κατοικιών',
          description: 'Μονοκατοικίες, διαμερίσματα και συγκροτήματα κατοικιών με έμφαση στην άνεση και την αισθητική'
        },
        {
          title: 'Εμπορικοί Χώροι',
          description: 'Καταστήματα, γραφεία και επαγγελματικοί χώροι που συνδυάζουν λειτουργικότητα και εταιρική ταυτότητα'
        },
        {
          title: 'Βιοκλιματικός Σχεδιασμός',
          description: 'Ενεργειακά αποδοτικά κτίρια με σεβασμό στο περιβάλλον'
        },
        {
          title: 'Ειδικές Κατασκευές',
          description: 'Εξειδικευμένες αρχιτεκτονικές λύσεις για ιδιαίτερες απαιτήσεις'
        }
      ],
      process: {
        title: 'Η Διαδικασία Σχεδιασμού',
        steps: [
          {
            title: 'Αρχική Συνάντηση',
            description: 'Κατανόηση των αναγκών και οραμάτων σας'
          },
          {
            title: 'Προσχέδιο',
            description: 'Αρχικές ιδέες και προτάσεις σχεδιασμού'
          },
          {
            title: 'Τελικός Σχεδιασμός',
            description: 'Λεπτομερή σχέδια και τεχνικές προδιαγραφές'
          },
          {
            title: 'Υλοποίηση',
            description: 'Επίβλεψη και διαχείριση κατασκευής'
          }
        ]
      },
      cta: {
        title: 'Ξεκινήστε το Έργο σας',
        description: 'Ας συζητήσουμε τις ιδέες σας και πώς μπορούμε να τις κάνουμε πραγματικότητα',
        button: 'Επικοινωνήστε μαζί μας'
      },
      samples: {
        title: 'Δείγματα Ολοκληρωμένων Έργων',
        description: 'Μερικά από τα έργα μας που έχουν ολοκληρωθεί και λειτουργούν'
      }
    },
    en: {
      title: 'Architectural Design',
      subtitle: 'Creating spaces that inspire',
      description: 'We combine aesthetics with functionality to create buildings that meet your needs and exceed your expectations.',
      services: [
        {
          title: 'Residential Design',
          description: 'Houses, apartments, and residential complexes with emphasis on comfort and aesthetics'
        },
        {
          title: 'Commercial Spaces',
          description: 'Stores, offices, and professional spaces that combine functionality with corporate identity'
        },
        {
          title: 'Bioclimatic Design',
          description: 'Energy-efficient buildings with respect for the environment'
        },
        {
          title: 'Special Constructions',
          description: 'Specialized architectural solutions for unique requirements'
        }
      ],
      process: {
        title: 'The Design Process',
        steps: [
          {
            title: 'Initial Meeting',
            description: 'Understanding your needs and visions'
          },
          {
            title: 'Preliminary Design',
            description: 'Initial ideas and design proposals'
          },
          {
            title: 'Final Design',
            description: 'Detailed plans and technical specifications'
          },
          {
            title: 'Implementation',
            description: 'Construction supervision and management'
          }
        ]
      },
      cta: {
        title: 'Start Your Project',
        description: "Let's discuss your ideas and how we can make them a reality",
        button: 'Contact Us'
      },
      samples: {
        title: 'Samples of Finished Projects',
        description: 'Some of our completed and operating projects'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Made smaller */}
      <div 
        className="relative h-[40vh] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-4xl mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {content[language].title}
          </motion.h1>
          <motion.p
            className="text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {content[language].subtitle}
          </motion.p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            {language === 'el' ? 'Πίσω' : 'Back'}
          </motion.button>

          {/* Design Process Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              {content[language].process.title}
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {content[language].process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">{step.title}</h3>
                    <p className="text-gray-700 mt-2">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-700 leading-relaxed mb-8">
              {content[language].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content[language].services.map((service, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-blue-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Samples Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {content[language].samples.title}
            </h2>
            <p className="text-gray-700 mb-8">
              {content[language].samples.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[t1, t2, t3, t4, t5, t6, t7, t8, t9].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <img
                    src={image}
                    alt={`Project sample ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-blue-50 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              {content[language].cta.title}
            </h3>
            <p className="text-gray-700 mb-6">
              {content[language].cta.description}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              {content[language].cta.button}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalDesign; 