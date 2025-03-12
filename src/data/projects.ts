import mikel from '../assets/images/mikel.jpg';
import mikel2 from '../assets/images/mikel2.jpg';
import mikel3 from '../assets/images/mikel3.jpg';
import mikel4 from '../assets/images/mikel4.png';
import mikel5 from '../assets/images/mikel5.png';
import house1 from '../assets/images/house1.jpg';
import house2 from '../assets/images/house2.jpg';
import house3 from '../assets/images/house3.jpg';
import house4 from '../assets/images/house4.jpg';
import house5 from '../assets/images/house5.jpg';
import house6 from '../assets/images/house6.jpg';
import house7 from '../assets/images/house7.jpg';
import house8 from '../assets/images/house8.jpg';
import house9 from '../assets/images/house9.jpg';
import house10 from '../assets/images/house10.jpg';
import build1 from '../assets/images/build1.jpg';
import build2 from '../assets/images/build2.jpg';
import build3 from '../assets/images/build3.jpg';
import build4 from '../assets/images/build4.jpg';
import build5 from '../assets/images/build5.jpg';
import build6 from '../assets/images/build6.jpg';
import dis1 from '../assets/images/dis1.jpg';
import dis2 from '../assets/images/dis2.jpg';
import dis3 from '../assets/images/dis3.jpg';
import z1 from '../assets/images/z1.jpg';
import z2 from '../assets/images/z2.jpg';
import z3 from '../assets/images/z3.jpg';
import z4 from '../assets/images/z4.jpg';
import z5 from '../assets/images/z5.jpg';
import z6 from '../assets/images/z6.jpg';
import pou1 from '../assets/images/pou1.jpg';
import pou2 from '../assets/images/pou2.jpg';
import pou3 from '../assets/images/pou3.jpg';
import pou4 from '../assets/images/pou4.jpg';
import pou5 from '../assets/images/pou5.jpg';
import pou6 from '../assets/images/pou6.jpg';
import pou7 from '../assets/images/pou7.jpg';
import ee1 from '../assets/images/ee1.jpg';
import ee2 from '../assets/images/ee2.jpg';
import ee3 from '../assets/images/ee3.jpg';
import ee4 from '../assets/images/ee4.jpg';
import ee5 from '../assets/images/ee5.jpg';
import ee6 from '../assets/images/ee6.jpg';
import qq1 from '../assets/images/qq1.jpg';
import qq2 from '../assets/images/qq2.jpg';
import qq3 from '../assets/images/qq3.jpg';
import qq4 from '../assets/images/qq4.jpg';
import qq5 from '../assets/images/qq5.jpg';
import xr1 from '../assets/images/xr1.jpg';
import xr2 from '../assets/images/xr2.jpg';
import xr3 from '../assets/images/xr3.jpg';
import xr4 from '../assets/images/xr4.jpg';
import xr5 from '../assets/images/xr5.jpg';
import spiti1 from '../assets/images/spiti1.jpg';
import spiti2 from '../assets/images/spiti2.jpg';
import spiti3 from '../assets/images/spiti3.jpg';
import spiti4 from '../assets/images/spiti4.jpg';
import spiti5 from '../assets/images/spiti5.jpg';
import spiti6 from '../assets/images/spiti6.jpg';
import spiti7 from '../assets/images/spiti7.jpg';
import spiti8 from '../assets/images/spiti8.jpg';
import spiti9 from '../assets/images/spiti9.jpg';
import spiti10 from '../assets/images/spiti10.jpg';
import spiti11 from '../assets/images/spiti11.jpg';
import spiti12 from '../assets/images/spiti12.jpg';
import aa1 from '../assets/images/aa1.jpg';
import aa2 from '../assets/images/aa2.jpg';
import aa3 from '../assets/images/aa3.jpg';
import aa4 from '../assets/images/aa4.jpg';
import aa5 from '../assets/images/aa5.jpg';
import aa6 from '../assets/images/aa6.jpg';
import tt1 from '../assets/images/tt1.jpg';
import tt2 from '../assets/images/tt2.jpg';
import tt3 from '../assets/images/tt3.jpg';
import tt4 from '../assets/images/tt4.jpg';
import rt1 from '../assets/images/rt1.jpg';
import rt2 from '../assets/images/rt2.jpg';
import rt3 from '../assets/images/rt3.jpg';
import rt4 from '../assets/images/rt4.jpg';
import rt5 from '../assets/images/rt5.jpg';
import rt6 from '../assets/images/rt6.jpg';
import rt7 from '../assets/images/rt7.jpg';

