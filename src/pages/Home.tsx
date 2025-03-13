import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calculator, Building, Ruler, FileText, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import t2 from '../assets/images/t2.jpg';
import architecturalDesign from '../assets/images/architectural-design.jpg';
import img77 from '../assets/images/77.jpg';
import imgRt5 from '../assets/images/rt5.jpg';

interface FeatureItem {
  title: string;
  description: string;
}

const certifications = {
  el: {
    column1: [
      '<strong>Πιστοποιημένος Ελεγκτής Δόμησης</strong>. Για έργα της μεγαλύτερης κατηγορίας.',
      '<strong>Πιστοποιημένος Επιθεωρητής Καταλυμάτων</strong>. Για κατηγοριοποίηση ξενοδοχειακών μονάδων (αστεροποίηση) και ενοικιαζόμενων δωματίων (κλειδιά) από την <strong>TÜV Austria</strong>.',
      'Εμπειρία στις <strong>Εκτιμήσεις Ακινήτων</strong>, με συνεργασίες με διάφορες τράπεζες (Πανελλήνια, Ασπίς, Αγροτική, Πειραιώς).',
      'Εξειδίκευση σε <strong>Ενεργειακές Μελέτες και Επιθεωρήσεις</strong> βάσει <strong>ΚΕΝΑΚ</strong>.',
      'Διεκπεραίωση προγράμματος <strong>"Εξοικονομώ κατ\' Οίκον"</strong>.',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      '<strong>Πιστοποιημένη Εκτιμήτρια Ακινήτων</strong>, διεξάγοντας εκτιμήσεις σύμφωνα με τα Ευρωπαϊκά Πρότυπα.'
    ],
    column2: [
      '<strong>ΜΕΛΟΣ ΕΠΑΓΓΕΛΜΑΤΙΚΩΝ ΟΡΓΑΝΙΣΜΩΝ</strong>',
      '<strong>Πιστοποίηση ISO/IEC 17024</strong>.',
      '<strong>Μέλος του Συλλόγου Εκτιμητών Ελλάδος (Σ.ΕΚ.Ε.)</strong>.',
      '<strong>Συμμετοχή στην TEGoVA</strong>.',
      '<strong>Εντεταλμένος Χορηγός REV της TEGoVA</strong>.'
    ]
  },
  en: {
    column1: [
      '<strong>Certified Building Inspector</strong> for large-scale projects.',
      '<strong>Certified Accommodation Inspector</strong> for the classification of <strong>hotel units</strong> (star rating) and <strong>rental rooms</strong> (keys) by <strong>TÜV Austria</strong>.',
      'Expertise in <strong>Real Estate Valuations</strong>, with collaborations with various banks (Panellinia, Aspis, Agricultural Bank, Piraeus Bank).',
      'Specialization in <strong>Energy Studies and Inspections</strong> based on <strong>KENAK</strong>.',
      'Execution of programs such as <strong>"Exoikonomo kat\' Oikon"</strong>.',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      '<strong>Certified Real Estate Appraiser</strong>, conducting valuations in accordance with European Standards.'
    ],
    column2: [
      '<strong>MEMBERSHIP IN PROFESSIONAL ORGANIZATIONS</strong>',
      '<strong>ISO/IEC 17024 Certification</strong>.',
      '<strong>Member of the Hellenic Association of Valuers (Σ.ΕΚ.Ε.)</strong>.',
      '<strong>Participation in TEGoVA</strong>.',
      '<strong>Designated REV Sponsor of TEGoVA</strong>.'
    ]
  }
};

