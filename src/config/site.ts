import type {
  Award,
  Education,
  EmailAddress,
  Experience,
  Fellowship,
  HomepageSection,
  NavItem,
  PageSeo,
  Patent,
  PhoneNumber,
  ProfessionalActivity,
  ProfileLink,
  Project,
  Publication,
  ResearchTheme,
  Supervision,
  Workshop,
} from "./types";

export const site = {
  person: {
    name: "Dr. Sitanshu Sekhar Sahu",
    shortName: "Sitanshu Sekhar Sahu",
    honorificName: "Dr. Sitanshu Sekhar Sahu",
    nameVariants: [
      "Sitanshu Sekhar Sahu",
      "Sitanshu S. Sahu",
      "Sitanshu S Sahu",
      "Sitanshu Shekhar Sahu",
      "S. S. Sahu",
      "S.S. Sahu",
      "SS Sahu",
      "Sahu S. S.",
      "Sahu S.S",
      "S. Sahu",
    ],
    designation: "Associate Professor",
    department: "Department of Electronics and Communication Engineering",
    departmentShort: "Electronics and Communication Engineering",
    institution: "Birla Institute of Technology Mesra",
    institutionShort: "BIT Mesra",
    location: "Ranchi, Jharkhand, India",
    postalCode: "835215",
    addressLines: [
      "Department of Electronics and Communication Engineering",
      "Birla Institute of Technology Mesra",
      "Ranchi, Jharkhand, India - 835215",
    ],
    emails: [
      {
        address: "sssahu@bitmesra.ac.in",
        label: "Institutional email",
        primary: true,
      },
      { address: "sitanshusekhar@gmail.com", label: "Personal email" },
    ] satisfies EmailAddress[],
    phones: [
      { number: "+91 94727 60260", label: "Office", href: "tel:+919472760260" },
      {
        number: "+91 94374 15338",
        label: "Residence",
        href: "tel:+919437415338",
      },
    ] satisfies PhoneNumber[],
    showProfileImage: true,
    showPhone: true,
    shortBio:
      "His research spans bio-signal processing, image processing, artificial intelligence and machine learning, embedded AI, bioinformatics, and computer vision, with particular work in speech-based analysis, biomedical signal processing, and computational biology.",
    bio: "Dr. Sitanshu Sekhar Sahu is Associate Professor in the Department of Electronics and Communication Engineering at Birla Institute of Technology Mesra, Ranchi. He received his Ph.D. from the National Institute of Technology, Rourkela, for a dissertation on the analysis of genomic and proteomic signals using signal processing and soft-computing techniques, and later held a postdoctoral research fellowship at Oklahoma State University. His research concerns bio-signal processing, image processing, artificial intelligence and machine learning, embedded AI, bioinformatics, and computer vision, including speech-based analysis for Parkinson's disease, protein-protein interaction prediction, genomic signal processing, and related biomedical and computational work.",
  },

  navigation: [
    { label: "Home", href: "/", visible: true },
    { label: "About", href: "/about", visible: true },
    { label: "Research", href: "/research", visible: true },
    { label: "Publications", href: "/publications", visible: true },
    { label: "Projects", href: "/projects", visible: true },
    { label: "Patents", href: "/patents", visible: true },
    { label: "Supervision", href: "/supervision", visible: true },
    { label: "Activities", href: "/activities", visible: true },
    { label: "Contact", href: "/contact", visible: true },
  ] satisfies NavItem[],

  research: {
    interests: [
      "Bio-Signal Processing",
      "Image Processing",
      "Artificial Intelligence and Machine Learning",
      "Embedded AI",
      "Bioinformatics",
      "Computer Vision",
    ],
    themes: [
      {
        title: "Speech and voice analysis for Parkinson's disease",
        description:
          "Work on speech and multilingual voice signals for Parkinson's disease detection and assessment, including time-frequency features, deep models, and related biomedical speech analysis.",
        featured: true,
        visible: true,
      },
      {
        title: "Biomedical signal and image processing",
        description:
          "Methods for ECG and EEG analysis, sleep-stage-related signal processing, MRI and medical image filtering, heart-sound classification, and related biomedical imaging tasks.",
        featured: true,
        visible: true,
      },
      {
        title: "Protein-protein interaction and computational biology",
        description:
          "Machine learning and signal-processing approaches for protein-protein interaction prediction, host-pathogen interaction, and related computational biology, including work on rice and rice blast.",
        featured: true,
        visible: true,
      },
      {
        title: "Genomic signal processing",
        description:
          "Time-frequency and VLSI/FPGA-oriented methods for locating protein-coding regions, hot spots in protein sequences, and related genomic and proteomic signal analysis.",
        featured: true,
        visible: true,
      },
      {
        title: "Computer vision and image security",
        description:
          "Image processing for crowd analysis, pest detection, face detection, and chaos-based image encryption and visual cryptography.",
        featured: false,
        visible: true,
      },
      {
        title: "Embedded AI, energy harvesting, and intelligent systems",
        description:
          "Controller design and circuits for piezoelectric and thermal energy harvesting, embedded and edge-oriented AI, and related intelligent-system implementations.",
        featured: false,
        visible: true,
      },
    ] satisfies ResearchTheme[],
  },

  publications: {
    journals: [
      {
        title:
          "Multilingual Voice Signal Analysis for Parkinson's Disease Detection Using Instance-Based Domain Adaptation through Kernel Mean Matching",
        authors: ["Pandit Vivek Kumar Pandey", "Sitanshu Sekhar Sahu"],
        venue: "Computer Speech & Language",
        year: 2026,
        type: "journal",
        articleNumber: "102010",
        doi: "10.1016/j.csl.2026.102010",
        month: "May",
        featured: true,
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.csl.2026.102010",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.csl.2026.102010",
            verified: true,
          },
        ],
      },
      {
        title:
          "Parkinson's Disease Detection Using Hybrid Siamese Neural Network and Support Vector Machine in Multilingual Voice Signal",
        authors: ["Pandit Vivek Kumar Pandey", "Sitanshu Sekhar Sahu"],
        venue: "Journal of Voice",
        year: 2025,
        type: "journal",
        pages: "S0892-1997(25)00261-9",
        doi: "10.1016/j.jvoice.2025.06.036",
        month: "August",
        featured: true,
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.jvoice.2025.06.036",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.jvoice.2025.06.036",
            verified: true,
          },
        ],
      },
      {
        title:
          "Cascade Convolutional Neural Network-Autoencoder Method for Parkinson's Disease Detection Using Multilingual Voice Signal",
        authors: ["Pandit Vivek Kumar Pandey", "Sitanshu Sekhar Sahu"],
        venue: "SN Computer Science",
        year: 2025,
        type: "journal",
        volume: "6",
        pages: "1-12",
        articleNumber: "802",
        doi: "10.1007/s42979-025-04327-0",
        month: "September",
        featured: true,
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s42979-025-04327-0",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s42979-025-04327-0",
            verified: true,
          },
        ],
      },
      {
        title:
          "Deep learning approaches for detecting malignant melanoma in dermoscopic imagery",
        authors: [
          "A. Thakur",
          "S. K. Mishra",
          "M. Bhutani",
          "P. P. Dash",
          "P. K. Upadhyay",
          "S. S. Sahu",
        ],
        venue: "International Journal of Information Technology",
        year: 2025,
        type: "journal",
        doi: "10.1007/s41870-025-02651-5",
        month: "July",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s41870-025-02651-5",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s41870-025-02651-5",
            verified: true,
          },
        ],
      },
      {
        title:
          "Resonant recognition model-guided biophysical insights into POMC, leptin, adiponectin, BDNF, insulin, irisin, GDF-15 interactions & executing PBMT targeting leptin/BDNF circuit to attenuate obesity",
        authors: ["Tuhin Mukherjee", "Ashok Pattnaik", "Sitanshu Sekhar Sahu"],
        venue: "Lasers in Medical Science",
        year: 2025,
        type: "journal",
        volume: "40",
        articleNumber: "288",
        doi: "10.1007/s10103-025-04544-2",
        month: "June",
        featured: true,
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s10103-025-04544-2",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s10103-025-04544-2",
            verified: true,
          },
        ],
      },
      {
        title:
          "Parkinson's Disease Prediction using CNN-LSTM model from Voice Signal",
        authors: [
          "Pandit Vivek Kumar Pandey",
          "Sitanshu Sekhar Sahu",
          "Biswajit Karan",
          "Sudhansu Kumar Mishra",
        ],
        venue: "SN Computer Science",
        year: 2024,
        type: "journal",
        volume: "5",
        issue: "4",
        articleNumber: "381",
        doi: "10.1007/s42979-024-02728-1",
        month: "March",
        featured: true,
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s42979-024-02728-1",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s42979-024-02728-1",
            verified: true,
          },
        ],
      },
      {
        title:
          "Multi-level Image Security using Modified Rubik's Cube Algorithm",
        authors: ["Rupesh Kumar Sinha", "Sitanshu Sekhar Sahu"],
        venue: "International Journal of Information and Computer Security",
        year: 2024,
        type: "journal",
        volume: "23",
        issue: "4",
        pages: "396-409",
        doi: "10.1504/ijics.2024.139023",
        month: "June",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1504/ijics.2024.139023",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1504/ijics.2024.139023",
            verified: true,
          },
        ],
      },
      {
        title:
          "Analyzing VEGFA/VEGFR1 Interaction: Application of the Resonant Recognition Model's Stockwell Transform Method to Explore Potential Therapeutics for Angiogenesis-Related Diseases",
        authors: ["Tuhin Mukherjee", "Ashok Pattnaik", "Sitanshu Sekhar Sahu"],
        venue: "The Protein Journal",
        year: 2024,
        type: "journal",
        volume: "43",
        pages: "697-710",
        doi: "10.1007/s10930-024-10219-8",
        month: "July",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s10930-024-10219-8",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s10930-024-10219-8",
            verified: true,
          },
        ],
      },
      {
        title:
          "Product Length Predictions with Machine Learning: An Integrated Approach Using Extreme Gradient Boosting",
        authors: [
          "A. Thakur",
          "A. Kumar",
          "S. K. Mishra",
          "Subhendu Kumar Behera",
          "Jagannath Sethi",
          "Sitanshu Sekhar Sahu",
          "Subrat Kumar Swain",
        ],
        venue: "SN Computer Science",
        year: 2024,
        type: "journal",
        volume: "5",
        articleNumber: "659",
        doi: "10.1007/s42979-024-02999-8",
        month: "June",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s42979-024-02999-8",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s42979-024-02999-8",
            verified: true,
          },
        ],
      },
      {
        title:
          "Computational Models for Prediction of Protein-Protein Interaction in Rice and Magnaporthe grisea",
        authors: [
          "Biswajit Karan",
          "Satyajit Mahapatra",
          "Sitanshu Sekhar Sahu",
          "Dev Mani Pandey",
          "Sumit Chakravarty",
        ],
        venue: "Frontiers in Plant Science",
        year: 2023,
        type: "journal",
        volume: "13",
        articleNumber: "1046209",
        doi: "10.3389/fpls.2022.1046209",
        issn: "1664-462X",
        indexing: "SCIE",
        month: "February",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.3389/fpls.2022.1046209",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.3389/fpls.2022.1046209",
            verified: true,
          },
        ],
      },
      {
        title:
          "Identification and control of Maglev system using fractional and integer order PID controller",
        authors: [
          "Amit Kumar Sahoo",
          "Sudhansu Kumar Mishra",
          "Deep Shekhar Acharya",
          "Sitanshu Sekhar Sahu",
          "Sanchita Paul",
          "Vikash Kumar Gupta",
        ],
        venue: "Journal of Intelligent & Fuzzy Systems",
        year: 2023,
        type: "journal",
        volume: "44",
        issue: "5",
        pages: "7277-7289",
        doi: "10.3233/jifs-222238",
        indexing: "SCIE",
        month: "May",
        notes: "Publisher record marks this article as retracted.",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.3233/jifs-222238",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.3233/jifs-222238",
            verified: true,
          },
        ],
      },
      {
        title:
          "An investigation about the relationship between dysarthria level of speech and the neurological state of Parkinson’s patients",
        authors: [
          "Biswajit Karan",
          "Sitanshu Sekhar Sahu",
          "Juan Rafael Orozco-Arroyave",
        ],
        venue: "Biocybernetics and Biomedical Engineering",
        year: 2022,
        type: "journal",
        volume: "42",
        issue: "2",
        pages: "710-726",
        doi: "10.1016/j.bbe.2022.04.003",
        issn: "0208-5216",
        indexing: "SCIE",
        month: "June",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.bbe.2022.04.003",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.bbe.2022.04.003",
            verified: true,
          },
        ],
      },
      {
        title:
          "Identification of characteristics frequency and hot-spots in protein sequence of COVID-19 disease",
        authors: [
          "Vikas Pathak",
          "Satyasai Jagannath Nanda",
          "Amit Mahesh Joshi",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "Biomedical Signal Processing and Control",
        year: 2022,
        type: "journal",
        volume: "78",
        articleNumber: "103909",
        doi: "10.1016/j.bspc.2022.103909",
        issn: "1746-8094",
        indexing: "SCIE",
        month: "September",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.bspc.2022.103909",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.bspc.2022.103909",
            verified: true,
          },
        ],
      },
      {
        title:
          "ANOVA-particle swarm optimization-based feature selection and gradient boosting machine classifier for improved protein–protein interaction prediction",
        authors: ["Satyajit Mahapatra", "Sitanshu Sekhar Sahu"],
        venue: "Proteins: Structure, Function, and Bioinformatics",
        year: 2021,
        type: "journal",
        volume: "90",
        issue: "2",
        pages: "443-454",
        doi: "10.1002/prot.26236",
        issn: "1097-0134",
        indexing: "SCIE",
        month: "September",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1002/prot.26236",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1002/prot.26236",
            verified: true,
          },
        ],
      },
      {
        title:
          "FPGA implementation of high-speed tunable IIR band pass notch filter for identification of hot-spots in protein",
        authors: [
          "Vikas Pathak",
          "Satyasai Jagannath Nanda",
          "Amit Mahesh Joshi",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "International Journal of Circuit Theory and Applications",
        year: 2021,
        type: "journal",
        volume: "49",
        issue: "11",
        pages: "3748-3765",
        doi: "10.1002/cta.3131",
        issn: "0098-9886",
        indexing: "SCIE",
        month: "September",
        notes:
          "The CV lists volume 19(11); the publisher record is volume 49, issue 11.",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1002/cta.3131",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1002/cta.3131",
            verified: true,
          },
        ],
      },
      {
        title:
          "Improved prediction of protein-protein interaction using hybrid of functional-link Siamese neural network and gradient boosting machines",
        authors: ["Satyajit Mahapatra", "Sitanshu Sekhar Sahu"],
        venue: "Briefings in Bioinformatics",
        year: 2021,
        type: "journal",
        volume: "22",
        issue: "6",
        doi: "10.1093/bib/bbab255",
        issn: "1477-4054",
        indexing: "SCIE",
        month: "November",
        featured: true,
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1093/bib/bbab255",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1093/bib/bbab255",
            verified: true,
          },
        ],
      },
      {
        title:
          "An improved framework for Parkinson’s Disease Prediction using Variational Mode Decomposition-Hilbert Spectrum of speech signal",
        authors: ["Biswajit Karan", "Sitanshu Sekhar Sahu"],
        venue: "Biocybernetics and Biomedical Engineering",
        year: 2021,
        type: "journal",
        volume: "41",
        issue: "2",
        pages: "717-732",
        doi: "10.1016/j.bbe.2021.04.014",
        issn: "0208-5216",
        indexing: "SCIE",
        month: "April",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.bbe.2021.04.014",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.bbe.2021.04.014",
            verified: true,
          },
        ],
      },
      {
        title:
          "Integrating Resonant Recognition Model and Stockwell Transform for Localization of Hotspots in Tubulin",
        authors: ["Satyajit Mahapatra", "Sitanshu Sekhar Sahu"],
        venue: "IEEE Transactions on NanoBioscience",
        year: 2021,
        type: "journal",
        volume: "20",
        issue: "3",
        doi: "10.1109/tnb.2021.3077710",
        issn: "1536-1241",
        indexing: "SCIE",
        month: "July",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/tnb.2021.3077710",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/tnb.2021.3077710",
            verified: true,
          },
        ],
      },
      {
        title:
          "Non-negative matrix factorization-based time-frequency feature extraction of voice signal for Parkinson’s disease prediction",
        authors: [
          "Biswajit Karan",
          "Sitanshu Sekhar Sahu",
          "Juan Rafael Orozco-Arroyave",
          "Kartik Mahto",
        ],
        venue: "Computer Speech & Language",
        year: 2021,
        type: "journal",
        volume: "69",
        articleNumber: "101216",
        doi: "10.1016/j.csl.2021.101216",
        issn: "0885-2308",
        indexing: "SCIE",
        month: "September",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.csl.2021.101216",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.csl.2021.101216",
            verified: true,
          },
        ],
      },
      {
        title:
          "Deep neural network and extreme gradient boosting based Hybrid classifier for improved prediction of Protein-Protein interaction",
        authors: [
          "Satyajit Mahapatra",
          "Vivek Raj Gupta",
          "Sitanshu Sekhar Sahu",
          "Ganapati Panda",
        ],
        venue:
          "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
        year: 2021,
        type: "journal",
        volume: "19",
        issue: "1",
        doi: "10.1109/tcbb.2021.3061300",
        issn: "1545-5963",
        indexing: "SCIE",
        month: "February",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/tcbb.2021.3061300",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/tcbb.2021.3061300",
            verified: true,
          },
        ],
      },
      {
        title:
          "Denoising of Electrocardiogram Signal Using S-Transform Based Time–Frequency Filtering Approach",
        authors: [
          "Ankita Mishra",
          "Sitanshu Sekhar Sahu",
          "Rajeev Sharma",
          "Sudhansu Kumar Mishra",
        ],
        venue: "Arabian Journal for Science and Engineering",
        year: 2021,
        type: "journal",
        volume: "46",
        pages: "9515-9525",
        doi: "10.1007/s13369-021-05333-z",
        issn: "2191-4281",
        indexing: "SCIE",
        month: "February",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s13369-021-05333-z",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s13369-021-05333-z",
            verified: true,
          },
        ],
      },
      {
        title:
          "A Circular Adaptive Median Filter for Salt and Pepper Noise Suppression from MRI Images",
        authors: [
          "Priya Sagar",
          "Ashruti Upadhyaya",
          "Sudhansu Kumar Mishra",
          "Rudra Narayan Pandey",
          "Sitanshu Sekhar Sahu",
          "Ganapati Panda",
        ],
        venue: "Journal of Scientific & Industrial Research",
        year: 2020,
        type: "journal",
        volume: "79",
        pages: "941-944",
        issn: "0975-1084",
        indexing: "SCIE",
        month: "October",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "Hardware implementation of infinite impulse response anti-notch filter for exon region identification in eukaryotic genes",
        authors: [
          "Vikas Pathak",
          "Satyasai Jagannath Nanda",
          "Amit Mahesh Joshi",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "International Journal of Circuit Theory and Applications",
        year: 2020,
        type: "journal",
        volume: "48",
        issue: "12",
        pages: "2242-2256",
        doi: "10.1002/cta.2838",
        issn: "0098-9886",
        indexing: "SCIE",
        month: "July",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1002/cta.2838",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1002/cta.2838",
            verified: true,
          },
        ],
      },
      {
        title:
          "Hilbert spectrum analysis for automatic detection and evaluation of Parkinson’s speech",
        authors: [
          "Biswajit Karan",
          "Sitanshu Sekhar Sahu",
          "Juan Rafael Orozco-Arroyave",
          "Kartik Mahto",
        ],
        venue: "Biomedical Signal Processing and Control",
        year: 2020,
        type: "journal",
        volume: "61",
        articleNumber: "102050",
        doi: "10.1016/j.bspc.2020.102050",
        issn: "1746-8094",
        indexing: "SCIE",
        month: "August",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.bspc.2020.102050",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.bspc.2020.102050",
            verified: true,
          },
        ],
      },
      {
        title: "Soil Moisture Prediction Using Shallow Neural Network",
        authors: ["Shikha Prakash", "Sitanshu Sekhar Sahu"],
        venue:
          "International Journal of Advanced Research in Engineering and Technology",
        year: 2020,
        type: "journal",
        volume: "11",
        issue: "6",
        pages: "426-435",
        issn: "2350-0328",
        indexing: "SCOPUS",
        month: "June",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "VLSI implementation of anti-notch lattice structure for identification of exon regions in Eukaryotic genes",
        authors: [
          "Vikas Pathak",
          "Satyasai Jagannath Nanda",
          "Amit Mahesh Joshi",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "IET Computers & Digital Techniques",
        year: 2020,
        type: "journal",
        volume: "14",
        issue: "5",
        pages: "217-229",
        doi: "10.1049/iet-cdt.2019.0086",
        issn: "1350-2387",
        indexing: "SCIE",
        month: "September",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1049/iet-cdt.2019.0086",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1049/iet-cdt.2019.0086",
            verified: true,
          },
        ],
      },
      {
        title:
          "Parkinson disease prediction using intrinsic mode function based features from speech signal",
        authors: ["Biswajit Karan", "Sitanshu Sekhar Sahu", "Kartik Mahto"],
        venue: "Biocybernetics and Biomedical Engineering",
        year: 2020,
        type: "journal",
        volume: "40",
        pages: "249-264",
        doi: "10.1016/j.bbe.2019.05.005",
        issn: "0208-5216",
        indexing: "SCI",
        month: "April",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.bbe.2019.05.005",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.bbe.2019.05.005",
            verified: true,
          },
        ],
      },
      {
        title:
          "Plant-mSubP: a computational framework for the prediction of single and multi-target protein subcellular localization using integrated machine-learning approaches",
        authors: ["Sitanshu S. Sahu", "Cristian D. Loaiza", "Rakesh Kaundal"],
        venue: "AoB PLANTS",
        year: 2019,
        type: "journal",
        volume: "12",
        issue: "3",
        articleNumber: "plz068",
        doi: "10.1093/aobpla/plz068",
        issn: "2041-2851",
        indexing: "SCIE",
        month: "December",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1093/aobpla/plz068",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1093/aobpla/plz068",
            verified: true,
          },
        ],
      },
      {
        title:
          "Detecting anomalous crowd behavior using correlation analysis of optical flow",
        authors: ["Navneet Nayan", "Sitanshu Sekhar Sahu", "Sanjeet Kumar"],
        venue: "Signal, Image and Video Processing",
        year: 2019,
        type: "journal",
        volume: "13",
        issue: "6",
        pages: "1233-1241",
        doi: "10.1007/s11760-019-01474-9",
        issn: "1863-1711",
        indexing: "SCI",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s11760-019-01474-9",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s11760-019-01474-9",
            verified: true,
          },
        ],
      },
      {
        title:
          "Adaptive firefly algorithm based optimized key generation for image security",
        authors: ["Rupesh Kumar Sinha", "S. S. Sahu"],
        venue: "Journal of Intelligent & Fuzzy Systems",
        year: 2019,
        type: "journal",
        volume: "36",
        issue: "5",
        pages: "4437-4447",
        doi: "10.3233/JIFS-169998",
        issn: "1064-1246",
        indexing: "SCI",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.3233/JIFS-169998",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.3233/JIFS-169998",
            verified: true,
          },
        ],
      },
      {
        title:
          "Efficient SSHI circuit for piezoelectric energy harvester uses one shot pulse boost converter",
        authors: ["S. Kumari", "S. S. Sahu", "B. Gupta"],
        venue: "Analog Integrated Circuits and Signal Processing",
        year: 2018,
        type: "journal",
        volume: "97",
        pages: "545-555",
        doi: "10.1007/s10470-018-1218-1",
        issn: "0925-1030",
        indexing: "SCI",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s10470-018-1218-1",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s10470-018-1218-1",
            verified: true,
          },
        ],
      },
      {
        title:
          "Secure Image Encryption Based on Improved Bat Optimized Piecewise Linear Chaotic Map through Integrated Permutation-Confusion and Double diffusion",
        authors: ["Rupesh Kumar Sinha", "Sahu S. S."],
        venue: "Journal of Intelligent & Fuzzy Systems",
        year: 2018,
        type: "journal",
        volume: "35",
        issue: "2",
        pages: "1567-1578",
        doi: "10.3233/JIFS-169696",
        issn: "1064-1246",
        indexing: "SCI",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.3233/JIFS-169696",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.3233/JIFS-169696",
            verified: true,
          },
        ],
      },
      {
        title:
          "A Novel Smooth texture based visual cryptography approach for secure communication",
        authors: [
          "Ram Chandra Barik",
          "Sitanshu Sekhar Sahu",
          "Suvamoy Changder",
        ],
        venue:
          "International Journal of Electronic Security and Digital Forensics",
        year: 2018,
        type: "journal",
        volume: "10",
        issue: "2",
        pages: "109-137",
        doi: "10.1504/ijesdf.2018.090949",
        issn: "1751-9128",
        indexing: "SCOPUS",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1504/ijesdf.2018.090949",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1504/ijesdf.2018.090949",
            verified: true,
          },
        ],
      },
      {
        title: "Classification of Atrial Arrhythmias using Neural Networks",
        authors: [
          "Jai Utkarsh",
          "Raju Kumar Pandey",
          "Shrey Kumar Dubey",
          "Shubham Sinha",
          "S. S. Sahu",
        ],
        venue: "IAES International Journal of Artificial Intelligence",
        year: 2018,
        type: "journal",
        volume: "7",
        issue: "2",
        pages: "90-94",
        doi: "10.11591/ijai.v7.i2.pp90-94",
        issn: "2089-4872",
        indexing: "SCOPUS",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.11591/ijai.v7.i2.pp90-94",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.11591/ijai.v7.i2.pp90-94",
            verified: true,
          },
        ],
      },
      {
        title:
          "Predicting Protein-RNA Interaction Using Sequence Derived features and Machine Learning Approach",
        authors: [
          "Chandan Pandey",
          "Rokkam Sandeep",
          "Aikansh Priyam",
          "Satyajit Mahapatra",
          "Sitanshu S. Sahu",
        ],
        venue: "International Journal of Data Mining and Bioinformatics",
        year: 2017,
        type: "journal",
        volume: "19",
        issue: "3",
        pages: "270-282",
        doi: "10.1504/ijdmb.2017.090991",
        issn: "1748-5681",
        indexing: "SCIE",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1504/ijdmb.2017.090991",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1504/ijdmb.2017.090991",
            verified: true,
          },
        ],
      },
      {
        title:
          "Cat Swarm Optimization based Functional Link Artificial Neural Network Filter for Gaussian Noise Removal from Computed Tomography Images",
        authors: ["M. Kumar", "S. K. Mishra", "S. S. Sahu"],
        venue: "Applied Computational Intelligence and Soft Computing",
        year: 2016,
        type: "journal",
        volume: "2016",
        pages: "1-6",
        articleNumber: "6304915",
        doi: "10.1155/2016/6304915",
        issn: "1687-9724",
        indexing: "SCOPUS",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1155/2016/6304915",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1155/2016/6304915",
            verified: true,
          },
        ],
      },
      {
        title:
          "Identification of Glacial Isostatic Adjustment in Eastern Canada Using S Transform Filtering of GPS Observations",
        authors: [
          "Nithin V. George",
          "Kristy F. Tiampo",
          "Sitanshu S. Sahu",
          "Stephane Mazzotti",
          "Lalu Mansinha",
          "Ganapati Panda",
        ],
        venue: "Pure and Applied Geophysics",
        year: 2012,
        type: "journal",
        volume: "169",
        issue: "8",
        pages: "1507-1517",
        doi: "10.1007/s00024-011-0404-1",
        issn: "0033-4553",
        indexing: "SCI",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/s00024-011-0404-1",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/s00024-011-0404-1",
            verified: true,
          },
        ],
      },
      {
        title:
          "Efficient Localization of Hot Spot in Proteins Using A Novel S-Transform Based Filtering Approach",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda"],
        venue:
          "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
        year: 2011,
        type: "journal",
        volume: "8",
        issue: "5",
        pages: "1235-1246",
        doi: "10.1109/tcbb.2010.109",
        issn: "1545-5963",
        indexing: "SCIE",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/tcbb.2010.109",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/tcbb.2010.109",
            verified: true,
          },
        ],
      },
      {
        title:
          "Identification of Protein Coding Regions In DNA Sequence Using a Time-Frequency Filtering Approach",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda"],
        venue: "Genomics, Proteomics & Bioinformatics",
        year: 2011,
        type: "journal",
        volume: "9",
        issue: "1-2",
        pages: "45-55",
        doi: "10.1016/s1672-0229(11)60007-7",
        issn: "1672-0229",
        indexing: "SCI",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/s1672-0229(11)60007-7",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/s1672-0229(11)60007-7",
            verified: true,
          },
        ],
      },
      {
        title:
          "A Novel Feature Representation Method based Chou’s Pseudo Amino Acid Composition for Protein Structural Class Prediction",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda"],
        venue: "Computational Biology and Chemistry",
        year: 2010,
        type: "journal",
        volume: "34",
        issue: "5-6",
        pages: "320-327",
        doi: "10.1016/j.compbiolchem.2010.09.002",
        issn: "1476-9271",
        indexing: "SCI",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/j.compbiolchem.2010.09.002",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/j.compbiolchem.2010.09.002",
            verified: true,
          },
        ],
      },
      {
        title:
          "A DSP Approach for Protein Coding Region Identification In DNA Sequences",
        authors: ["Sitanshu S. Sahu", "G. Panda"],
        venue: "International Journal of Signal and Image Processing",
        year: 2010,
        type: "journal",
        volume: "1",
        issue: "2",
        pages: "75-79",
        month: "March",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
    ] satisfies Publication[],
    conferences: [
      {
        title:
          "AI-Powered Diagnosis of Voice Disorders Using Mel-Frequency Feature and Machine Learning",
        authors: [
          "Anshu Mala Kispotta",
          "Rupesh Kumar Sinha",
          "Sitanshu Sekhar Sahu",
        ],
        venue:
          "IEEE International Conference on Computer Vision and Machine Intelligence",
        year: 2025,
        type: "conference",
        doi: "10.1109/cvmi66673.2025.11337370",
        month: "October",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/cvmi66673.2025.11337370",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/cvmi66673.2025.11337370",
            verified: true,
          },
        ],
      },
      {
        title:
          "Direct Writing of Silver Nanoparticle Patterns Through Liquid Microprinting",
        authors: [
          "Atul Arya",
          "Sachin Kumar Singh",
          "Richa Mishra",
          "Vimal Kumar Singh Yadav",
          "Sitanshu Shekhar Sahu",
        ],
        venue:
          "IEEE 7th International Conference on Emerging Electronics (ICEE)",
        year: 2025,
        type: "conference",
        doi: "10.1109/icee67165.2025.11409911",
        month: "December",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icee67165.2025.11409911",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icee67165.2025.11409911",
            verified: true,
          },
        ],
      },
      {
        title:
          "Parkinson’s Disease Detection Using Wavelet Packet Absolute Amplitude Deviation (WPAAD) from voice signals",
        authors: [
          "Pandit Vivek Kumar Pandey",
          "Sitanshu Sekhar Sahu",
          "Biswajit Karan",
          "Juan Rafael Orozco-Arroyave",
        ],
        venue:
          "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)",
        year: 2025,
        type: "conference",
        doi: "10.1109/icasspw65056.2025.11011128",
        month: "June",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icasspw65056.2025.11011128",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icasspw65056.2025.11011128",
            verified: true,
          },
        ],
      },
      {
        title: "CNN-LSTM-Based Lung Sound Analysis for Pneumonia Detection",
        authors: [
          "Pandit Vivek Kumar Pandey",
          "Sitanshu Sekhar Sahu",
          "Sumit Chakravarty",
          "Craig Chin",
        ],
        venue: "IEEE SoutheastCon 2025",
        year: 2025,
        type: "conference",
        pages: "1072-1077",
        doi: "10.1109/southeastcon56624.2025.10971692",
        month: "March",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/southeastcon56624.2025.10971692",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/southeastcon56624.2025.10971692",
            verified: true,
          },
        ],
      },
      {
        title:
          "Hybrid CNN-Bottleneck Encoder Based Feature Extraction Technique for Parkinson’s Disease Detection from Voice Signal",
        authors: ["Pandit Vivek Kumar Pandey", "Sitanshu Sekhar Sahu"],
        venue: "International Conference on Data Science and Applications",
        year: 2025,
        type: "conference",
        volume: "1237",
        pages: "351-361",
        doi: "10.1007/978-981-96-1185-0_27",
        month: "May",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-96-1185-0_27",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-96-1185-0_27",
            verified: true,
          },
        ],
      },
      {
        title:
          "Parkinson’s disease Prediction using Intrinsic Mode Function Instantaneous Amplitude Deviation",
        authors: ["P. V. Pandey", "B. Karan", "S. S. Sahu"],
        venue:
          "National Conference on Intelligent Systems, IoT, and Wireless Communication for the Society",
        year: 2024,
        type: "conference",
        doi: "10.1007/978-981-96-4741-5_22",
        month: "February",
        notes:
          "Conference date from the CV (February 2024); Springer LNNS DOI is the published proceedings record.",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-96-4741-5_22",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-96-4741-5_22",
            verified: true,
          },
        ],
      },
      {
        title:
          "Speech Signal Analysis Using Hybrid Feature Extraction Technique for Parkinson’s Disease Prediction",
        authors: ["Pandit Vivek Kumar Pandey", "Sitanshu Sekhar Sahu"],
        venue: "International Conference on Data Science and Applications",
        year: 2023,
        type: "conference",
        doi: "10.1007/978-981-99-7862-5_32",
        month: "July",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-99-7862-5_32",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-99-7862-5_32",
            verified: true,
          },
        ],
      },
      {
        title:
          "IOT based soil health monitoring system using soil moisture sensor and PH sensor",
        authors: [
          "Mrinalini Barik",
          "Sitanshu Sekhar Sahu",
          "Rupesh Kumar Sinha",
        ],
        venue:
          "International Conference on Data Science and Intelligent Applications",
        year: 2023,
        type: "conference",
        month: "April",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "Classification of Heart Sound using Tunable Q Wavelet Transform and Machine Learning",
        authors: [
          "Garima Thakur",
          "Sitanshu Sekhar Sahu",
          "Ying Xie",
          "Sumit Chakravarty",
        ],
        venue: "IEEE International Conference on Big Data",
        year: 2022,
        type: "conference",
        pages: "2800-2803",
        doi: "10.1109/bigdata55660.2022.10020480",
        month: "December",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/bigdata55660.2022.10020480",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/bigdata55660.2022.10020480",
            verified: true,
          },
        ],
      },
      {
        title:
          "Heart Sound Abnormality Detection using Wavelet Packet Features and Machine Learning",
        authors: [
          "Rohith Sai V",
          "Biswajit Karan",
          "Garima Thakur",
          "Ashutosh Rath",
          "Sitanshu Sekhar Sahu",
        ],
        venue:
          "IEEE International Symposium of Asian Control Association on Intelligent Robotics and Industrial Automation (IRIA)",
        year: 2021,
        type: "conference",
        pages: "310-314",
        doi: "10.1109/iria53009.2021.9588724",
        month: "September",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/iria53009.2021.9588724",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/iria53009.2021.9588724",
            verified: true,
          },
        ],
      },
      {
        title:
          "FPGA Implementation of High Speed Anti-notch Lattice filter for Exon Region Identification in Eukaryotic Genes",
        authors: [
          "Vikas Pathak",
          "Satyasai Jagannath Nanda",
          "Amit Mahesh Joshi",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "IEEE Computer Society Annual Symposium on VLSI",
        year: 2021,
        type: "conference",
        pages: "418-421",
        doi: "10.1109/isvlsi51109.2021.00082",
        isbn: "978-1-6654-3947-3",
        month: "August",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/isvlsi51109.2021.00082",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/isvlsi51109.2021.00082",
            verified: true,
          },
        ],
      },
      {
        title:
          "VLSI Implementation of Tunable Band-Pass Notch IIR Filter for Localization of Hot spots in Proteins",
        authors: [
          "Vikas Pathak",
          "Satyasai Jagannath Nanda",
          "Amit Mahesh Joshi",
          "Sitanshu Sekhar Sahu",
        ],
        venue:
          "International Conference on Microelectronics, Computing and Communication Systems",
        year: 2021,
        type: "conference",
        pages: "563-575",
        doi: "10.1007/978-981-15-5546-6_48",
        publisher: "Springer, Singapore",
        month: "March",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-15-5546-6_48",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-15-5546-6_48",
            verified: true,
          },
        ],
      },
      {
        title: "A Review on Intelligent PID Controllers in Autonomous Vehicle",
        authors: [
          "V. Vartika",
          "S. Singh",
          "S. Das",
          "S. K. Mishra",
          "S. S. Sahu",
        ],
        venue:
          "Advances in Smart Grid Automation and Industry 4.0, Lecture Notes in Electrical Engineering",
        year: 2021,
        type: "conference",
        volume: "693",
        doi: "10.1007/978-981-15-7675-1_39",
        publisher: "Springer, Singapore",
        month: "April",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-15-7675-1_39",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-15-7675-1_39",
            verified: true,
          },
        ],
      },
      {
        title:
          "Stacked auto-encoder based Time-frequency features of Speech signal for Parkinson disease prediction",
        authors: ["Biswajit Karan", "Sitanshu Sekhar Sahu", "Kartik Mahto"],
        venue:
          "IEEE International Conference on Artificial Intelligence and Signal Processing",
        year: 2020,
        type: "conference",
        pages: "1-4",
        doi: "10.1109/aisp48273.2020.9073595",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/aisp48273.2020.9073595",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/aisp48273.2020.9073595",
            verified: true,
          },
        ],
      },
      {
        title:
          "Boosting predictions of Host-Pathogen protein interactions using Deep neural networks",
        authors: ["Satyajit Mahapatra", "Sitanshu Sekhar Sahu"],
        venue:
          "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS)",
        year: 2020,
        type: "conference",
        pages: "1-4",
        doi: "10.1109/sceecs48394.2020.150",
        month: "February",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/sceecs48394.2020.150",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/sceecs48394.2020.150",
            verified: true,
          },
        ],
      },
      {
        title:
          "Effect of Dimensionality Reduction on Classification Accuracy for Protein–Protein Interaction Prediction",
        authors: [
          "Satyajit Mahapatra",
          "Anish Kumar",
          "Animesh Sharma",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "Advanced Computing and Intelligent Engineering",
        year: 2020,
        type: "conference",
        pages: "3-12",
        doi: "10.1007/978-981-15-1081-6_1",
        publisher: "Springer",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-15-1081-6_1",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-15-1081-6_1",
            verified: true,
          },
        ],
      },
      {
        title: "Improved Face Detection Using YCbCr and Adaboost",
        authors: [
          "Vishnu Vansh",
          "Kumar Chandrasekhar",
          "C. R. Anil",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "Computational Intelligence in Data Mining",
        year: 2020,
        type: "conference",
        pages: "689-699",
        doi: "10.1007/978-981-13-8676-3_58",
        publisher: "Springer",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-13-8676-3_58",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-13-8676-3_58",
            verified: true,
          },
        ],
      },
      {
        title: "Image Encryption Using Modified Rubik’s Cube Algorithm",
        authors: [
          "Rupesh Kumar Sinha",
          "Iti Agrawal",
          "Kritika Jain",
          "Anushka Gupta",
          "S. S. Sahu",
        ],
        venue: "Advances in Computational Intelligence",
        year: 2020,
        type: "conference",
        pages: "69-78",
        doi: "10.1007/978-981-13-8222-2_6",
        publisher: "Springer",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-13-8222-2_6",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-13-8222-2_6",
            verified: true,
          },
        ],
      },
      {
        title:
          "Prediction of Protein Interactions in Rice and Blast Fungus Using Machine Learning",
        authors: [
          "Biswajit Karan",
          "Satyajit Mahapatra",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "IEEE International Conference on Information Technology",
        year: 2019,
        type: "conference",
        pages: "33-36",
        doi: "10.1109/icit48102.2019.00012",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icit48102.2019.00012",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icit48102.2019.00012",
            verified: true,
          },
        ],
      },
      {
        title:
          "A Closed loop robust controller for SSHI based piezoelectric energy harvester",
        authors: [
          "Sweta Kumari",
          "Subrat Kumar Swain",
          "Sitanshu Sekhar Sahu",
          "Aditya Kumar",
          "Prashant Kumar",
          "Bharat Gupta",
        ],
        venue:
          "Annual Conference on Computer-Aided Developments in Electronics and Communication",
        year: 2019,
        type: "conference",
        pages: "113",
        publisher: "CRC Press",
        month: "March",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title: "Improved fractal-SPIHT hybrid image compression algorithm",
        authors: ["Anu Sri", "Sitanshu Sekhar Sahu"],
        venue:
          "IEEE International Conference on Computing, Communication and Networking Technologies",
        year: 2019,
        type: "conference",
        pages: "1-4",
        doi: "10.1109/icccnt45670.2019.8944769",
        month: "July",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icccnt45670.2019.8944769",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icccnt45670.2019.8944769",
            verified: true,
          },
        ],
      },
      {
        title:
          "Detection of Parkinson Disease using Variational Mode Decomposition of the Speech Signal",
        authors: ["Biswajit Karan", "Kartik Mahto", "Sitanshu Sekhar Sahu"],
        venue:
          "IEEE International Conference on Communication and Signal Processing",
        year: 2018,
        type: "conference",
        doi: "10.1109/iccsp.2018.8524445",
        month: "April",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/iccsp.2018.8524445",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/iccsp.2018.8524445",
            verified: true,
          },
        ],
      },
      {
        title:
          "High Speed Implementation of Notch/Anti-notch IIR Filter on FPGA",
        authors: [
          "Vikas Pathak",
          "Satyasai Jagannath Nanda",
          "Amit Mahesh Joshi",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "IEEE INDICON",
        year: 2018,
        type: "conference",
        doi: "10.1109/indicon45594.2018.8986985",
        month: "December",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/indicon45594.2018.8986985",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/indicon45594.2018.8986985",
            verified: true,
          },
        ],
      },
      {
        title:
          "Chaotic Image Encryption Scheme Based on Modified Arnold Cat Map and Henon Map",
        authors: [
          "Rupesh Kumar Sinha",
          "Baddigam Asha",
          "Niraj San",
          "Savvy Prasad",
          "S. S. Sahu",
        ],
        venue:
          "IEEE International Conference on Current Trends towards Converging Technologies (ICCTCT 2018)",
        year: 2018,
        type: "conference",
        doi: "10.1109/icctct.2018.8551137",
        month: "March",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icctct.2018.8551137",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icctct.2018.8551137",
            verified: true,
          },
        ],
      },
      {
        title:
          "R Peak Detection Using Empirical Mode Decomposition With Shannon Energy Envelope",
        authors: [
          "Khushboo Kumari",
          "Sitanshu Shekhar Sahu",
          "Rupesh Kumar Sinha",
        ],
        venue:
          "International Conference on Inventive Communication and Computational Technologies",
        year: 2018,
        type: "conference",
        doi: "10.1109/icicct.2018.8473279",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icicct.2018.8473279",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icicct.2018.8473279",
            verified: true,
          },
        ],
      },
      {
        title: "Chaotic Image Encryption Scheme Based on S-Box Substitution",
        authors: [
          "Rupesh Kumar Sinha",
          "Baddigam Asha",
          "Niraj San",
          "Savvy Prasad",
          "S. S. Sahu",
        ],
        venue:
          "International Conference on Inventive Research in Computing Applications",
        year: 2018,
        type: "conference",
        doi: "10.1109/icirca.2018.8597409",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icirca.2018.8597409",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icirca.2018.8597409",
            verified: true,
          },
        ],
      },
      {
        title: "Soil moisture prediction using machine learning",
        authors: ["Shikha Prakash", "Animesh Sharma", "Sitanshu Shekhar Sahu"],
        venue:
          "International Conference on Inventive Communication and Computational Technologies",
        year: 2018,
        type: "conference",
        doi: "10.1109/icicct.2018.8473260",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icicct.2018.8473260",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icicct.2018.8473260",
            verified: true,
          },
        ],
      },
      {
        title: "Detection of Pests Using Color Based Image Segmentation",
        authors: [
          "Apurva Sriwastwa",
          "Shikha Prakash",
          "Mrinalini",
          "Swati Swarit",
          "Khushboo Kumari",
          "Sitanshu Sekhar Sahu",
        ],
        venue:
          "International Conference on Inventive Communication and Computational Technologies",
        year: 2018,
        type: "conference",
        doi: "10.1109/icicct.2018.8473166",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icicct.2018.8473166",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icicct.2018.8473166",
            verified: true,
          },
        ],
      },
      {
        title:
          "A Novel Data Encryption Approach in the Grid-Structured Binary Image.",
        authors: ["R. C. Barik", "S. S. Sahu", "S. P. Bhoi", "S. Changder"],
        venue:
          "International Conference on Microelectronics, Computing & Communication Systems, Lecture Notes in Electrical Engineering",
        year: 2018,
        type: "conference",
        volume: "453",
        pages: "103-115",
        doi: "10.1007/978-981-10-5565-2_9",
        isbn: "978-981-10-5564-5",
        publisher: "Springer, Singapore",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-10-5565-2_9",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-10-5565-2_9",
            verified: true,
          },
        ],
      },
      {
        title: "Detection of Atrial Arrhythmias Using Autoregessive Modeling",
        authors: ["A. Mishra", "C. Pandey", "S. S. Sahu"],
        venue:
          "Innovations in Electronics and Communication Engineering, Lecture Notes in Networks and Systems",
        year: 2018,
        type: "conference",
        volume: "7",
        pages: "193-200",
        doi: "10.1007/978-981-10-3812-9_20",
        isbn: "978-981-10-3811-2",
        publisher: "Springer, Singapore",
        month: "November",
        notes: "Title spelling follows the CV (Autoregessive).",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-10-3812-9_20",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-10-3812-9_20",
            verified: true,
          },
        ],
      },
      {
        title: "Accidental Event Detection Based on Optical Flow Analysis",
        authors: ["Navneet Nayan", "Sanjeet Kumar", "Sitanshu Sekhar Sahu"],
        venue:
          "Advances in Communication, Devices and Networking, Lecture Notes in Electrical Engineering",
        year: 2018,
        type: "conference",
        volume: "462",
        pages: "607-614",
        doi: "10.1007/978-981-10-7901-6_66",
        isbn: "978-981-10-7900-9",
        publisher: "Springer, Singapore",
        month: "May",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-10-7901-6_66",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-10-7901-6_66",
            verified: true,
          },
        ],
      },
      {
        title:
          "A Thyristor based Self Start up Integrated Circuit for Piezo-Electric Energy Harvester",
        authors: ["Sweta Kumari", "Sitanshu Sekhar Sahu", "Bharat Gupta"],
        venue:
          "International Conference on Intelligent Computing and Control, Coimbatore",
        year: 2017,
        type: "conference",
        pages: "94-98",
        isbn: "978-1-5386-0373-4",
        month: "June",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "A Low Voltage Pre Start Up Circuit for Thermal Energy Harvesting Applications",
        authors: ["Sweta Kumari", "Sitanshu Sekhar Sahu", "Bharat Gupta"],
        venue:
          "IEEE International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET), Chennai",
        year: 2017,
        type: "conference",
        pages: "1999-2002",
        doi: "10.1109/wispnet.2017.8300105",
        month: "March",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/wispnet.2017.8300105",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/wispnet.2017.8300105",
            verified: true,
          },
        ],
      },
      {
        title:
          "Selection of dominant voice features for accurate detection of Parkinson's disease",
        authors: [
          "Spriha Chandrayan",
          "Aarushi Agarwal",
          "Mohammad Arif",
          "Sitanshu S. Sahu",
        ],
        venue:
          "IEEE International Conference on Biosignals, Images and Instrumentation (ICBSII), Chennai",
        year: 2017,
        type: "conference",
        doi: "10.1109/icbsii.2017.8082297",
        month: "March",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/icbsii.2017.8082297",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/icbsii.2017.8082297",
            verified: true,
          },
        ],
      },
      {
        title:
          "Image Texture-Based New Cryptography Scheme Using Advanced Encryption Standard",
        authors: [
          "Ram Chandra Barik",
          "Suvamoy Changder",
          "Sitanshu Sekhar Sahu",
        ],
        venue: "Computational Intelligence in Data Mining",
        year: 2017,
        type: "conference",
        volume: "556",
        pages: "449-458",
        doi: "10.1007/978-981-10-3874-7_42",
        isbn: "978-981-10-3873-0",
        publisher: "Springer, Singapore",
        month: "May",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1007/978-981-10-3874-7_42",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1007/978-981-10-3874-7_42",
            verified: true,
          },
        ],
      },
      {
        title: "Quantum Key Distribution: Simulation of BB84 Protocol in C",
        authors: ["R. K. Sinha", "S. S. Sahu"],
        venue:
          "International Conference on Engineering Technology, Science and Management Innovation, Chandigarh",
        year: 2017,
        type: "conference",
        issn: "2345-117X",
        month: "January",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "ECG Signal Denoising using Time-Frequency based Filtering Approach",
        authors: [
          "Ankita Mishra",
          "Ashutosh Kumar Singh",
          "Sitanshu Sekhar Sahu",
        ],
        venue:
          "IEEE International Conference on Communication and Signal Processing, Melmaruvathur",
        year: 2016,
        type: "conference",
        doi: "10.1109/iccsp.2016.7754188",
        month: "April",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/iccsp.2016.7754188",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/iccsp.2016.7754188",
            verified: true,
          },
        ],
      },
      {
        title:
          "Prediction of Parkinson’s Disease using Speech Signal with Extreme Learning Machine",
        authors: ["Aarushi Agarwal", "Spriha Chandrayan", "Sitanshu S. Sahu"],
        venue:
          "IEEE International Conference on Electrical, Electronics, and Optimization Techniques (ICEEOT), Chennai",
        year: 2016,
        type: "conference",
        doi: "10.1109/iceeot.2016.7755419",
        month: "March",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/iceeot.2016.7755419",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/iceeot.2016.7755419",
            verified: true,
          },
        ],
      },
      {
        title:
          "Prediction of host-pathogen protein-protein interaction network using Machine learning approach",
        authors: ["Ashutosh Kumar Singh", "Sitanshu Sekhar Sahu"],
        venue:
          "National Conference on Emerging & Innovative Trends in Computer Science, Hyderabad",
        year: 2016,
        type: "conference",
        isbn: "978-93-82570-78-3",
        month: "April",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "Sub-Cellular Localization Prediction Using Machine Learning Approach",
        authors: ["Ashutosh Kumar Singh", "Sitanshu S. Sahu", "Ankita Mishra"],
        venue:
          "International Conference on Instrumentation, Electrical and Electronics Engineering, Raipur",
        year: 2015,
        type: "conference",
        month: "December",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "Predicting genome-scale Arabidopsis-Pseudomonas syringae interactome using domain and interolog-based approaches",
        authors: ["Sitanshu S. Sahu", "Tyler Weirick", "Rakesh Kaundal"],
        venue: "BMC Bioinformatics",
        year: 2014,
        type: "conference",
        volume: "15",
        issue: "S11",
        articleNumber: "S13",
        doi: "10.1186/1471-2105-15-s11-s13",
        notes:
          "Listed in the CV under conference proceedings; published in the MCBIOS BMC Bioinformatics supplement.",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1186/1471-2105-15-s11-s13",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1186/1471-2105-15-s11-s13",
            verified: true,
          },
        ],
      },
      {
        title:
          "LacSubPred: predicting subtypes of Laccases, an important lignin metabolism-related enzyme class, using in-silico approaches",
        authors: [
          "Tyler Weirick",
          "Sitanshu S. Sahu",
          "R. Mahalingam",
          "Rakesh Kaundal",
        ],
        venue: "BMC Bioinformatics",
        year: 2014,
        type: "conference",
        volume: "15",
        issue: "S11",
        articleNumber: "S15",
        doi: "10.1186/1471-2105-15-s11-s15",
        notes:
          "Listed in the CV under conference proceedings; published in the MCBIOS BMC Bioinformatics supplement.",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1186/1471-2105-15-s11-s15",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1186/1471-2105-15-s11-s15",
            verified: true,
          },
        ],
      },
      {
        title:
          "Computational prediction and experimental validation of host-pathogen protein-protein interactome: a case study on Arabidopsis thaliana - Pseudomonas syringae model system",
        authors: [
          "Sitanshu S. Sahu",
          "Amita Kaundal",
          "Clemencia Rojas",
          "Seonghee Lee",
          "Tyler Weirick",
          "Kiran S. Mysore",
          "Rakesh Kaundal",
        ],
        venue: "Plant Biology, Portland, Oregon, USA",
        year: 2014,
        type: "conference",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "Identification and characterization of plastid-type proteins from sequence-attributed features using machine learning",
        authors: [
          "Rakesh Kaundal",
          "Sitanshu S. Sahu",
          "Ruchi Verma",
          "Tyler Weirick",
        ],
        venue: "BMC Bioinformatics",
        year: 2013,
        type: "conference",
        volume: "14",
        issue: "S14",
        articleNumber: "S7",
        doi: "10.1186/1471-2105-14-s14-s7",
        notes:
          "Listed in the CV under conference proceedings; published in a BMC Bioinformatics supplement.",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1186/1471-2105-14-s14-s7",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1186/1471-2105-14-s14-s7",
            verified: true,
          },
        ],
      },
      {
        title:
          "Predicting Multi-target Protein Subcellular Localization combining homology and Machine Learning Approaches",
        authors: ["Sitanshu S. Sahu", "Rakesh Kaundal"],
        venue: "MCBIOS Conference, Columbia, MO, USA",
        year: 2013,
        type: "conference",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "Cancer Classification Using Microarray Gene Expression Data: Approached Using Wavelet Transform and F-score Method",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda", "Ramchandra Barik"],
        venue: "International Conference on Electronic Systems, NIT Rourkela",
        year: 2011,
        type: "conference",
        month: "January",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title:
          "An Efficient Signal Processing Approach in Eukaryotic Gene Prediction",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda"],
        venue: "The Eighth Asia Pacific Bioinformatics Conference, Bangalore",
        year: 2010,
        type: "conference",
        month: "January",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title: "An Improved S-Transform for Time-Frequency Analysis",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda", "Nithin V. George"],
        venue:
          "IEEE International Advance Computing Conference (IACC), Thapar University, Patiala",
        year: 2009,
        type: "conference",
        pages: "315-319",
        doi: "10.1109/IADCC.2009.4809028",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/IADCC.2009.4809028",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/IADCC.2009.4809028",
            verified: true,
          },
        ],
      },
      {
        title:
          "A New Approach for Identification of Hot Spots in Proteins Using S-Transform Filtering",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda"],
        venue:
          "IEEE International Workshop on Genomic Signal Processing and Statistics (GENSIPS), Minnesota, USA",
        year: 2009,
        type: "conference",
        pages: "1-4",
        doi: "10.1109/GENSIPS.2009.5174374",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/GENSIPS.2009.5174374",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/GENSIPS.2009.5174374",
            verified: true,
          },
        ],
      },
      {
        title: "Time Localized Band Filtering Using Modified S-Transform",
        authors: [
          "Nithin V. George",
          "Sitanshu S. Sahu",
          "L. Mansinha",
          "K. F. Tiampo",
          "Ganapati Panda",
        ],
        venue:
          "International Conference on Signal Processing Systems (ICSPS), Singapore",
        year: 2009,
        type: "conference",
        pages: "42-46",
        doi: "10.1109/ICSPS.2009.63",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/ICSPS.2009.63",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/ICSPS.2009.63",
            verified: true,
          },
        ],
      },
      {
        title:
          "Improved Protein Structural Class Prediction Using Genetic Algorithm and Artificial Immune System",
        authors: [
          "Sitanshu S. Sahu",
          "Ganapati Panda",
          "Satyasai Jagannath Nanda",
        ],
        venue:
          "World Congress on Nature and Biologically Inspired Computing (NaBIC), Coimbatore",
        year: 2009,
        type: "conference",
        pages: "731-735",
        doi: "10.1109/NABIC.2009.5393488",
        month: "December",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1109/NABIC.2009.5393488",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1109/NABIC.2009.5393488",
            verified: true,
          },
        ],
      },
      {
        title:
          "Development of a new low complexity ANN based Drug discovery method for efficient design of SARS Co3CL Protease Inhibitors",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda", "Chinmaya Mahapatra"],
        venue:
          "International Congress of Environmental Research (ICER), BITS Pilani",
        year: 2008,
        type: "conference",
        volume: "2",
        pages: "1044",
        month: "December",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
      {
        title: "Gene Prediction by Sliding DFT Algorithm",
        authors: ["Sitanshu S. Sahu", "Ganapati Panda"],
        venue:
          "International Conference Advance Bio-Engineering (ICAB), Sathyabama University",
        year: 2007,
        type: "conference",
        month: "December",
        visible: true,
        source: { type: "cv", url: null, verified: false },
      },
    ] satisfies Publication[],
    bookChapters: [
      {
        title:
          "Navigating in silico drug discovery: A hands-on guide with AutoDock Vina and Discovery Studio",
        authors: [
          "Tuhin Mukherjee",
          "Sitanshu Sekhar Sahu",
          "Ashok Kumar Pattnaik",
          "Kishanta Kumar Pradhan",
          "Satyajit Mohanty",
        ],
        venue: "Harnessing Genomic Tools for Crop Improvement",
        year: 2026,
        type: "book-chapter",
        doi: "10.1016/B978-0-443-29281-1.00004-6",
        isbn: "978-0-443-29281-1",
        bookTitle: "Harnessing Genomic Tools for Crop Improvement",
        publisher: "Academic Press, Elsevier",
        notes:
          "Book-level DOI listed in the CV: 10.1016/C2023-0-51864-6. The chapter DOI is used for the chapter page.",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/B978-0-443-29281-1.00004-6",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/B978-0-443-29281-1.00004-6",
            verified: true,
          },
        ],
      },
      {
        title:
          "Speech Signal Analysis Using Gammatone-Frequency Cepstral Coefficient For Parkinson's Disease Prediction",
        authors: ["Pandit Vivek Kumar Pandey", "Sitanshu Sekhar Sahu"],
        venue: "Machine Learning in Biomedical and Health Informatics",
        year: 2025,
        type: "book-chapter",
        pages: "1-22",
        doi: "10.1201/9781774919552-8",
        isbn: "9781774919552",
        bookTitle: "Machine Learning in Biomedical and Health Informatics",
        publisher: "Apple Academic Press",
        month: "June",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1201/9781774919552-8",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1201/9781774919552-8",
            verified: true,
          },
        ],
      },
      {
        title:
          "Deep Neural Network for Parkinson Disease Prediction Using SPECT Image",
        authors: [
          "Biswajit Karan",
          "Animesh Sharma",
          "Sitanshu Sekhar Sahu",
          "Sudhansu Kumar Mishra",
        ],
        venue:
          "Deep Learning, Machine Learning and IoT in Biomedical and Health Informatics",
        year: 2022,
        type: "book-chapter",
        pages: "159-173",
        doi: "10.1201/9780367548445-12",
        isbn: "9780367548445",
        bookTitle:
          "Deep Learning, Machine Learning and IoT in Biomedical and Health Informatics",
        publisher: "CRC Press, Taylor & Francis",
        month: "February",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1201/9780367548445-12",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1201/9780367548445-12",
            verified: true,
          },
        ],
      },
      {
        title:
          "A Comparative Performance Assessment of a Set of Adaptive Median Filters for Eliminating Noise from Medical Images",
        authors: [
          "Sudhansu Kumar Mishra",
          "Prajna Parimita Dash",
          "Sitanshu Sekhar Sahu",
          "Ashutosh Rath",
        ],
        venue:
          "Deep Learning, Machine Learning and IoT in Biomedical and Health Informatics",
        year: 2022,
        type: "book-chapter",
        pages: "121-137",
        doi: "10.1201/9780367548445-9",
        isbn: "9780367548445",
        bookTitle:
          "Deep Learning, Machine Learning and IoT in Biomedical and Health Informatics",
        publisher: "CRC Press, Taylor & Francis",
        month: "February",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1201/9780367548445-9",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1201/9780367548445-9",
            verified: true,
          },
        ],
      },
      {
        title:
          "Sleep Stage Classification Using DWT and Dispersion Entropy Applied on EEG Signals",
        authors: [
          "Rajeev Sharma",
          "Sitanshu Sekhar Sahu",
          "Abhay Upadhyay",
          "Rishi Raj Sharma",
          "Ajit Kumar Sahoo",
        ],
        venue: "Computer-Aided Design for Biomedical Applications",
        year: 2021,
        type: "book-chapter",
        pages: "35-56",
        doi: "10.1201/9781003121152-2",
        isbn: "9781003121152",
        bookTitle: "Computer-Aided Design for Biomedical Applications",
        publisher: "CRC Press, Taylor & Francis Group",
        month: "April",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1201/9781003121152-2",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1201/9781003121152-2",
            verified: true,
          },
        ],
      },
      {
        title: "Energy harvesting via human body activities",
        authors: [
          "Sweta Kumari",
          "Sitanshu Sekhar Sahu",
          "Bharat Gupta",
          "Sudhansu Kumar Mishra",
        ],
        venue: "Smart Biosensors in Medical Care",
        year: 2020,
        type: "book-chapter",
        pages: "87-106",
        doi: "10.1016/B978-0-12-820781-9.00005-X",
        isbn: "978-0-12-820781-9",
        bookTitle: "Smart Biosensors in Medical Care",
        publisher: "Academic Press, Elsevier",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/B978-0-12-820781-9.00005-X",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/B978-0-12-820781-9.00005-X",
            verified: true,
          },
        ],
      },
      {
        title: "Intelligent Speech Processing in the Time-Frequency Domain",
        authors: ["Biswajit Karan", "Kartik Mahto", "Sitanshu Sekhar Sahu"],
        venue: "Intelligent Speech Signal Processing",
        year: 2019,
        type: "book-chapter",
        pages: "153-169",
        doi: "10.1016/B978-0-12-818130-0.00009-X",
        isbn: "978-0-12-818130-0",
        bookTitle: "Intelligent Speech Signal Processing",
        publisher: "Elsevier",
        visible: true,
        source: {
          type: "doi",
          url: "https://doi.org/10.1016/B978-0-12-818130-0.00009-X",
          verified: true,
        },
        sources: [
          {
            label: "DOI",
            url: "https://doi.org/10.1016/B978-0-12-818130-0.00009-X",
            verified: true,
          },
        ],
      },
    ] satisfies Publication[],
  },

  projects: [
    {
      title:
        "Development of end-to-end speech-based AI system for Parkinson's Disease Prediction",
      fundingBody: "IDEAS, TIH, ISI Kolkata",
      duration: "2022–2025",
      amount: "₹5,14,000",
      role: "PI",
      status: "completed",
      featured: true,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
    {
      title:
        "Computational identification and validation of genome wide protein-protein interaction network in rice and rice blast",
      fundingBody: "SERB, DST, Government of India",
      duration: "2017–2020",
      amount: "₹21,62,600",
      role: "PI",
      status: "completed",
      featured: true,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
    {
      title:
        "Electroencephalogram based Sleep Stages Detection using Advance Wavelet Techniques",
      fundingBody: "NPIU, MHRD, Government of India",
      duration: "2019–2021",
      amount: "₹14,42,000",
      role: "PI",
      status: "completed",
      featured: false,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
    {
      title: "Development of Data Science Methods for Cyber-Physical System",
      fundingBody: "NMICPS, TIH, ISI Kolkata, DST",
      duration: "2022–2025",
      amount: "₹1,00,00,000",
      role: "PI",
      status: "completed",
      featured: true,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
  ] satisfies Project[],

  patents: [
    {
      title:
        "A photo biomodulation device for attenuating obesity, and method thereof",
      status: "granted",
      country: "India",
      kind: "patent",
      patentNumber: "564886",
      featured: true,
      visible: true,
      source: {
        type: "institutional",
        url: "https://vidwan.inflibnet.ac.in/profile/413438",
        verified: false,
      },
    },
    {
      title: "An intelligent irrigation system and method thereof",
      status: "granted",
      country: "India",
      kind: "patent",
      patentNumber: "599883",
      featured: true,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
    {
      title:
        "A piezoelectric based energy harvesting system and method thereof",
      status: "published",
      country: "India",
      kind: "patent",
      applicationNumber: "202331057064",
      featured: false,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
    {
      title: "Agricultural Health Monitoring Device",
      status: "granted",
      country: "United Kingdom",
      kind: "design",
      patentNumber: "6300570",
      date: "11 August 2023",
      featured: true,
      visible: true,
      source: {
        type: "institutional",
        url: "https://archive.bitmesra.ac.in/Visit_Faculty_Page99856_997?deptid=71&i=BCenbWQQlGPdiyOeumwjRg%3D%3D&menuid=1686",
        verified: true,
      },
      sources: [
        {
          label: "BIT Mesra faculty record",
          url: "https://archive.bitmesra.ac.in/Visit_Faculty_Page99856_997?deptid=71&i=BCenbWQQlGPdiyOeumwjRg%3D%3D&menuid=1686",
          verified: true,
        },
      ],
    },
    {
      title:
        "A System for Real Time Detection of Parkinson’s Disease, Method and Utility",
      status: "application",
      country: "India",
      kind: "patent",
      applicationNumber: "202531093457",
      featured: false,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
    {
      title: "An Autonomous Vehicle Navigation System and Method Thereof",
      status: "published",
      country: "India",
      kind: "patent",
      applicationNumber: "202331066870",
      date: "5 October 2023",
      featured: false,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
    {
      title: "A Device for Heart Condition(s) Management and Method Thereof",
      status: "application",
      country: "India",
      kind: "patent",
      applicationNumber: "202431024417",
      date: "27 March 2024",
      featured: false,
      visible: true,
      source: { type: "cv", url: null, verified: false },
    },
  ] satisfies Patent[],

  education: [
    {
      degree: "Ph.D.",
      institution: "National Institute of Technology, Rourkela",
      location: "India",
      duration: "2007–2011",
      dissertation:
        "Analysis of Genomic and Proteomic Signals Using Signal Processing and Soft-computing Techniques",
      visible: true,
    },
    {
      degree: "B.E.",
      institution: "Biju Patnaik University of Technology, Odisha",
      location: "India",
      duration: "2001–2005",
      major: "Electronics and Telecommunication Engineering",
      visible: true,
    },
  ] satisfies Education[],

  academicExperience: [
    {
      position: "Associate Professor",
      institution: "Birla Institute of Technology Mesra",
      location: "Ranchi, India",
      duration: "August 2021 – present",
      description: "Department of Electronics and Communication Engineering",
      current: true,
      visible: true,
    },
    {
      position: "Assistant Professor",
      institution: "Birla Institute of Technology Mesra",
      location: "Ranchi, India",
      duration: "September 2011 – July 2021",
      description: "Department of Electronics and Communication Engineering",
      visible: true,
    },
    {
      position: "Guest Faculty",
      institution: "Indian Institute of Technology Bhubaneswar",
      location: "India",
      duration: "December 2010 – September 2011",
      description: "School of Electrical Sciences",
      visible: true,
    },
  ] satisfies Experience[],

  researchExperience: [
    {
      position: "Postdoctoral Research Fellow",
      institution: "Oklahoma State University",
      location: "USA",
      duration: "October 2012 – October 2014",
      visible: true,
    },
    {
      position: "Graduate Research Scholar",
      institution: "National Institute of Technology, Rourkela",
      location: "India",
      duration: "2007–2011",
      visible: true,
    },
    {
      position: "Visiting Graduate Research Scholar",
      institution: "University of Western Ontario",
      location: "Canada",
      duration: "October 2008 – March 2009",
      visible: true,
    },
  ] satisfies Experience[],

  supervision: [
    {
      scholar: "Pandit Vivek Kumar Pandey",
      thesis:
        "Multilingual Speech Signal Analysis for Parkinson’s Disease Detection",
      year: 2026,
      status: "awarded",
      visible: true,
    },
    {
      scholar: "Tuhin Mukherjee",
      thesis:
        "Investigation of RRM based Low Level laser Therapy for Obesity and Obesity-induced cardiac Ischemic Complications",
      year: 2026,
      status: "awarded",
      visible: true,
    },
    {
      scholar: "Satyajit Mahapatra",
      thesis:
        "Machine Learning and Signal Processing Techniques for Protein-Protein Interaction Prediction",
      year: 2022,
      status: "awarded",
      visible: true,
    },
    {
      scholar: "Biswajit Karan",
      thesis: "Analysis of Speech Signal for Parkinson's Disease Prediction",
      year: 2021,
      status: "awarded",
      visible: true,
    },
    {
      scholar: "Sweta Kumari",
      thesis:
        "Design and Implementation of Controller for Energy Harvesting Applications",
      year: 2020,
      status: "awarded",
      visible: true,
    },
    {
      scholar: "Rupesh Kumar Sinha",
      thesis: "Chaos based Symmetric Cryptography for Image Security",
      year: 2019,
      status: "awarded",
      visible: true,
    },
  ] satisfies Supervision[],

  awards: [
    {
      title: "Best paper award",
      organization:
        "IEEE International Symposium of Asian Control Association on Intelligent Robotics and Industrial Automation (IRIA), IIT Goa",
      date: "2021",
      featured: true,
      visible: true,
    },
    {
      title: "Jury Member, National-wide Edge AI Innovation Challenge",
      organization:
        "In collaboration with DigiToad Technologies Pvt. Ltd. and STMicroelectronics",
      date: "2024",
      featured: true,
      visible: true,
    },
    {
      title: "National Merit Scholarship",
      organization: "Government of India",
      date: "1995",
      visible: true,
    },
    {
      title: "State Merit Scholarship",
      organization: "Government of Odisha",
      date: "1993",
      visible: true,
    },
  ] satisfies Award[],

  fellowships: [
    {
      title: "Postdoctoral Fellowship",
      organization: "Oklahoma State University, USA",
      date: "2012–2014",
      visible: true,
    },
    {
      title: "DFAIT-GSEP scholarship",
      organization: "Government of Canada",
      date: "October 2008 – March 2009",
      visible: true,
    },
    {
      title: "USDA travel support",
      organization: "United States Department of Agriculture",
      date: "28–29 April 2014",
      description:
        "Travel support to attend a workshop on Engineered Crops at Des Moines, IA, USA.",
      visible: true,
    },
  ] satisfies Fellowship[],

  professionalActivities: [
    {
      activity:
        "Reviewer for journals of Nature, IEEE, Elsevier, Springer, Taylor & Francis, and BMC",
      visible: true,
    },
    {
      activity: "Keynote speaker",
      organization:
        "International Conference on Data Science and Applications, MNIT Jaipur",
      date: "July 2024",
      visible: true,
    },
    {
      activity: "Chaired a technical session",
      organization:
        "International Conference on Data Science and Applications, MNIT Jaipur",
      date: "July 2024",
      visible: true,
    },
    {
      activity: "Chaired a technical session",
      organization:
        "International Conference on Nano-electronics, Circuits and Communication Systems, Ranchi",
      date: "May 2015",
      visible: true,
    },
    {
      activity: "Chaired a technical session",
      organization:
        "MidSouth Computational Biology and Bioinformatics Society Conference (MCBIOS), Oklahoma, USA",
      date: "April 2014",
      visible: true,
    },
    {
      activity:
        "Member, Institute of Electrical and Electronics Engineers (IEEE)",
      organization: "IEEE, USA",
      description: "Membership No. 90793764",
      visible: true,
    },
    {
      activity: "Member, International Association of Engineers (IAENG)",
      organization: "IAENG, Hong Kong",
      description: "Membership No. 289706",
      visible: true,
    },
  ] satisfies ProfessionalActivity[],

  workshops: [
    {
      title: "Recent Trends in Speech and Audio Processing",
      date: "16–20 March 2026",
      location: "BIT Mesra",
      visible: true,
    },
    {
      title: "Internet of Things (IoT)",
      date: "25–26 April 2023",
      visible: true,
    },
    {
      title: "Embedded AI Design",
      date: "20–24 February 2023",
      visible: true,
    },
    {
      title: "Machine Learning in Speech and Audio Processing",
      date: "21–25 February 2022",
      location: "BIT Mesra",
      visible: true,
    },
    {
      title: "Artificial Intelligence",
      date: "25–29 January 2021",
      location: "BIT Mesra",
      sponsor: "ATAL-AICTE",
      visible: true,
    },
    {
      title: "Artificial Intelligence and Machine learning in Healthcare",
      date: "27–31 July 2020",
      location: "BIT Mesra",
      sponsor: "TEQIP-III",
      visible: true,
    },
  ] satisfies Workshop[],

  profiles: [
    {
      label: "ORCID",
      url: "https://orcid.org/0000-0003-1236-2255",
      type: "academic",
      identifier: "0000-0003-1236-2255",
      visible: true,
      verified: true,
    },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=F1VwnUIAAAAJ",
      type: "academic",
      identifier: "F1VwnUIAAAAJ",
      visible: true,
      verified: true,
    },
    {
      label: "Scopus",
      url: "https://www.scopus.com/authid/detail.uri?authorId=26639680300",
      type: "academic",
      identifier: "26639680300",
      visible: true,
      verified: true,
    },
    {
      label: "ResearcherID",
      url: "https://www.webofscience.com/wos/author/rid/L-9820-2017",
      type: "academic",
      identifier: "L-9820-2017",
      visible: true,
      verified: true,
    },
    {
      label: "Vidwan / IRINS",
      url: "https://vidwan.inflibnet.ac.in/profile/413438",
      type: "institutional",
      identifier: "413438",
      visible: true,
      verified: true,
    },
    {
      label: "BIT Mesra faculty profile",
      url: "https://bitmesra.ac.in/Show_profile/2F52324A6C2B483833534677726D3152366D365941673D3D",
      type: "institutional",
      visible: true,
      verified: true,
    },
  ] satisfies ProfileLink[],

  homepage: {
    heroHeading: "Dr. Sitanshu Sekhar Sahu",
    heroSubheading: "Associate Professor",
    introduction:
      "His research spans bio-signal processing, image processing, artificial intelligence and machine learning, embedded AI, bioinformatics, and computer vision, with particular work in speech-based analysis, biomedical signal processing, and computational biology.",
    ctas: [
      { label: "Research", href: "/research", visible: true },
      { label: "Publications", href: "/publications", visible: true },
    ],
    sections: [
      { id: "identity", heading: "Introduction", enabled: true },
      { id: "interests", heading: "Research interests", enabled: true },
      { id: "research", heading: "Research", enabled: true },
      { id: "publications", heading: "Recent publications", enabled: true },
      { id: "projects", heading: "Research projects", enabled: true },
      { id: "patents", heading: "Patents", enabled: true },
      { id: "experience", heading: "Academic journey", enabled: true },
      { id: "supervision", heading: "Supervision", enabled: true },
      { id: "achievements", heading: "Selected activities", enabled: true },
      { id: "workshops", heading: "Workshops", enabled: true },
      { id: "contact", heading: "Contact", enabled: true },
    ] satisfies HomepageSection[],
  },

  contact: {
    heading: "Contact",
    intro:
      "Correspondence is welcomed on research, supervision, and academic collaboration.",
    mapUrl:
      "https://www.openstreetmap.org/search?query=Birla%20Institute%20of%20Technology%20Mesra",
  },

  resume: {
    heading: "Curriculum vitae",
    intro: "A PDF copy of the curriculum vitae is available for download.",
    file: "/cv/CV_Sitanshu_Sekhar_Sahu.pdf",
    downloadLabel: "Download CV (PDF)",
  },

  footer: {
    tagline:
      "Associate Professor, Department of Electronics and Communication Engineering, Birla Institute of Technology Mesra",
    copyrightName: "Dr. Sitanshu Sekhar Sahu",
    useCurrentYear: true,
    links: [
      { label: "Research", href: "/research", visible: true },
      { label: "Publications", href: "/publications", visible: true },
      { label: "Projects", href: "/projects", visible: true },
      { label: "Patents", href: "/patents", visible: true },
      { label: "Contact", href: "/contact", visible: true },
    ] satisfies NavItem[],
  },

  seo: {
    siteUrl: "https://drsssahu.abhinav-kumar-1264.workers.dev/",
    siteTitle: "Dr. Sitanshu Sekhar Sahu",
    siteDescription:
      "Academic website of Dr. Sitanshu Sekhar Sahu, Associate Professor in the Department of Electronics and Communication Engineering at Birla Institute of Technology Mesra, Ranchi.",
    defaultOgImage: "/images/og.png",
    locale: "en_IN",
    pages: {
      home: {
        title: "Dr. Sitanshu Sekhar Sahu | Associate Professor, BIT Mesra",
        description:
          "Associate Professor in Electronics and Communication Engineering at BIT Mesra. Research in bio-signal processing, image processing, AI and machine learning, embedded AI, bioinformatics, and computer vision.",
      },
      about: {
        title: "About | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Academic profile of Dr. Sitanshu Sekhar Sahu, Associate Professor in the Department of Electronics and Communication Engineering, BIT Mesra.",
      },
      research: {
        title: "Research | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Research interests and themes of Dr. Sitanshu Sekhar Sahu, including bio-signal processing, bioinformatics, computer vision, and embedded AI.",
      },
      publications: {
        title: "Publications | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Complete publication record of Dr. Sitanshu Sekhar Sahu: journal articles, conference proceedings, and book chapters.",
      },
      journals: {
        title: "Journal publications | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "International journal publications of Dr. Sitanshu Sekhar Sahu.",
      },
      conferences: {
        title: "Conference publications | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "International conference proceedings of Dr. Sitanshu Sekhar Sahu.",
      },
      books: {
        title: "Book chapters | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description: "Book chapters by Dr. Sitanshu Sekhar Sahu.",
      },
      patents: {
        title: "Patents | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Patents and intellectual property associated with Dr. Sitanshu Sekhar Sahu.",
      },
      projects: {
        title: "Projects | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Funded research projects led by Dr. Sitanshu Sekhar Sahu.",
      },
      supervision: {
        title: "PhD supervision | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Awarded doctoral scholars supervised by Dr. Sitanshu Sekhar Sahu.",
      },
      experience: {
        title: "Experience | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Academic and research appointments of Dr. Sitanshu Sekhar Sahu.",
      },
      education: {
        title: "Education | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Doctoral and undergraduate education of Dr. Sitanshu Sekhar Sahu.",
      },
      activities: {
        title: "Activities | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Professional activities, awards, fellowships, and workshops.",
      },
      contact: {
        title: "Contact | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description:
          "Contact details for Dr. Sitanshu Sekhar Sahu at BIT Mesra.",
      },
      resume: {
        title: "Curriculum vitae | Dr. Sitanshu Sekhar Sahu | BIT Mesra",
        description: "Curriculum vitae of Dr. Sitanshu Sekhar Sahu.",
      },
    } satisfies Record<string, PageSeo>,
  },

  settings: {
    publicationPageSize: 0,
    defaultPublicationSort: "year-desc",
    showPhoneOnHomepage: false,
    authorHighlight: true,
  },

  ui: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    skipToContent: "Skip to content",
    searchPublications: "Search publications",
    filterYear: "Year",
    filterType: "Type",
    allYears: "All years",
    allTypes: "All types",
    typeJournal: "Journal",
    typeConference: "Conference",
    typeBook: "Book chapter",
    noResults: "No publications match the current filters.",
    viewAll: "View all",
    doi: "DOI",
    publisher: "Publisher",
    externalLink: "External link",
    download: "Download",
    email: "Email",
    homeLabel: "Home",
    relatedPublications: "Related publications",
    bibliographicDetails: "Bibliographic details",
    citation: "Citation",
  },
} as const;