export type Category = 'all' | 'construction' | 'interior' | 'residential' | 'suburban';

export interface Project {
  id: number;
  title: {
    el: string;
    en: string;
  };
  category: Category | Category[];
  images: string[];
  description: {
    el: string;
    en: string;
  };
  detailedDescription: {
    el: string;
    en: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      el: 'Green Policy – Low Energy Consumption Building',
      en: 'Green Policy – Low Energy Consumption Building'
    },
    category: ['construction', 'residential'],
    images: [
      build1,
      build2,
      build3,
      build4,
      build5,
      build6
    ],
    description: {
      el: 'Κατασκευή κτιρίου χαμηλής ενεργειακής κατανάλωσης με οικολογικό σχεδιασμό',
      en: 'Construction of a low energy consumption building with ecological design'
    },
    detailedDescription: {
      el: `Σύγχρονο κτίριο με έμφαση στην ενεργειακή απόδοση και την περιβαλλοντική συνείδηση.

Το έργο περιλαμβάνει:
• Συστήματα εξοικονόμησης ενέργειας
• Χρήση οικολογικών υλικών
• Έξυπνα συστήματα διαχείρισης ενέργειας`,
      en: `Modern building focusing on energy efficiency and environmental consciousness.

The project includes:
• Energy saving systems
• Use of ecological materials
• Smart energy management systems`
    }
  },
  {
    id: 2,
    title: {
      el: 'Five-storey building with shops on the ground floor',
      en: 'Five-storey building with shops on the ground floor'
    },
    category: ['construction', 'residential'],
    images: [
      dis1,
      dis2,
      dis3
    ],
    description: {
      el: 'Κατασκευή πενταώροφου κτιρίου με καταστήματα στο ισόγειο',
      en: 'Construction of a five-storey building with ground floor retail spaces'
    },
    detailedDescription: {
      el: `Σύγχρονο πολυώροφο κτίριο με εμπορικούς χώρους στο ισόγειο και διαμερίσματα.

Το έργο περιλαμβάνει:
• Σχεδιασμό και κατασκευή
• Διαμόρφωση εμπορικών χώρων
• Διαμόρφωση κοινόχρηστων χώρων`,
      en: `Modern mixed-use building with retail spaces and apartments.

The project includes:
• Design and construction
• Retail space development
• Common areas configuration`
    }
  },
  {
    id: 3,
    title: {
      el: 'Private suburbian house',
      en: 'Private suburbian house'
    },
    category: 'interior',
    images: [
      z1,
      z2,
      z3,
      z4,
      z5,
      z6
    ],
    description: {
      el: 'Εσωτερική διακόσμηση ιδιωτικής κατοικίας στα προάστια',
      en: 'Interior decoration of a private residence in the suburbs'
    },
    detailedDescription: {
      el: `Πλήρης ανακαίνιση και διακόσμηση εσωτερικών χώρων με έμφαση στην κομψότητα και τη λειτουργικότητα.

Το έργο περιλαμβάνει:
• Σχεδιασμό εσωτερικών χώρων
• Επιλογή επίπλων και διακοσμητικών
• Σχεδιασμό φωτισμού
• Επιλογή υλικών και χρωμάτων
• Διαμόρφωση χώρων διαβίωσης`,
      en: `Complete renovation and interior decoration focusing on elegance and functionality.

The project includes:
• Interior space planning
• Furniture and decorative selection
• Lighting design
• Materials and color selection
• Living spaces configuration`
    }
  },
  {
    id: 4,
    title: {
      el: 'Retail store',
      en: 'Retail store'
    },
    category: 'interior',
    images: [
      pou1,
      pou2,
      pou3,
      pou4,
      pou5,
      pou6,
      pou7
    ],
    description: {
      el: 'Διαμόρφωση και διακόσμηση εμπορικού καταστήματος',
      en: 'Design and decoration of a retail store'
    },
    detailedDescription: {
      el: `Μοντέρνα διαμόρφωση εμπορικού χώρου με έμφαση στη λειτουργικότητα και την αισθητική.

Το έργο περιλαμβάνει:
• Σχεδιασμό χώρου καταστήματος
• Επιλογή εξοπλισμού
• Σχεδιασμό φωτισμού
• Διαμόρφωση προθηκών
• Επιλογή υλικών και χρωμάτων`,
      en: `Modern retail space design focusing on functionality and aesthetics.

The project includes:
• Store layout design
• Equipment selection
• Lighting design
• Display window setup
• Materials and color selection`
    }
  },
  {
    id: 5,
    title: {
      el: 'Renovation project',
      en: 'Renovation project'
    },
    category: 'interior',
    images: [
      ee1,
      ee2,
      ee3,
      ee4,
      ee5,
      ee6
    ],
    description: {
      el: 'Ανακαίνιση και αναδιαμόρφωση εσωτερικών χώρων',
      en: 'Interior renovation and remodeling'
    },
    detailedDescription: {
      el: `Πλήρης ανακαίνιση και αναδιαμόρφωση εσωτερικών χώρων με σύγχρονη αισθητική.

Το έργο περιλαμβάνει:
• Αρχιτεκτονικό σχεδιασμό
• Επιλογή νέων υλικών
• Σχεδιασμό φωτισμού
• Ανανέωση χώρων
• Επιλογή επίπλων`,
      en: `Complete renovation and remodeling of interior spaces with modern aesthetics.

The project includes:
• Architectural design
• New materials selection
• Lighting design
• Space renewal
• Furniture selection`
    }
  },
  {
    id: 6,
    title: {
      el: 'Business Headquarters',
      en: 'Business Headquarters'
    },
    category: 'interior',
    images: [
      qq1,
      qq2,
      qq3,
      qq4,
      qq5
    ],
    description: {
      el: 'Διαμόρφωση και διακόσμηση εταιρικών γραφείων',
      en: 'Design and decoration of corporate offices'
    },
    detailedDescription: {
      el: `Σύγχρονος σχεδιασμός επαγγελματικών χώρων με έμφαση στην εργονομία και την παραγωγικότητα.

Το έργο περιλαμβάνει:
• Σχεδιασμό χώρων εργασίας
• Διαμόρφωση αιθουσών συνεδριάσεων
• Εργονομικές λύσεις
• Επιλογή εξοπλισμού γραφείου
• Σχεδιασμό φωτισμού`,
      en: `Modern design of professional spaces focusing on ergonomics and productivity.

The project includes:
• Workspace design
• Meeting rooms configuration
• Ergonomic solutions
• Office equipment selection
• Lighting design`
    }
  },
  {
    id: 7,
    title: {
      el: 'Jewelry Store',
      en: 'Jewelry Store'
    },
    category: 'interior',
    images: [xr1, xr2, xr3, xr4, xr5],
    description: {
      el: 'Σχεδιασμός και διαμόρφωση καταστήματος κοσμημάτων',
      en: 'Design and setup of a jewelry store'
    },
    detailedDescription: {
      el: `Κομψός σχεδιασμός καταστήματος κοσμημάτων με έμφαση στην ανάδειξη των προϊόντων.

Το έργο περιλαμβάνει:
• Σχεδιασμό βιτρινών
• Ειδικό φωτισμό προϊόντων
• Διαμόρφωση χώρου έκθεσης
• Επιλογή υλικών και χρωμάτων`,
      en: `Elegant jewelry store design focusing on product presentation.

The project includes:
• Display case design
• Special product lighting
• Exhibition space setup
• Materials and color selection`
    }
  },
  {
    id: 8,
    title: {
      el: 'House in Komotini',
      en: 'House in Komotini'
    },
    category: 'interior',
    images: [
      spiti1, spiti2, spiti3, spiti4, spiti5, spiti6,
      spiti7, spiti8, spiti9, spiti10, spiti11, spiti12
    ],
    description: {
      el: 'Εσωτερική διακόσμηση κατοικίας στην Κομοτηνή',
      en: 'Interior decoration of a residence in Komotini'
    },
    detailedDescription: {
      el: `Μοντέρνα διακόσμηση κατοικίας με έμφαση στην άνεση και την αισθητική.

Το έργο περιλαμβάνει:
• Σχεδιασμό εσωτερικών χώρων
• Επιλογή επίπλων
• Διακοσμητικές λεπτομέρειες
• Σχεδιασμό φωτισμού
• Χρωματική μελέτη`,
      en: `Modern home decoration focusing on comfort and aesthetics.

The project includes:
• Interior space planning
• Furniture selection
• Decorative details
• Lighting design
• Color study`
    }
  },
  {
    id: 9,
    title: {
      el: 'KLP- Φροντιστήριο',
      en: 'KLP- Tutorial School'
    },
    category: 'interior',
    images: [aa1, aa2, aa3, aa4, aa5, aa6],
    description: {
      el: 'Σχεδιασμός και διαμόρφωση φροντιστηρίου',
      en: 'Design and setup of a tutorial school'
    },
    detailedDescription: {
      el: `Έχοντας ως αφετηρία έναν ανοικτό ισόγειο επαγγελματικό χώρο, βασικός στόχος αποτελούσε η δημιουργία πέντε φωτεινών και δημιουργικά επενδυμένων αιθουσών διδασκαλίας, μια αίθουσα αναμονής των μαθητών, σε μορφή διαδρόμων με εκπαιδευτικό υλικό, χρησιμοποιούμενο στη διακόσμηση του και ένα ευρύχωρο γραφείο και αίθουσα καθηγητών με τον απαραίτητο εξοπλισμό.

Το έργο περιλαμβάνει:
• Σχεδιασμό αιθουσών διδασκαλίας
• Διαμόρφωση χώρων αναμονής
• Εξοπλισμό γραφείων
• Εκπαιδευτικό εξοπλισμό
• Σχεδιασμό φωτισμού`,
      en: `Starting with an open ground floor professional space, the main goal was to create five bright and creatively furnished classrooms, a student waiting area in the form of corridors with educational material used in its decoration, and a spacious office and teachers' room with the necessary equipment.

The project includes:
• Classroom design
• Waiting area configuration
• Office equipment
• Educational equipment
• Lighting design`
    }
  },
  {
    id: 10,
    title: {
      el: 'PHYSIOanaplasis',
      en: 'PHYSIOanaplasis'
    },
    category: 'interior',
    images: [tt1, tt2, tt3, tt4],
    description: {
      el: 'Σχεδιασμός και διαμόρφωση κέντρου φυσικοθεραπείας',
      en: 'Design and setup of a physiotherapy center'
    },
    detailedDescription: {
      el: `Ένας πολυχώρος φυσικοθεραπείας, που αποσκοπεί τόσο στην επούλωση τραυματισμών, όσο και στην ενδυνάμωση και περαιτέρω άσκηση τραυματισμένων ατόμων, εμποδιζόμενων ατόμων και ατόμων με αναπηρία. Περιλαμβάνει έναν φωτεινό και ζωηρό χώρο γυμναστηρίου περίπου 30 τμ., έναν μεικτό χώρο κρεβατιών για φυσικοθεραπεία με τα αντίστοιχα μηχανήματα, έναν χώρο σάουνας για άσκηση στο νερό, καθώς και τα γραφεία των ίδιων των φυσικοθεραπευτών.

Το έργο περιλαμβάνει:
• Σχεδιασμό χώρου γυμναστηρίου
• Διαμόρφωση θεραπευτικών χώρων
• Εγκατάσταση ειδικού εξοπλισμού
• Χώρους υδροθεραπείας
• Γραφεία προσωπικού`,
      en: `A physiotherapy complex aimed at both healing injuries and strengthening and further exercise for injured individuals, impeded individuals, and people with disabilities. It includes a bright and vibrant gym space of approximately 30 sq.m., a mixed bed area for physiotherapy with corresponding equipment, a sauna area for water exercise, as well as the offices of the physiotherapists themselves.

The project includes:
• Gym space design
• Therapeutic area configuration
• Special equipment installation
• Hydrotherapy spaces
• Staff offices`
    }
  },
  {
    id: 11,
    title: {
      el: 'Living room – dining room renovation project',
      en: 'Living room – dining room renovation project'
    },
    category: 'interior',
    images: [
      rt1,
      rt2,
      rt3,
      rt4,
      rt5,
      rt6,
      rt7
    ],
    description: {
      el: 'Ανακαίνιση και επανασχεδιασμός σαλονιού-τραπεζαρίας',
      en: 'Living room and dining area renovation and redesign'
    },
    detailedDescription: {
      el: `Ανακαίνιση σαλονοτραπεζαρίας κατοικίας – Το έργο αφορά στην ανακαίνιση και επανασχεδιαμό της χωροθέτησης τόσο της επίπλωσης, όσο και των κατασκευών που οι ανάγκες των ιδιοκτητών υποδείκνυαν. Νέα μελέτη φωτισμού και πλήθος κατασκευών από γυψοσανίδα και corian επενδύουν διάφορα σημεία στον χώρο. ( πάγκοι, μπουφές, έπιπλο τηλεόρασης, κρυφοί φωτισμοί κ.α.). Τα υφάσματα και τα υλικά αποτελούν συνέχεια των παραπάνω επιλογών.

Το έργο περιλαμβάνει:
• Επανασχεδιασμό χώρου
• Ειδικές κατασκευές
• Μελέτη φωτισμού
• Επιλογή υλικών
• Διακοσμητικές λεπτομέρειες`,
      en: `Living room and dining area renovation - The project involves renovating and redesigning the layout of both furniture and constructions according to the owners' needs. New lighting study and various gypsum board and corian constructions cover different areas of the space (counters, buffet, TV furniture, hidden lighting, etc.). The fabrics and materials are a continuation of the above choices.

The project includes:
• Space redesign
• Custom constructions
• Lighting study
• Material selection
• Decorative details`
    }
  },
  {
    id: 14,
    title: {
      el: 'Mikel Coffee Κομοτηνή',
      en: 'Mikel Coffee Komotini'
    },
    category: ['construction', 'interior'],
    images: [
      mikel,
      mikel2,
      mikel3,
      mikel4,
      mikel5
    ],
    description: {
      el: 'Κατασκευή και διαμόρφωση καταστήματος Mikel Coffee στην Κομοτηνή',
      en: 'Construction and renovation of Mikel Coffee store in Komotini'
    },
    detailedDescription: {
      el: `Ολοκληρωμένη κατασκευή και διαμόρφωση του καταστήματος Mikel Coffee στην Κομοτηνή. 
      
Το έργο περιλαμβάνει:
• Πλήρη ανακαίνιση του χώρου
• Ηλεκτρομηχανολογικές εγκαταστάσεις
• Διαμόρφωση εσωτερικού χώρου
• Ειδικές κατασκευές για τον εξοπλισμό
• Διαμόρφωση εξωτερικού χώρου
• Επίβλεψη όλων των εργασιών`,
      en: `Complete construction and renovation of the Mikel Coffee store in Komotini.

The project includes:
• Complete space renovation
• Electrical and mechanical installations
• Interior design implementation
• Custom equipment installations
• Exterior area configuration
• Supervision of all works`
    }
  },
  {
    id: 15,
    title: {
      el: 'Multilevel suburban house',
      en: 'Multilevel suburban house'
    },
    category: ['construction', 'suburban', 'interior'],
    images: [
      house1,
      house2,
      house3,
      house4,
      house5,
      house6,
      house7,
      house8,
      house9,
      house10
    ],
    description: {
      el: 'Κατασκευή πολυεπίπεδης κατοικίας με σύγχρονο σχεδιασμό',
      en: 'Construction of a modern multilevel residence'
    },
    detailedDescription: {
      el: `Πολυτελής διαμόρφωση μεζονέτας με σύγχρονη αρχιτεκτονική και υψηλές προδιαγραφές.

Το έργο περιλαμβάνει:
• Σχεδιασμό και κατασκευή
• Εφαρμογή σύγχρονων τεχνικών δόμησης
• Ενεργειακά αποδοτικά συστήματα
• Έξυπνες οικιακές εγκαταστάσεις
• Διαμόρφωση εσωτερικού χώρου`,
      en: `Luxury construction of a multilevel house with modern architecture and high specifications.

The project includes:
• Design and construction
• Implementation of modern building techniques
• Energy efficient systems
• Smart home installations
• Interior design implementation`
    }
  }
];

export const categories = [
  { id: 'all', label: { el: 'Όλα', en: 'All' } },
  { id: 'construction', label: { el: 'Κατασκευές', en: 'Construction' } },
  { id: 'interior', label: { el: 'Εσωτερική Διακόσμηση', en: 'Interior Decoration' } },
  { id: 'residential', label: { el: 'Κτίρια Κατοικιών', en: 'Residential Buildings' } },
  { id: 'suburban', label: { el: 'Προάστια', en: 'Suburban' } }
]; 