const slides = {
  el: [
    {
      title: 'Αρχιτεκτονικές λύσεις - Διακόσμηση χώρων',
      description: 'Αδειοδοτήσεις, Καταστημάτων, Καταλυμάτων, Επιχειρήσεων',
      buttonText: 'Επισκόπηση',
      buttonLink: '/interior-design',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
    },
    {
      title: 'Χτίζουμε το Μέλλον, Σχεδιάζουμε τα Όνειρά σας',
      description: 'Καινοτόμες αρχιτεκτονικές λύσεις και άριστη κατασκευαστική ποιότητα για κάθε έργο',
      buttonText: 'Ανακαλύψτε τα κατασκευαστικά μας έργα',
      buttonLink: '/blog',
      image: t2
    },
    {
      title: 'Δηλώσεις - Βεβαιώσεις αυθαίρετων',
      description: 'Αρχιτεκτονικός σχεδιασμός, Έκδοση αδειών, Επαγγελματικών χώρων, Τουριστικών καταλυμάτων, Επιχειρήσεων',
      buttonText: 'Δείτε τις αρχιτεκτονικές μας λύσεις',
      buttonLink: '/portfolio',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
    }
  ],
  en: [
    {
      title: 'Architectural Solutions - Interior Design',
      description: 'Licensing, Stores, Accommodations, Businesses',
      buttonText: 'Overview',
      buttonLink: '/interior-design',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
    },
    {
      title: 'Building the Future, Designing Your Dreams',
      description: 'Innovative architectural solutions and excellent construction quality for every project',
      buttonText: 'Discover our construction projects',
      buttonLink: '/blog',
      image: t2
    },
    {
      title: 'Arbitrary Building Declarations - Certifications',
      description: 'Architectural design, Licensing, Commercial spaces, Tourist accommodations, Business premises',
      buttonText: 'View our architectural solutions',
      buttonLink: '/portfolio',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
    }
  ]
};

