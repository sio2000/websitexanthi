import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Award, 
  Ruler, 
  FileText, 
  Zap, 
  Home, 
  Paintbrush,
  Video, 
  Building, 
  Lightbulb, 
  BadgeCheck,
  Users, 
  ClipboardCheck 
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import backofficeImage from '../assets/images/backoffice.png';
import floorImage from '../assets/images/floor.jpg';
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import { Link } from 'react-router-dom';

const EngineeringServices = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = t('engineeringServices.title');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Ολοκληρωμένες υπηρεσίες μηχανικού στην Κομοτηνή. Στατικές μελέτες, ενεργειακός σχεδιασμός, επιβλέψεις έργων, εκτιμήσεις ακινήτων και τεχνικές πραγματογνωμοσύνες. Πιστοποιημένος Ελεγκτής Δόμησης.'
        : 'Comprehensive engineering services in Komotini, Greece. Structural studies, energy design, construction supervision, real estate valuations and technical expertise. Certified Building Inspector.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Ολοκληρωμένες υπηρεσίες μηχανικού στην Κομοτηνή. Στατικές μελέτες, ενεργειακός σχεδιασμός, επιβλέψεις έργων, εκτιμήσεις ακινήτων και τεχνικές πραγματογνωμοσύνες. Πιστοποιημένος Ελεγκτής Δόμησης.'
        : 'Comprehensive engineering services in Komotini, Greece. Structural studies, energy design, construction supervision, real estate valuations and technical expertise. Certified Building Inspector.';
      document.head.appendChild(meta);
    }
  }, [language, t]);

  const services = [
    'Αρχιτεκτονικός σχεδιασμός και αρχιτεκτονική μελέτη – επίβλεψη',
    'Έκδοση πλήρους φακέλου οικοδομικής άδειας και επίβλεψη του έργου',
    'Έκδοση αδειών λειτουργίας υγειονομικού ενδιαφέροντος παντός τύπου',
    'Ενεργειακή επιθεώρηση – ένταξη στο πρόγραμμα "εξοικονομώ κατ\'οίκον"',
    'Ελεγκτής δόμησης',
    'Ανακαινίσεις διαμερισμάτων και καταστημάτων',
    'Διακόσμηση εσωτερικών χώρων',
    'Φωτορεαλισμός και virtual video'
  ];

  const experience = [
    '17 ετής συνεχής εμπειρία στον Τομέα Στατικών Μελετών',
    '5 ετής εμπειρία στον τομέα του Ενεργειακού Σχεδιασμού',
    'Πιστοποιημένος Ελεγκτής Δόμησης',
    '17 ετής εμπειρία στην Κατασκευή Ιδιωτικών Έργων',
    '8 ετής εμπειρία στον Τομέα Εκτιμήσεων Ακινήτων',
    'Εμπειρία σε Τεχνικές Πραγματογνωμοσύνες',
    'Μέλος της Μόνιμης Επιτροπής Χωροταξίας και Περιβάλλοντος του ΤΕΕ Θράκης'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backofficeImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 className="text-5xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            {t('engineeringServices.title')}
          </motion.h1>
          <motion.p className="text-2xl" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {t('engineeringServices.description')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="bg-white rounded-xl shadow-lg p-10 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-bold mb-8 text-blue-700 border-b pb-4">
            ARCHInima – Αρχιτεκτονικό Γραφείο
          </h2>
          <div className="flex items-center space-x-4">
            <img src={photo1} alt="ARCHInima" className="w-1/2 h-auto rounded-lg" />
            <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line space-y-6">
              <p>
                Με σπουδές στη Σχολή <strong>Αριστοτελείου Πανεπιστημίου</strong> Θεσσαλονίκης (2000-2007) και μια φρέσκια, δημιουργική ματιά στην ελληνική αρχιτεκτονική και οικοδομική πραγματικότητα, ξεκίνησα το ταξίδι μου στον κόσμο του σχεδιασμού. Η βαθιά σύνδεσή μου με την πλούσια και μακρόχρονη κατασκευαστική παράδοση της οικογένειάς μου αποτέλεσε πολύτιμο εφόδιο στα πρώτα μου βήματα, δίπλα σε έναν έμπειρο αρχιτέκτονα, ο οποίος μου μετέδωσε ανεκτίμητες γνώσεις. Αυτή η εμπειρία με οδήγησε στη δημιουργία του δικού μου αρχιτεκτονικού γραφείου, το ARCHInima.
              </p>
              <p>
                Μαζί με τον αδελφό μου, Ιωάννη Μαυρίδη, πολιτικό μηχανικό (<strong>MSc Structural Engineering</strong>, <strong>Univ. of Surrey, UK</strong>), και τις πολύτιμες συμβουλές του πατέρα μας, Ανέστη Μαυρίδη, μηχανικού με <strong>30 χρόνια εμπειρίας</strong> στον κατασκευαστικό τομέα, αναλαμβάνουμε το έργο σας από την αρχή έως την ολοκλήρωσή του.
              </p>
              <p>
                Αναλαμβάνουμε:
                <ul className="list-disc list-inside">
                  <li>✔️ Αρχιτεκτονικό σχεδιασμό</li>
                  <li>✔️ Μελέτη & προϋπολογισμό</li>
                  <li>✔️ Κατασκευή & διαχείριση έργου</li>
                  <li>✔️ Εσωτερική διακόσμηση</li>
                  <li>✔️ Ολοκληρωμένη καθοδήγηση προς την υλοποίηση κάθε οράματος</li>
                </ul>
              </p>
              <p>
                Το ομαδικό πνεύμα, η θέληση και η φιλική διάθεση που μας χαρακτηρίζουν δημιουργούν έναν δεσμό εμπιστοσύνης με τους ανθρώπους που μας επιλέγουν. Για εμάς, η πραγματική επιτυχία δεν βρίσκεται μόνο στην ολοκλήρωση ενός έργου, αλλά στη δημιουργία σχέσεων που αντέχουν στον χρόνο.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Νέο Κείμενο για Γιάννη Μαυρίδη */}
        <motion.div className="bg-white rounded-xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Γιάννης Μαυρίδης, Company CEO</h2>
          <div className="flex items-center space-x-4">
            <img src={photo2} alt="Γιάννης Μαυρίδης" className="w-1/2 h-auto rounded-lg" />
            <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line space-y-6">
              <ul className="list-disc list-inside">
                <li><strong>17 ετής συνεχής εμπειρία</strong> στον Τομέα Στατικών Μελετών Αντισεισμικού Σχεδιασμού και Κατασκευής Κτιρίων από Οπλισμένο Σκυρόδεμα, με επιπλέον εξειδίκευση στον Σχεδιασμό κατά τις Διάβρωσης Σκυροδέματος.</li>
                <li><strong>5 ετής εμπειρία</strong> στον τομέα του Ενεργειακού Σχεδιασμού κατά <strong>ΚΕΝΑΚ</strong>, και στις ενεργειακές μελέτες και Ενεργειακές Επιθεωρήσεις. Διεκπεραίωση προγράμματος «<strong>Εξοικονομώ κατ Οίκον</strong>».</li>
                <li><strong>Πιστοποιημένος Ελεγκτής</strong> Δόμησης της μεγαλύτερης κατηγορίας Έργων.</li>
                <li><strong>17 ετής εμπειρία</strong> στην Κατασκευή Ιδιωτικών Έργων – <strong>6 ετής εμπειρία</strong> στον τομέα Δημοσίων Έργων.</li>
                <li><strong>8 ετής εμπειρία</strong> στον Τομέα Εκτιμήσεων Ακινήτων (Πανελλήνια Τράπεζα, Ασπίς Τράπεζα, Αγροτική Τράπεζα, Τράπεζα Πειραιώς).</li>
                <li>Εμπειρία σε Τεχνικές Πραγματογνωμοσύνες (ΤΕΕ Θράκης, ιδιωτών, Δικαστηρίων).</li>
                <li>Μέλος της Μόνιμης Επιτροπής Χωροταξίας και Περιβάλλοντος του ΤΕΕ Θράκης.</li>
                <li>Άδειες Δόμησης, Άδειες λειτουργίας Καταστημάτων, Καταστημάτων Υγειονομικού Ενδιαφέροντος, Βιοτεχνιών, Μεταποιητικών επιχειρήσεων, Άδειες διατήρησης σταύλων(μαντριών).</li>
                <li><strong>Πιστοποιημένος Επιθεωρητής Καταλυμμάτων</strong> για Κατηγοριοποίηση Ξενοδοχειακών Μονάδων (Αστεροποίηση) / Ενοικιαζόμενων Δωματίων (Κλειδιά) <strong>TUV Austria</strong>.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center gradient-text">
            {t('engineeringServices.experience.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('engineeringServices.experience.items').map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: '#F0FDF4' }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-3 bg-green-100 rounded-lg">
                  {index === 0 && <Award className="h-6 w-6 text-green-600" />}
                  {index === 1 && <Lightbulb className="h-6 w-6 text-green-600" />}
                  {index === 2 && <BadgeCheck className="h-6 w-6 text-green-600" />}
                  {index === 3 && <Building className="h-6 w-6 text-green-600" />}
                  {index === 4 && <FileText className="h-6 w-6 text-green-600" />}
                  {index === 5 && <ClipboardCheck className="h-6 w-6 text-green-600" />}
                  {index === 6 && <Users className="h-6 w-6 text-green-600" />}
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Δεύτερη Hero Section */}
        <div className="relative w-full h-96 mt-12">
          <img 
            src={floorImage}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t('engineeringServices.officeInfo.title')}
            </h1>
            <p className="text-lg text-white mb-8 text-center">
              {t('engineeringServices.officeInfo.description')}
            </p>
            <Link 
              to="/about-us"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              {t('engineeringServices.officeInfo.readMore')}
            </Link>
          </div>
        </div>

        {/* Υπηρεσίες Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center gradient-text">
            {t('engineeringServices.services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('engineeringServices.services.items').map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: '#EEF2FF' }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-3 bg-blue-100 rounded-lg">
                  {index === 0 && <Ruler className="h-6 w-6 text-blue-600" />}
                  {index === 1 && <FileText className="h-6 w-6 text-blue-600" />}
                  {index === 2 && <ClipboardCheck className="h-6 w-6 text-blue-600" />}
                  {index === 3 && <Zap className="h-6 w-6 text-blue-600" />}
                  {index === 4 && <Building className="h-6 w-6 text-blue-600" />}
                  {index === 5 && <Home className="h-6 w-6 text-blue-600" />}
                  {index === 6 && <Paintbrush className="h-6 w-6 text-blue-600" />}
                  {index === 7 && <Video className="h-6 w-6 text-blue-600" />}
                </div>
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EngineeringServices; 