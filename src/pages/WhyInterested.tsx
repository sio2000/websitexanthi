import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import mountainImage from '../assets/images/mountain.jpg';
import gr from '../assets/images/gr.jpg';
import gr2 from '../assets/images/gr2.jpg';
import { useTranslation } from '../hooks/useTranslation';

// Fix for the default marker icon in Leaflet
let DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const WhyInterested = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const content = {
    el: {
      title: 'Στην Καρδιά των Βαλκανίων: Ευκαιρίες στην Θράκη',
      subtitle: 'Γιατί να σας ενδιαφέρει:',
      location: [
        'Η εταιρεία μας εδρεύει στην Κομοτηνή, πρωτεύουσα της Θράκης, στη Βόρεια Ελλάδα.',
        'Η περιοχή μας συνορεύει με τη Βουλγαρία στα βόρεια (15 χλμ. σύνορα) και με την Τουρκία στα ανατολικά (80 χλμ. σύνορα). Η Θεσσαλονίκη, το δεύτερο μεγαλύτερο οικονομικό κέντρο της Ελλάδας, απέχει 270 χλμ. (2 ώρες μέσω αυτοκινητόδρομου). Το Πλόβντιβ, το δεύτερο μεγαλύτερο οικονομικό κέντρο της Βουλγαρίας, απέχει 1,5 ώρα οδικώς, ενώ η Κωνσταντινούπολη είναι προσβάσιμη σε 3,5 ώρες με αυτοκίνητο.',
        'Αυτά τα χαρακτηριστικά τοποθετούν τη Θράκη στο επίκεντρο μιας αναδυόμενης τουριστικής αγοράς.'
      ],
      aboutUs: {
        title: 'Ποιοι Είμαστε',
        description: 'Η MAVRIDIS Real Estate Development & Business Consulting δραστηριοποιείται εδώ και 40 χρόνια, υπό τη διοίκηση μηχανικών με υψηλή ακαδημαϊκή εξειδίκευση.'
      },
      expertise: {
        title: 'Εξειδίκευση & Υπηρεσίες',
        description: 'Στόχος μας είναι η βιώσιμη υλοποίηση των ιδεών σας. Διαθέτουμε αποτελεσματικότητα, επιμονή και ικανότητα επίλυσης προβλημάτων.'
      },
      services: {
        title: 'Υπηρεσίες:',
        items: [
          'Έναρξη επιχειρηματικής δραστηριότητας στη Θράκη και τα νησιά',
          'Σχεδιασμός, κατασκευή & διαχείριση ακινήτων',
          'Εκτίμηση ακινήτων & νομικός έλεγχος',
          'Ιδιωτικές & δημόσιες κατασκευές',
          'Κατασκευές υψηλής ενεργειακής απόδοσης',
          'Ανακαινίσεις καταστημάτων & κατοικιών'
        ]
      },
      cta: {
        title: 'Θέλετε να επενδύσετε ή να ξεκινήσετε επιχείρηση;',
        description: 'Είμαστε δίπλα σας σε κάθε βήμα! Αναλαμβάνουμε όλη τη διαδικασία αδειοδοτήσεων και τη νομική διαχείριση.',
        button: 'Ξεκινήστε το έργο σας!'
      },
      touristAttractions: {
        title: 'Τουριστικά Σημεία Ενδιαφέροντος',
        items: [
          {
            title: 'Περιοχή Μαρώνειας',
            description: 'Με ήσυχες παραλίες, αιωνόβιες ελιές, αμπελώνες και παραδοσιακές ταβέρνες με φρέσκο ψάρι.'
          },
          {
            title: 'Φανάρι',
            description: 'Διάσημο για τα beach bars, τους λάτρεις των πάρτι και τις αμμώδεις, ρηχές παραλίες του.'
          },
          {
            title: 'Σαμοθράκη',
            description: 'Ένα νησί μοναδικής φυσικής ομορφιάς, προσβάσιμο σε 4 ώρες μέσω Αλεξανδρούπολης (30 λεπτά οδήγηση + 3,5 ώρες με πλοίο).'
          },
          {
            title: 'Θάσος',
            description: 'Ένα από τα πιο μαγευτικά νησιά του Βόρειου Αιγαίου, προσβάσιμο σε 1 ώρα μέσω Κεραμωτής (40 λεπτά οδήγηση + 20 λεπτά με πλοίο).'
          },
          {
            title: 'Αρχαία Μαρώνεια',
            description: 'Σύμφωνα με την Οδύσσεια, εδώ ο Οδυσσέας έκλεψε τα πρόβατα του Κύκλωπα! Η σπηλιά του Κύκλωπα είναι επισκέψιμη, περιτριγυρισμένη από αμπελώνες, θέα στο Θρακικό Πέλαγος και αρωματισμένη από άγρια ρίγανη.'
          }
        ]
      },
      operatingAreas: {
        title: 'Περιοχές Δραστηριοποίησης',
        address: 'Τα γραφεία μας βρίσκονται στην οδό Θάσου 1, 69100, Κομοτηνή. Δραστηριοποιούμαστε σε όλη τη Θράκη: Κομοτηνή, Μαρώνεια, Φανάρι, Αρωγή, Σαμοθράκη, Θάσος.',
        thessaloniki: 'Στη Θεσσαλονίκη, παρέχουμε κυρίως χρηματοοικονομικές συμβουλές για επενδύσεις και έναρξη επιχειρήσεων, καθώς και αξιολογήσεις ακινήτων.'
      }
    },
    en: {
      title: 'In the Heart of the Balkans: Opportunities in Thrace',
      subtitle: 'Why you should be interested:',
      location: [
        'Our company is based in Komotini, the capital of Thrace, in Northern Greece.',
        'Our region borders Bulgaria to the north (15 km border) and Turkey to the east (80 km border). Thessaloniki, Greece\'s second-largest economic center, is 270 km away (2 hours via highway). Plovdiv, Bulgaria\'s second-largest economic center, is 1.5 hours away by road, while Istanbul is accessible in 3.5 hours by car.',
        'These characteristics place Thrace at the center of an emerging tourist market.'
      ],
      aboutUs: {
        title: 'Who We Are',
        description: 'MAVRIDIS Real Estate Development & Business Consulting has been operating for 40 years, under the management of engineers with high academic specialization.'
      },
      expertise: {
        title: 'Expertise & Services',
        description: 'Our goal is the sustainable implementation of your ideas. We have efficiency, persistence and problem-solving ability.'
      },
      services: {
        title: 'Services:',
        items: [
          'Business startup in Thrace and the islands',
          'Design, construction & property management',
          'Property valuation & legal control',
          'Private & public constructions',
          'High energy efficiency constructions',
          'Shop & home renovations'
        ]
      },
      cta: {
        title: 'Want to invest or start a business?',
        description: 'We are by your side every step of the way! We handle all licensing procedures and legal management.',
        button: 'Start your project!'
      },
      touristAttractions: {
        title: 'Tourist Attractions',
        items: [
          {
            title: 'Maroneia Area',
            description: 'With quiet beaches, ancient olive trees, vineyards, and traditional taverns serving fresh fish.'
          },
          {
            title: 'Fanari',
            description: 'Famous for its beach bars, party lovers, and sandy, shallow beaches.'
          },
          {
            title: 'Samothrace',
            description: 'An island of unique natural beauty, accessible in 4 hours via Alexandroupolis (30 minutes drive + 3.5 hours by ferry).'
          },
          {
            title: 'Thassos',
            description: 'One of the most enchanting islands in the North Aegean, accessible in 1 hour via Keramoti (40 minutes drive + 20 minutes by ferry).'
          },
          {
            title: 'Ancient Maroneia',
            description: 'According to the Odyssey, this is where Odysseus stole the Cyclops\'s sheep! The Cyclops\'s cave can be visited, surrounded by vineyards, views of the Thracian Sea, and scented with wild oregano.'
          }
        ]
      },
      operatingAreas: {
        title: 'Areas of Operation',
        address: 'Our offices are located at 1 Thasou Street, 69100, Komotini. We operate throughout Thrace: Komotini, Maroneia, Fanari, Arogi, Samothrace, Thassos.',
        thessaloniki: 'In Thessaloniki, we mainly provide financial advice for investments and business startups, as well as property valuations.'
      }
    }
  };

  const position: [number, number] = [41.1231, 25.4017];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative w-full h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${mountainImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold">
            {t('whyInterested.heroTitle')}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            {content[language].subtitle}
          </h2>
          
          <div className="space-y-6 text-gray-700">
            {content[language].location.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-4 h-[400px] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <MapContainer
            center={position}
            zoom={8}
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {language === 'el' ? 'Κομοτηνή, Θράκη' : 'Komotini, Thrace'}
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>

        {/* Tourist Attractions Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            {content[language].touristAttractions.title}
          </h2>
          
          <div className="space-y-6">
            {content[language].touristAttractions.items.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Operating Areas Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            {content[language].operatingAreas.title}
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">{content[language].operatingAreas.address}</p>
            <p className="text-gray-700">{content[language].operatingAreas.thessaloniki}</p>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src={gr}
                alt="Thessaloniki view"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={gr2}
                alt="Thessaloniki cityscape"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {content[language].aboutUs.title}
          </h2>
          
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {content[language].aboutUs.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                {content[language].expertise.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {content[language].expertise.description}
              </p>
              
              <h4 className="text-xl font-semibold mb-3">{content[language].services.title}</h4>
              <ul className="space-y-2">
                {content[language].services.items.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✅</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                {content[language].cta.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {content[language].cta.description}
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                {content[language].cta.button}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyInterested;