const Home = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Ορισμός title και meta description για SEO
    document.title = language === 'el' 
      ? 'IN-MAVRIDIS | Αρχιτεκτονικό Γραφείο & Τεχνικές Υπηρεσίες στην Κομοτηνή'
      : 'IN-MAVRIDIS | Architectural Office & Technical Services in Komotini';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Το γραφείο IN-MAVRIDIS προσφέρει ολοκληρωμένες αρχιτεκτονικές και τεχνικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικές μελέτες, κατασκευές, ανακαινίσεις, ενεργειακές επιθεωρήσεις και εκτιμήσεις ακινήτων.'
        : 'IN-MAVRIDIS office offers comprehensive architectural and technical services in Komotini, Greece. Architectural studies, construction, renovations, energy inspections and real estate valuations.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Το γραφείο IN-MAVRIDIS προσφέρει ολοκληρωμένες αρχιτεκτονικές και τεχνικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικές μελέτες, κατασκευές, ανακαινίσεις, ενεργειακές επιθεωρήσεις και εκτιμήσεις ακινήτων.'
        : 'IN-MAVRIDIS office offers comprehensive architectural and technical services in Komotini, Greece. Architectural studies, construction, renovations, energy inspections and real estate valuations.';
      document.head.appendChild(meta);
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        return next >= slides[language].length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [language]);

  const services = [
    {
      icon: Building2,
      title: t('home.services.architectural.title'),
      description: t('home.services.architectural.description'),
      link: '/architectural-office'
    },
    {
      icon: Building,
      title: t('home.services.engineering.title'),
      description: t('home.services.engineering.description'),
      link: '/engineering-services'
    },
    {
      icon: FileText,
      title: language === 'el' ? 'Το Ιστολόγιο μας' : 'Our Blog',
      description: language === 'el' 
        ? 'Ανακαλύψτε τα τελευταία νέα, άρθρα και συμβουλές σχετικά με την αρχιτεκτονική και τις κατασκευές. Μείνετε ενημερωμένοι για τις τελευταίες τάσεις και εξελίξεις στον κλάδο.'
        : 'Discover our latest news, articles and tips about architecture and construction. Stay updated with the latest trends and developments in the industry.',
      link: '/blog',
      buttonText: language === 'el' ? 'Μάθετε περισσότερα...' : 'Learn more...'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const popUpVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1]
      }
    }
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= slides[language].length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      return next < 0 ? slides[language].length - 1 : next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] md:h-[90vh] bg-cover bg-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            {slides[language].map((slide, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-1000 ease-in-out`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
                    <motion.h1
                      className="text-3xl md:text-5xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Link
                        to={slide.buttonLink}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base md:text-lg font-semibold z-10 relative"
                      >
                        {slide.buttonText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-8 pointer-events-none">
              <button
                onClick={prevSlide}
                className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full transform transition-transform hover:scale-110 focus:outline-none pointer-events-auto"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 md:p-3 rounded-full transform transition-transform hover:scale-110 focus:outline-none pointer-events-auto"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {slides[language].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Balkans Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'el' 
              ? 'Γιατί αξίζει να ενδιαφερθείτε, ιδιαίτερα αν προέρχεστε από τα Βαλκάνια'
              : 'Why you should be interested, especially if you come from the Balkans'}
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {language === 'el' 
                ? 'Ανακαλύψτε τις μοναδικές ευκαιρίες ανάπτυξης και επενδύσεων στη Θράκη. Με στρατηγική τοποθεσία, δίπλα σε Βουλγαρία και Τουρκία, και πρόσβαση σε ανερχόμενες τουριστικές αγορές, η περιοχή μας προσφέρει αμέτρητες δυνατότητες.'
                : 'Discover unique development and investment opportunities in Thrace. With a strategic location next to Bulgaria and Turkey, and access to emerging tourist markets, our region offers countless possibilities.'}
            </p>
            <Link
              to="/whyinterested"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Μάθετε περισσότερα!' : 'Learn more!'}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Construction Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('home.constructionServices.title')}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Work Plan Design */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  {t('home.constructionServices.planning.title')}
                </h3>
                <ul className="space-y-3">
                  {(t('home.constructionServices.planning.items') as string[]).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Ruler className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Specialized Works */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  {t('home.constructionServices.specialized.title')}
                </h3>
                <ul className="space-y-3">
                  {(t('home.constructionServices.specialized.items') as string[]).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Building2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Construction and Architecture"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('home.constructionServices.construction.title')}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {t('home.constructionServices.construction.description')}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {t('home.constructionServices.construction.quality')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Text Section above Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'el' ? 'Ολοκληρωμένες Αρχιτεκτονικές & Κατασκευαστικές Υπηρεσίες' : 'Comprehensive Architectural & Construction Services'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {language === 'el' 
                ? 'Το αρχιτεκτονικό και κατασκευαστικό μας γραφείο προσφέρει ολοκληρωμένες λύσεις για κάθε έργο, από τη σύλληψη της ιδέας έως την ολοκλήρωση της κατασκευής. Απευθυνόμαστε σε ιδιώτες και επιχειρήσεις που επιθυμούν να διαχειριστούν το ιδιοκτησιακό τους καθεστώς, να χτίσουν σε αστικά ή παραθαλάσσια οικόπεδα και να υλοποιήσουν το όραμά τους με απόλυτη συνέπεια και επαγγελματισμό.'
                : 'Our architectural and construction office offers comprehensive solutions for every project, from concept to completion. We serve individuals and businesses looking to manage their property status, build in urban or seaside plots, and realize their vision with absolute consistency and professionalism.'
              }
            </p>

            {/* Το κουμπί */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/blog"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg 
                         text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 
                         hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>
                  {language === 'el' 
                    ? 'Επισκόπηση της δουλειάς μας'
                    : 'Overview of our work'
                  }
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceCardVariants}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <motion.div variants={cardContentVariants}>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="inline-block text-blue-600 hover:text-blue-700 font-medium group relative"
                    >
                      <span className="flex items-center">
                        {service.buttonText || (language === 'el' ? 'Μάθετε περισσότερα...' : 'Learn more...')}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('home.whyChooseUs.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {(t('home.whyChooseUs.features') as FeatureItem[]).map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            {t('home.certifications.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column */}
            <motion.div
              className="bg-gray-50 p-4 md:p-8 rounded-lg overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-3 min-w-[300px]">
                {certifications[language].column1.map((cert, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base">
                    <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                    <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: cert }}></span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="bg-gray-50 p-4 md:p-8 rounded-lg overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-3 min-w-[300px]">
                {certifications[language].column2.map((cert, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base">
                    <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                    <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: cert }}></span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;