import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Award, Ruler, FileText, Building, 
  Lightbulb, Zap, ClipboardCheck, Users, BadgeCheck, Home, Palette, Video 
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import backofficeImage from '../assets/images/backoffice.png';
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import bb3Image from '../assets/images/bb3.jpg';

interface CeoItem {
  category: string;
  details: string[];
}

const EngineeringServices = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('engineeringServices.title');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Ολοκληρωμένες υπηρεσίες μηχανικού στην Κομοτηνή. Στατικές μελέτες, ενεργειακός σχεδιασμός, επιβλέψεις έργων.'
        : 'Comprehensive engineering services in Komotini. Structural studies, energy design, construction supervision.');
    }
  }, [language, t]);

  const renderBoldText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${backofficeImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('engineeringServices.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('engineeringServices.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* About ARCHInima Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6">ARCHInima</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  {language === 'el' 
                    ? 'Με σπουδές στη Σχολή Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (2000-2007) και μια φρέσκια, δημιουργική ματιά στην ελληνική αρχιτεκτονική και οικοδομική πραγματικότητα, ξεκίνησα το ταξίδι μου στον κόσμο του σχεδιασμού.'
                    : 'With studies at the Aristotle University of Thessaloniki (2000-2007) and a fresh, creative perspective on Greek architectural and construction reality, I began my journey in the world of design.'}
                </p>
                
                <p className="mb-6">
                  {language === 'el'
                    ? 'Μαζί με τον αδελφό μου, Ιωάννη Μαυρίδη, πολιτικό μηχανικό (MSc Structural Engineering, Univ. of Surrey, UK), και τις πολύτιμες συμβουλές του πατέρα μας, Ανέστη Μαυρίδη, μηχανικού με 30 χρόνια εμπειρίας στον κατασκευαστικό τομέα, αναλαμβάνουμε το έργο σας από την αρχή έως την ολοκλήρωσή του.'
                    : 'Together with my brother, Ioannis Mavridis, civil engineer (MSc Structural Engineering, Univ. of Surrey, UK), and the valuable advice of our father, Anestis Mavridis, an engineer with 30 years of experience in the construction sector, we undertake your project from start to finish.'}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {language === 'el' ? 'Αναλαμβάνουμε:' : 'We undertake:'}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el' 
                          ? renderBoldText('**Αρχιτεκτονικό σχεδιασμό**')
                          : renderBoldText('**Architectural design**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Μελέτη & προϋπολογισμό**')
                          : renderBoldText('**Study & budget**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Κατασκευή & διαχείριση έργου**')
                          : renderBoldText('**Construction & project management**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Εσωτερική διακόσμηση**')
                          : renderBoldText('**Interior decoration**')}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>
                        {language === 'el'
                          ? renderBoldText('**Ολοκληρωμένη καθοδήγηση προς την υλοποίηση κάθε οράματος**')
                          : renderBoldText('**Complete guidance towards realizing every vision**')}
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  {language === 'el'
                    ? 'Το ομαδικό πνεύμα, η θέληση και η φιλική διάθεση που μας χαρακτηρίζουν δημιουργούν έναν δεσμό εμπιστοσύνης με τους ανθρώπους που μας επιλέγουν. Για εμάς, η πραγματική επιτυχία δεν βρίσκεται μόνο στην ολοκλήρωση ενός έργου, αλλά στη δημιουργία σχέσεων που αντέχουν στον χρόνο.'
                    : 'The team spirit, willingness, and friendly attitude that characterize us create a bond of trust with the people who choose us. For us, real success lies not only in completing a project but in creating relationships that stand the test of time.'}
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[300px]">
              <img 
                src={photo1} 
                alt="ARCHInima Office" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* CEO Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-full min-h-[300px]">
              <img 
                src={photo2} 
                alt="Γιάννης Μαυρίδης" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {t('engineeringServices.ceo.title')}
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-4 list-none pl-0">
                  {(t('engineeringServices.ceo.items') as string[]).map((item: string, index: number) => (
                    <li 
                      key={index} 
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="flex-1">
                        {renderBoldText(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Us Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url(${bb3Image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <div className="relative max-w-7xl mx-auto px-4 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {t('engineeringServices.aboutUs.title')}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {t('engineeringServices.aboutUs.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/about-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-blue-600 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('engineeringServices.experienceTitle')}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t('engineeringServices.experienceItems').map((item: string, index: number) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start p-6 space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Award className="h-6 w-6 text-green-600" />}
                      {index === 1 && <Lightbulb className="h-6 w-6 text-green-600" />}
                      {index === 2 && <BadgeCheck className="h-6 w-6 text-green-600" />}
                      {index === 3 && <Building className="h-6 w-6 text-green-600" />}
                      {index === 4 && <FileText className="h-6 w-6 text-green-600" />}
                      {index === 5 && <ClipboardCheck className="h-6 w-6 text-green-600" />}
                      {index === 6 && <Users className="h-6 w-6 text-green-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {renderBoldText(item)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center text-blue-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('engineeringServices.servicesTitle')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('engineeringServices.servicesItems').map((service: string, index: number) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {/* ... εικονίδιο ... */}
                  </div>
                  <p className="text-gray-700">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringServices; 