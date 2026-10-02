export const personalInfo = {
  name: "Arthi R",
  role: "AI & Machine Learning Student / Aspiring AI/ML Engineer",
  title: "Aspiring AI/ML Engineer & Data Science Specialist",
  subTitle: "Specializing in Computer Vision, Natural Language Processing, Deep Learning & Healthcare AI",
  location: "Coimbatore, Tamil Nadu, India",
  email: "arthiramesh17507@gmail.com",
  phone: "+91 7550063086",
  linkedin: "https://linkedin.com/in/arthi1757",
  github: "https://github.com/arthi1217",
  bio: "Passionate AI & Machine Learning student pursuing B.Sc. in AI & ML with a strong academic aggregate of 85%. Hands-on experience across 4 internships, building production-ready NLP pipelines, time-series forecasting models, computer vision systems, and medical AI dashboards. Proven leadership as an AIML Engineer Intern & Team Leader at IndiWebPros, recognized as Top Performer. Driven by solving real-world challenges through data-driven AI solutions.",
  profileImage: "/assets/certificates/ARTHI_photo.png",
  avatarImage: "/avatar.jpg",
  resumePdf: "/assets/Arthi_R_Resume.pdf",
  stats: [
    { label: "Academic Aggregate", value: "85%", suffix: "Score", desc: "Up to Semester IV (B.Sc AI & ML)" },
    { label: "Industry Internships", value: "4", suffix: "Roles", desc: "Including Team Leader at IndiWebPros" },
    { label: "Certifications", value: "24", suffix: "Verified", desc: "IBM, Infosys, Kaggle, NPTEL" },
    { label: "AI/ML Projects", value: "20", suffix: "Repos", desc: "Featured AI platforms & models" },
    { label: "GitHub Repositories", value: "20+", suffix: "Projects", desc: "Open-source codebase" }
  ]
};

export const education = [
  {
    id: "bsc-aiml",
    degree: "Bachelor of Science (B.Sc.) in Artificial Intelligence and Machine Learning",
    institution: "Dr. N.G.P. Arts and Science College",
    location: "Coimbatore, Tamil Nadu",
    duration: "2024 – Present",
    score: "85% Aggregate (Up to Semester IV)",
    status: "Pursuing",
    badge: "Undergraduate Degree",
    description: "Specialized coursework in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Data Structures, Python, SQL, and Artificial Intelligence Algorithms.",
    highlights: [
      "Secured 85% aggregate academic performance through Semester IV.",
      "Active participant in technical symposiums and college level paper presentation contests (2nd Prize Winner).",
      "Selected as Team Leader for industrial AI internship projects."
    ]
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC II & HSC I)",
    institution: "Mani Higher Secondary School",
    location: "Coimbatore, Tamil Nadu",
    duration: "Completed",
    score: "71.5% (Class XII) & 72% (Class XI)",
    status: "Completed",
    badge: "Higher Secondary",
    description: "Core science and mathematics curriculum with focus on computer science, physics, chemistry, and higher mathematics.",
    highlights: [
      "Demonstrated consistent performance across higher secondary board examinations.",
      "Developed foundational knowledge in Mathematics, Logic, and Programming fundamentals."
    ]
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Mani Higher Secondary School",
    location: "Coimbatore, Tamil Nadu",
    duration: "Completed",
    score: "77.2% (Class X)",
    status: "Completed",
    badge: "Secondary School",
    description: "General secondary education covering Mathematics, Science, English, and Social Sciences.",
    highlights: [
      "Achieved 77.2% overall score in SSLC State Board Examinations."
    ]
  }
];

export const skillsCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core programming languages for software and AI development",
    skills: [
      { name: "Python", tag: "Primary / AI/ML", icon: "Terminal", note: "Scikit-Learn, Pandas, NumPy, OpenCV, SpaCy" },
      { name: "SQL", tag: "Databases", icon: "Database", note: "MySQL, Relational Queries, Schema Design" },
      { name: "C Language", tag: "Core Concepts", icon: "Cpu", note: "Data Structures, Memory, Logic" },
      { name: "C++", tag: "Object-Oriented", icon: "Layers", note: "OOP, Algorithms, Optimization" },
      { name: "Java", tag: "Software Dev", icon: "FileCode", note: "Core Java, OOP Principles" },
      { name: "R Language", tag: "Data Analytics", icon: "BarChart3", note: "Statistical Computing & Visualization" }
    ]
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "Core ML algorithms, deep learning architectures, CV and NLP frameworks",
    skills: [
      { name: "Machine Learning & Deep Learning", tag: "Core AI", icon: "Brain", note: "Supervised, Unsupervised, CNNs, Model Evaluation" },
      { name: "Natural Language Processing (NLP)", tag: "Text Analytics", icon: "MessageSquareCode", note: "SpaCy, TF-IDF, Entity Extraction, Classification" },
      { name: "Computer Vision & OpenCV", tag: "Vision AI", icon: "Eye", note: "Contour Detection, Image Preprocessing, IoU Segmentation" },
      { name: "Scikit-Learn & ML Pipelines", tag: "Framework", icon: "Boxes", note: "Regression, Classification, Clustering, Model Tuning" },
      { name: "ARIMA Time Series Forecasting", tag: "Predictive Analytics", icon: "TrendingUp", note: "Trend Analysis, Business Forecasting" },
      { name: "Document AI & Entity Extraction", tag: "Automation", icon: "FileSearch", note: "Unstructured Data Structuring & OCR Workflows" }
    ]
  },
  {
    id: "datascience",
    title: "Data Science & Libraries",
    icon: "LineChart",
    description: "Data wrangling, statistical analysis, and visual dash-boarding",
    skills: [
      { name: "NumPy & Numerical Computing", tag: "Math Data", icon: "Calculator", note: "Vectorized Operations & Matrix Computation" },
      { name: "Pandas Data Wrangling", tag: "Data Processing", icon: "Table", note: "Data Cleaning, Transformation & Analytics" },
      { name: "Matplotlib & Seaborn", tag: "Visualization", icon: "PieChart", note: "Exploratory Data Analysis & Charting" },
      { name: "Data Visualization & Dashboards", tag: "BI Analytics", icon: "LayoutDashboard", note: "Interactive Metrics & Executive Reports" }
    ]
  },
  {
    id: "development",
    title: "Web & Tools",
    icon: "Globe",
    description: "Frontend technologies, web frameworks, and version control",
    skills: [
      { name: "HTML5 & CSS3", tag: "Frontend UI", icon: "Layout", note: "Responsive Design, Flexbox, CSS Grid" },
      { name: "React.js", tag: "Frontend Library", icon: "Component", note: "Hooks, Component Architecture, State Management" },
      { name: "Node.js & Express Basics", tag: "Backend Basics", icon: "Server", note: "API Integration & Server Setup" },
      { name: "MySQL & Relational DBs", tag: "Database", icon: "Database", note: "Tables, Joins, Indexing & Queries" },
      { name: "Git & GitHub", tag: "Version Control", icon: "GitBranch", note: "Repository Management & Collaboration" }
    ]
  },
  {
    id: "softskills",
    title: "Professional Competencies",
    icon: "Sparkles",
    description: "Leadership, communication, and strategic problem-solving capabilities",
    skills: [
      { name: "Problem Solving", tag: "Analytical", icon: "Lightbulb", note: "Root-cause analysis and mathematical reasoning" },
      { name: "Team Leadership", tag: "Management", icon: "Users", note: "Directed AI engineering intern squad at IndiWebPros" },
      { name: "Analytical Thinking", tag: "Strategy", icon: "Target", note: "Data-driven decision making and model optimization" },
      { name: "Communication & Pitching", tag: "Soft Skill", icon: "MessageCircle", note: "Technical presentation and documentation" },
      { name: "Adaptability & Learning", tag: "Growth", icon: "Compass", note: "Rapid adoption of emerging AI frameworks" }
    ]
  }
];

export const allProjects = [
  // 6 Featured Projects
  {
    id: "enterprise-ai",
    title: "Enterprise AI Platform",
    category: "AI Platform",
    categoryKey: "ai-platform",
    isFeatured: true,
    github: "https://github.com/arthi1217/Enterprise_AI_Platform",
    liveDemo: null,
    summary: "Integrated SpaCy NLP, ARIMA forecasting, and customer analytics into a unified business intelligence suite.",
    problemSolved: "Businesses struggle to integrate unstructured customer feedback with time-series sales forecasting for actionable decisions.",
    description: "Engineered an enterprise-grade AI analytics suite utilizing SpaCy NLP pipelines for entity extraction and ARIMA time-series algorithms for revenue forecasting, packaged into a real-time executive BI platform.",
    keyFeatures: [
      "Natural Language Processing pipeline using SpaCy for automated entity recognition.",
      "ARIMA time-series forecasting model predicting revenue trends and inventory metrics.",
      "Multi-tenant customer sentiment analysis dashboard.",
      "Automated PDF executive report generation module."
    ],
    tools: ["Python", "SpaCy", "Scikit-Learn", "ARIMA", "Pandas", "React"]
  },
  {
    id: "medintel",
    title: "MedIntel: Healthcare AI Analytics",
    category: "Healthcare AI",
    categoryKey: "healthcare",
    isFeatured: true,
    github: "https://github.com/arthi1217/MedIntel",
    liveDemo: null,
    summary: "AI-powered hospital clinical decision support system for predictive patient outcome modeling.",
    problemSolved: "Clinical teams lack real-time predictive decision support systems to forecast patient admission metrics and optimize ICU resource allocations.",
    description: "Built a hospital analytics and clinical decision platform utilizing supervised machine learning models to analyze patient diagnostic indicators, admission patterns, and predictive healthcare metrics.",
    keyFeatures: [
      "Patient outcome prediction using tuned Random Forest and Logistic Regression classifiers.",
      "Clinical workflow data processing with automated missing value imputation.",
      "Interactive healthcare analytics visual dashboard.",
      "HIPAA-conscious data structure design for patient metrics."
    ],
    tools: ["Python", "Machine Learning", "Pandas", "NumPy", "OpenCV", "Scikit-Learn"]
  },
  {
    id: "doc-intel",
    title: "Document Intelligence System",
    category: "NLP & Document AI",
    categoryKey: "nlp",
    isFeatured: true,
    github: "https://github.com/arthi1217/Document-Intelligence-System",
    liveDemo: null,
    summary: "Automated document processing system extracting unstructured text entities and structuring data streams.",
    problemSolved: "Manual data extraction from scanned documents and plain text files is slow, error-prone, and non-scalable.",
    description: "Engineered an end-to-end Document AI workflow utilizing NLP text classification and regex-assisted entity extraction models to convert unstructured document repositories into clean structured databases.",
    keyFeatures: [
      "Automated document text classification using TF-IDF and Naive Bayes.",
      "Key entity extraction (names, dates, reference numbers) with SpaCy NLP.",
      "Automated text preprocessing pipeline handling noise reduction.",
      "CSV & JSON structured export formats."
    ],
    tools: ["Python", "NLP", "SpaCy", "TF-IDF", "Pandas", "Scikit-Learn"]
  },
  {
    id: "image-segmentation",
    title: "Image Segmentation IoU Pipeline",
    category: "Computer Vision",
    categoryKey: "vision",
    isFeatured: true,
    github: "https://github.com/arthi1217/Image-Segmentation-IoU",
    liveDemo: null,
    summary: "Computer vision evaluation framework calculating Intersection over Union (IoU) metrics for spatial segmentation.",
    problemSolved: "Measuring object boundary accuracy in vision models requires precise pixel-level mask overlap evaluation metrics.",
    description: "Developed a computer vision framework using OpenCV and NumPy to evaluate spatial image segmentation performance by computing exact pixel-level Intersection over Union (IoU) scores across annotated ground-truth masks.",
    keyFeatures: [
      "Pixel-level mask matrix calculations with NumPy array operations.",
      "Bounding box and polygon overlap evaluation.",
      "Visual spatial mask overlay generation using OpenCV.",
      "Precision-Recall and IoU threshold benchmark logging."
    ],
    tools: ["Python", "OpenCV", "NumPy", "Image Processing", "Matplotlib"]
  },
  {
    id: "opencv-detection",
    title: "OpenCV Real-Time Object Detection",
    category: "Computer Vision",
    categoryKey: "vision",
    isFeatured: true,
    github: "https://github.com/arthi1217/OpenCV-Object-Detection",
    liveDemo: null,
    summary: "High-frame-rate spatial object detection and tracking pipeline utilizing OpenCV edge analysis.",
    problemSolved: "Real-time edge devices need lightweight, non-deep-learning object tracking pipelines for low-latency visual inspection.",
    description: "Implemented a real-time object detection and tracking system using OpenCV, contour filtering, and color-space thresholding to track target objects across continuous video streams.",
    keyFeatures: [
      "Real-time video stream capture and frame-by-frame processing.",
      "Contour detection, hierarchy filtering, and bounding box drawing.",
      "Color-space transformations (HSV / LAB) for ambient light invariance.",
      "FPS performance tracking and spatial coordinates output."
    ],
    tools: ["Python", "OpenCV", "NumPy", "Computer Vision"]
  },
  {
    id: "image-preprocessing",
    title: "Image Pre-Processing Suite",
    category: "Computer Vision",
    categoryKey: "vision",
    isFeatured: true,
    github: "https://github.com/rathimuskan28-sketch/image-pre-processing-project",
    liveDemo: null,
    summary: "Automated computer vision transformations suite for noise reduction, thresholding, and matrix enhancement.",
    problemSolved: "Raw visual input files often contain noise, uneven illumination, and artifacts that degrade downstream ML accuracy.",
    description: "Built a comprehensive image transformation and filtering library providing Gaussian smoothing, adaptive Otsu thresholding, histogram equalization, and edge enhancement to prepare image datasets for neural network ingestion.",
    keyFeatures: [
      "Adaptive thresholding & morphological transformations.",
      "Gaussian, Median, and Bilateral noise filtering.",
      "Histogram equalization for contrast enhancement.",
      "Batch dataset preprocessing pipeline."
    ],
    tools: ["Python", "OpenCV", "NumPy", "Image Processing"]
  },

  // 8 ML Projects
  {
    id: "spam-detection",
    title: "Spam Email Classification Engine",
    category: "Machine Learning & NLP",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Automated text classifier filtering spam messages using TF-IDF vectorization and Multinomial Naive Bayes.",
    problemSolved: "Unfiltered communications contain phishing and spam messages requiring fast automated filtering.",
    description: "Built an NLP classification pipeline that ingests raw email text, applies stopword removal and stemming, converts text to TF-IDF feature matrices, and classifies messages with high accuracy using Naive Bayes.",
    keyFeatures: [
      "Text normalization, tokenization, and stemming.",
      "TF-IDF n-gram feature extraction.",
      "Multinomial Naive Bayes model training.",
      "Confusion matrix and ROC-AUC curve evaluation."
    ],
    tools: ["Python", "Scikit-Learn", "TF-IDF", "Naive Bayes", "NLTK"]
  },
  {
    id: "movie-genre",
    title: "Movie Genre Classification from Plots",
    category: "Machine Learning & NLP",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Multi-label NLP model predicting film genres based on textual plot summaries.",
    problemSolved: "Categorizing massive video catalog plot synopses manually is inefficient.",
    description: "Developed a multi-class NLP model predicting movie genres from textual plot summaries using TF-IDF feature extraction and Logistic Regression classifiers.",
    keyFeatures: [
      "Multi-label classification architecture.",
      "Text plot synopsis feature engineering.",
      "Model evaluation using Micro & Macro F1-scores.",
      "Interactive text inference script."
    ],
    tools: ["Python", "Pandas", "Scikit-Learn", "TF-IDF", "Logistic Regression"]
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction Model",
    category: "Machine Learning",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Predictive classifier identifying customer attrition risks using SMOTE and Random Forest algorithms.",
    problemSolved: "Subscription businesses lose revenue due to undetected customer cancellation indicators.",
    description: "Engineered a predictive churn model analyzing customer usage frequency, payment history, and support tickets. Addressed class imbalance using SMOTE oversampling before training Random Forest and XGBoost classifiers.",
    keyFeatures: [
      "SMOTE synthetic oversampling for imbalanced data.",
      "Feature importance ranking identifying key churn drivers.",
      "Random Forest & XGBoost hyperparameter tuning.",
      "ROC-AUC evaluation achieving strong recall metrics."
    ],
    tools: ["Python", "Scikit-Learn", "Random Forest", "SMOTE", "Pandas"]
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Anomaly Detection",
    category: "Machine Learning",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Financial anomaly detection engine spotting unauthorized credit card transactions.",
    problemSolved: "Fraudulent transactions make up less than 0.2% of total volume, making conventional classifiers prone to false negatives.",
    description: "Built a financial fraud detection model using Isolation Forest and Random Forest classifiers on PCA-transformed transaction features, optimizing precision-recall tradeoffs for highly skewed data.",
    keyFeatures: [
      "Anomaly detection with Isolation Forest & Random Forest.",
      "Precision-Recall AUC optimization for severe imbalance.",
      "Feature scaling and robust outlier detection.",
      "Real-time transaction scoring simulator."
    ],
    tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: "house-price",
    title: "Multi-Variate House Price Estimator",
    category: "Machine Learning",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Regression model estimating residential property market values from structural features.",
    problemSolved: "Real estate valuations require accurate non-linear regression models evaluating location and structural variables.",
    description: "Created a multi-variate regression pipeline utilizing Gradient Boosting and Ridge Regression to estimate house prices based on square footage, location coordinates, age, and room counts.",
    keyFeatures: [
      "Feature engineering including log transformations.",
      "Cross-validated Gradient Boosting & Ridge Regression.",
      "Root Mean Squared Error (RMSE) benchmark tracking.",
      "Interactive price estimation interface."
    ],
    tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Seaborn"]
  },
  {
    id: "customer-segmentation",
    title: "Customer Persona Clustering (K-Means)",
    category: "Unsupervised Learning",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Unsupervised clustering model grouping customer personas based on spending behavior metrics.",
    problemSolved: "Marketing teams need data-driven customer segmentation without pre-labeled historical target columns.",
    description: "Implemented an unsupervised K-Means clustering model paired with Principal Component Analysis (PCA) to segment customer bases into actionable purchasing personas.",
    keyFeatures: [
      "Elbow Method & Silhouette Coefficient cluster analysis.",
      "2D PCA dimensionality reduction for visual scatter plots.",
      "Persona profiling based on cluster centroid metrics.",
      "Marketing campaign recommendation mapping."
    ],
    tools: ["Python", "K-Means", "Scikit-Learn", "PCA", "Matplotlib"]
  },
  {
    id: "cats-vs-dogs",
    title: "Cats vs Dogs CNN Image Classifier",
    category: "Deep Learning & Vision",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Convolutional Neural Network classifying animal images with data augmentation.",
    problemSolved: "Visual object recognition requires deep convolutional feature extractors robust to orientation and scale.",
    description: "Trained a multi-layer Convolutional Neural Network (CNN) incorporating Max Pooling, Dropout regularization, and real-time image augmentation to classify canine vs feline image samples.",
    keyFeatures: [
      "Custom CNN architecture with Conv2D and MaxPooling layers.",
      "Data augmentation (rotation, zoom, horizontal flip).",
      "Dropout layers preventing overfitting.",
      "Training loss & validation accuracy history plots."
    ],
    tools: ["Python", "CNN", "OpenCV", "Scikit-Learn", "NumPy"]
  },
  {
    id: "food-calorie",
    title: "Visual Food Calorie Estimator",
    category: "Vision & Analytics",
    categoryKey: "ml",
    isFeatured: false,
    github: null,
    liveDemo: null,
    summary: "Computer vision and regression model estimating caloric content from meal photo inputs.",
    problemSolved: "Dietary tracking apps require automated image-based portion estimation and caloric calculation.",
    description: "Combined OpenCV image segmentation to isolate meal items with regression models mapped against nutritional databases to estimate meal calorie totals from photos.",
    keyFeatures: [
      "Meal area segmentation using OpenCV color masks.",
      "Portion volume approximation algorithms.",
      "Caloric density lookup matrix mapping.",
      "Visual nutritional breakdown summary."
    ],
    tools: ["Python", "OpenCV", "NumPy", "Scikit-Learn", "Pandas"]
  },

  // 6 Web & Applications
  {
    id: "amazon-clone",
    title: "Amazon E-Commerce Storefront Clone",
    category: "Web Application",
    categoryKey: "web",
    isFeatured: false,
    github: "https://github.com/arthi1217/Amazon-clone-project",
    liveDemo: null,
    summary: "Responsive web application replicating Amazon's e-commerce storefront UI, product grid, and shopping cart.",
    problemSolved: "Demonstrating mastery of complex responsive UI layouts and component state management.",
    description: "Built a fully responsive Amazon storefront replica featuring dynamic product catalog rendering, cart state updates, checkout calculation, and navigation layouts.",
    keyFeatures: ["Dynamic shopping cart state management", "Product filtering and search bar UI", "Responsive CSS Grid & Flexbox layouts", "Checkout summary calculation"],
    tools: ["HTML5", "CSS3", "JavaScript", "React UI"]
  },
  {
    id: "netflix-clone",
    title: "Netflix Web Streaming Interface",
    category: "Web Application",
    categoryKey: "web",
    isFeatured: false,
    github: "https://github.com/arthi1217/netflix-clone",
    liveDemo: null,
    summary: "Interactive video streaming interface featuring movie banner carousels and genre categories.",
    problemSolved: "Crafting fluid media carousels and dark mode video streaming dashboard interfaces.",
    description: "Developed a Netflix interface clone with horizontal media sliders, hero movie trailer preview banner, category rows, and responsive media queries.",
    keyFeatures: ["Hero video backdrop preview", "Horizontal scroll movie carousels", "Hover preview overlay cards", "Dark glassmorphism UI theme"],
    tools: ["React", "CSS3", "JavaScript", "REST APIs"]
  },
  {
    id: "products-page",
    title: "Interactive Products UI Gallery",
    category: "Frontend UI",
    categoryKey: "web",
    isFeatured: false,
    github: "https://github.com/arthi1217/Products-Page",
    liveDemo: null,
    summary: "Dynamic product showcase interface with instant category filtering and search sorting.",
    problemSolved: "Building reusable frontend product component cards with client-side state filtering.",
    description: "Created a product catalogue web component with real-time category filtering, price range sliders, and instant search feedback.",
    keyFeatures: ["Real-time text search filtering", "Category dropdown selectors", "Responsive card layout grid", "Clean micro-animations"],
    tools: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: "react-tasks",
    title: "React Task & Project Manager",
    category: "React App",
    categoryKey: "web",
    isFeatured: false,
    github: "https://github.com/arthi1217/react-tasks",
    liveDemo: null,
    summary: "Task management web application built with React state hooks and persistent storage.",
    problemSolved: "Efficient task management workflow tracker with state persistence.",
    description: "Designed a task management web app supporting task creation, status updates, priority tags, and state persistence using React hooks.",
    keyFeatures: ["Task creation, edit, and deletion", "Status filter tabs (Pending / Completed)", "LocalStorage state persistence", "Responsive card interface"],
    tools: ["React", "JavaScript", "CSS3", "LocalStorage"]
  },
  {
    id: "react-todos",
    title: "React State Todo Application",
    category: "React App",
    categoryKey: "web",
    isFeatured: false,
    github: "https://github.com/arthi1217/react-using-todos",
    liveDemo: null,
    summary: "Clean state management application demonstrating CRUD operations and filter states.",
    problemSolved: "Clean component state handling and interactive todo tracking.",
    description: "Interactive React todo application demonstrating component state management, array operations, and completion toggles.",
    keyFeatures: ["Add, toggle, and delete todo items", "Filtered list views", "Inline task edit state", "Lightweight clean styling"],
    tools: ["React", "JavaScript", "CSS Modules"]
  },
  {
    id: "resume-site",
    title: "Personal Responsive Web Resume",
    category: "Portfolio Website",
    categoryKey: "web",
    isFeatured: false,
    github: "https://github.com/arthi1217/resume-site",
    liveDemo: null,
    summary: "Single-page responsive web resume showcasing technical skills, education, and career experience.",
    problemSolved: "Creating an accessible, lightweight web version of a professional technical resume.",
    description: "A clean single-page web resume built to present academic credentials, internship roles, and skill summaries across mobile and desktop devices.",
    keyFeatures: ["Print-optimized CSS rules", "Downloadable PDF link integration", "Clean timeline layout", "Mobile responsive design"],
    tools: ["HTML5", "CSS3", "JavaScript"]
  }
];

// ONLY 4 Internships
export const experiences = [
  {
    id: "indiwebpros",
    role: "AIML Engineer Intern & Team Leader",
    company: "IndiWebPros",
    companyTag: "AI/ML Division",
    location: "Remote",
    period: "June 2026 – August 2026",
    status: "Completed",
    isLeadership: true,
    badges: ["Team Leader", "Top Performer (Weeks 1–4)", "Group Excellence Award"],
    skillsGained: ["Python", "NLP", "SpaCy", "ARIMA", "Computer Vision", "Business Intelligence", "Team Leadership"],
    summary: "Led an AI engineering intern squad to design and deploy Python machine learning models and healthcare analytics dashboards.",
    highlights: [
      "Selected as Team Leader directing an AI/ML engineering intern squad through multi-week model design sprints.",
      "Integrated SpaCy NLP text pipelines, ARIMA forecasting algorithms, and customer analytics into a unified business intelligence suite.",
      "Architected MedIntel: an AI-driven healthcare decision support platform for hospital patient outcome forecasting.",
      "Implemented real-time computer vision object tracking using OpenCV and NumPy.",
      "Awarded Top Performer (Weeks 1–4) and received the Group Excellence Award for outstanding technical execution."
    ]
  },
  {
    id: "kmch",
    role: "Information Technology Intern",
    company: "KMCH (Kovai Medical Center and Hospital)",
    companyTag: "Hospital IT & Systems",
    location: "Coimbatore, Tamil Nadu",
    period: "May 2026",
    status: "Completed",
    isLeadership: false,
    badges: ["Healthcare Systems", "Vision AI"],
    skillsGained: ["OpenCV", "NumPy", "Healthcare Analytics", "IT Infrastructure", "Hospital Workflows"],
    summary: "Implemented computer vision scripts and supported hospital digital infrastructure and healthcare data systems.",
    highlights: [
      "Implemented computer vision processing scripts using OpenCV and NumPy for object boundary tracking.",
      "Supported hospital IT infrastructure operations, administrative workflows, and digital healthcare data management.",
      "Gained firsthand experience with hospital information systems (HIS) and medical data handling."
    ]
  },
  {
    id: "codsoft",
    role: "Machine Learning Intern",
    company: "CodSoft",
    companyTag: "ML Division",
    location: "Remote",
    period: "March 2026 – April 2026",
    status: "Completed",
    isLeadership: false,
    badges: ["Document AI", "NLP Specialist"],
    skillsGained: ["Python", "NLP", "Document AI", "Scikit-Learn", "Pandas", "Text Extraction"],
    summary: "Developed an automated Document Intelligence System leveraging NLP and text classification models.",
    highlights: [
      "Engineered an automated Document Intelligence System utilizing Natural Language Processing (NLP) algorithms.",
      "Applied Python, Pandas, and Scikit-learn to automate text classification, entity extraction, and document preprocessing.",
      "Built feature extraction pipelines converting unstructured document files into structured CSV/JSON datasets."
    ]
  },
  {
    id: "prodigy",
    role: "Machine Learning Intern",
    company: "Prodigy InfoTech",
    companyTag: "AI Analytics",
    location: "Coimbatore, Tamil Nadu",
    period: "December 2025 – January 2026",
    status: "Completed",
    isLeadership: false,
    badges: ["Time-Series Forecasting", "Business Intelligence"],
    skillsGained: ["Python", "SpaCy", "ARIMA", "Scikit-Learn", "Pandas", "Predictive Modeling"],
    summary: "Built enterprise AI business intelligence models incorporating ARIMA forecasting and SpaCy NLP.",
    highlights: [
      "Developed an Enterprise AI Business Intelligence & Analytics platform using Python, Scikit-learn, SpaCy, and ARIMA.",
      "Implemented time-series forecasting algorithms predicting revenue trends and operational performance metrics.",
      "Engineered NLP text analytics modules extracting sentiment indicators from customer logs."
    ]
  }
];

// All 24 certificate files present in public/assets/certificates/
export const certificateFilesList = [
  {
    id: "cert-1",
    filename: "Artificial Intelligence.jpg",
    title: "Artificial Intelligence Certification",
    provider: "GUVI / SkillCourse",
    category: "AI & Deep Learning",
    categoryKey: "ai",
    date: "2025",
    pdf: null,
    description: "Comprehensive foundational certification in Artificial Intelligence concepts, search algorithms, and machine learning principles."
  },
  {
    id: "cert-2",
    filename: "Codesoft internship completion.jpg",
    title: "CodSoft ML Internship Completion",
    provider: "CodSoft",
    category: "Internships & Experience",
    categoryKey: "internship",
    date: "April 2026",
    pdf: "codsoft-internship.pdf",
    description: "Official internship completion certificate for developing Document AI and NLP text extraction pipelines."
  },
  {
    id: "cert-3",
    filename: "Computer vision 101.jpg",
    title: "Computer Vision 101",
    provider: "OpenCV & SkillUp",
    category: "Computer Vision & Robotics",
    categoryKey: "vision",
    date: "2025",
    pdf: null,
    description: "Hands-on certification in Computer Vision fundamentals, image matrix transformations, and contour analysis."
  },
  {
    id: "cert-4",
    filename: "Curtain universiy workshop.jpg",
    title: "Curtin University International Workshop",
    provider: "Curtin University, Australia",
    category: "Industry & Workshops",
    categoryKey: "workshop",
    date: "2025",
    pdf: null,
    description: "Certificate of participation in Curtin University's international workshop on advanced tech innovations."
  },
  {
    id: "cert-5",
    filename: "Generative models for developers.jpg",
    title: "Generative Models for Developers",
    provider: "DeepLearning.AI / Infosys",
    category: "AI & Deep Learning",
    categoryKey: "ai",
    date: "2026",
    pdf: null,
    description: "Specialized course covering Generative AI architectures, diffusion models, and prompt engineering workflows."
  },
  {
    id: "cert-6",
    filename: "Guvi's Hcl participation.jpg",
    title: "GUVI & HCL AI Hackathon Participation",
    provider: "GUVI & HCL Technologies",
    category: "Industry & Workshops",
    categoryKey: "workshop",
    date: "2025",
    pdf: null,
    description: "Certificate of active participation in the joint GUVI and HCL AI hackathon and coding sprint."
  },
  {
    id: "cert-7",
    filename: "IBM's AI LIteracy.jpg",
    title: "IBM AI Literacy Certification",
    provider: "IBM SkillsBuild",
    category: "Data Science & ML",
    categoryKey: "datascience",
    date: "2025",
    pdf: "ibm-skillsbuild.pdf",
    description: "Verified IBM credential covering AI fundamentals, machine learning ethics, and cognitive computing concepts."
  },
  {
    id: "cert-8",
    filename: "IBM's Communcating the data story.jpg",
    title: "IBM Communicating the Data Story",
    provider: "IBM SkillsBuild",
    category: "Data Science & ML",
    categoryKey: "datascience",
    date: "2025",
    pdf: "ibm-skillsbuild.pdf",
    description: "Professional IBM credential in data storytelling, executive charting, and exploratory insight presentation."
  },
  {
    id: "cert-9",
    filename: "IBM's Data Fundamentals.jpg",
    title: "IBM Data Fundamentals",
    provider: "IBM SkillsBuild",
    category: "Data Science & ML",
    categoryKey: "datascience",
    date: "2025",
    pdf: "ibm-skillsbuild.pdf",
    description: "Foundational certification covering database structures, data processing pipelines, and SQL fundamentals."
  },
  {
    id: "cert-10",
    filename: "IBM's Importance of DV.jpg",
    title: "IBM Importance of Data Visualization",
    provider: "IBM SkillsBuild",
    category: "Data Science & ML",
    categoryKey: "datascience",
    date: "2025",
    pdf: "ibm-skillsbuild.pdf",
    description: "IBM professional certification in visual analytics, dashboard design, and effective quantitative communication."
  },
  {
    id: "cert-11",
    filename: "Infosys open ai gpt model.jpg",
    title: "Infosys OpenAI GPT Model Certification",
    provider: "Infosys Springboard",
    category: "AI & Deep Learning",
    categoryKey: "ai",
    date: "2026",
    pdf: "infosys-ai-first.pdf",
    description: "Specialized Infosys credential in transformer architectures, OpenAI GPT model fine-tuning, and prompt engineering."
  },
  {
    id: "cert-12",
    filename: "Intro Data science.jpg",
    title: "Introduction to Data Science",
    provider: "Simplilearn / Kaggle",
    category: "Data Science & ML",
    categoryKey: "datascience",
    date: "2025",
    pdf: null,
    description: "Core certification covering statistical inference, exploratory data analysis, Pandas, and Matplotlib."
  },
  {
    id: "cert-13",
    filename: "Intro NLP.jpg",
    title: "Introduction to Natural Language Processing",
    provider: "Great Learning",
    category: "AI & Deep Learning",
    categoryKey: "ai",
    date: "2025",
    pdf: null,
    description: "Hands-on certificate in NLP text preprocessing, TF-IDF vectorization, stemming, and sentiment analysis."
  },
  {
    id: "cert-14",
    filename: "Intro to deeplearning.jpg",
    title: "Introduction to Deep Learning",
    provider: "Kaggle / Infosys",
    category: "AI & Deep Learning",
    categoryKey: "ai",
    date: "2025",
    pdf: null,
    description: "Certification covering artificial neural networks (ANNs), activation functions, backpropagation, and loss optimizers."
  },
  {
    id: "cert-15",
    filename: "Introduction of Robotic Automation.jpg",
    title: "Introduction to Robotic Process Automation",
    provider: "Automation Anywhere",
    category: "Computer Vision & Robotics",
    categoryKey: "vision",
    date: "2025",
    pdf: null,
    description: "Certification in robotic process automation (RPA), workflow bot design, and automated software agents."
  },
  {
    id: "cert-16",
    filename: "Mangodb for beginners.jpg",
    title: "MongoDB for Beginners",
    provider: "MongoDB University",
    category: "Data Science & ML",
    categoryKey: "datascience",
    date: "2025",
    pdf: null,
    description: "Certificate covering NoSQL database fundamentals, BSON document indexing, and aggregation frameworks."
  },
  {
    id: "cert-17",
    filename: "Novitech_ fullstack.jpg",
    title: "Fullstack Web Development",
    provider: "Novitech R&D",
    category: "Programming & Web",
    categoryKey: "programming",
    date: "2025",
    pdf: null,
    description: "Hands-on training certificate in HTML5, CSS3, JavaScript, dynamic UI layouts, and web application architecture."
  },
  {
    id: "cert-18",
    filename: "Paper presenattion win 2 prize.jpg",
    title: "College Level Paper Presentation (2nd Prize Winner)",
    provider: "College Level Technical Symposium",
    category: "Achievements & Prizes",
    categoryKey: "achievements",
    date: "2025",
    pdf: null,
    description: "Awarded 2nd Prize in a college level paper presentation contest for research in Artificial Intelligence applications."
  },
  {
    id: "cert-19",
    filename: "Prodigy offer letter for internship.jpg",
    title: "Prodigy InfoTech Internship Offer Letter",
    provider: "Prodigy InfoTech",
    category: "Internships & Experience",
    categoryKey: "internship",
    date: "Dec 2025",
    pdf: "prodigy-internship.pdf",
    description: "Official internship offer letter for Machine Learning engineering internship position."
  },
  {
    id: "cert-20",
    filename: "Top and conssitent performer.jpg",
    title: "Top & Consistent Performer Award",
    provider: "IndiWebPros AI/ML Division",
    category: "Internships & Experience",
    categoryKey: "internship",
    date: "July 2026",
    pdf: null,
    description: "Special recognition certificate for consistent technical excellence and team leadership during IndiWebPros internship."
  },
  {
    id: "cert-21",
    filename: "Top perfomer.jpg",
    title: "Top Performer Award",
    provider: "IndiWebPros",
    category: "Internships & Experience",
    categoryKey: "internship",
    date: "August 2026",
    pdf: null,
    description: "Awarded Top Performer recognition across all AI engineering intern squads."
  },
  {
    id: "cert-22",
    filename: "Training certificate from ebox for c.jpg",
    title: "C Programming Training Certification",
    provider: "E-Box Academy",
    category: "Programming & Web",
    categoryKey: "programming",
    date: "2024",
    pdf: null,
    description: "Intensive training certificate in C programming language, algorithms, pointers, and memory management."
  },
  {
    id: "cert-23",
    filename: "attended srcw ai and robotics and its application.jpg",
    title: "SRCW AI & Robotics Applications Workshop",
    provider: "SRCW Coimbatore",
    category: "Computer Vision & Robotics",
    categoryKey: "vision",
    date: "2025",
    pdf: null,
    description: "Certificate of attendance for the workshop on AI, Robotics, and real-world vision applications."
  },
  {
    id: "cert-24",
    filename: "codsoft-offer letter.jpg",
    title: "CodSoft Internship Offer Letter",
    provider: "CodSoft",
    category: "Internships & Experience",
    categoryKey: "internship",
    date: "March 2026",
    pdf: "codsoft-internship.pdf",
    description: "Official offer letter for CodSoft Machine Learning Intern role."
  }
];

export const achievements = [
  {
    id: "ach-1",
    title: "AI/ML Intern Team Leader",
    organization: "The Hidden Layers – IndiWebPros",
    date: "June – August 2026",
    image: "/assets/certificates/Top and conssitent performer.jpg",
    description: "Appointed as Team Leader directing an AI/ML engineering intern squad. Successfully delivered business intelligence and healthcare AI platform modules."
  },
  {
    id: "ach-2",
    title: "Top Performer Award (Weeks 1–4)",
    organization: "IndiWebPros AI Division",
    date: "July 2026",
    image: "/assets/certificates/Top perfomer.jpg",
    description: "Awarded top performer recognition across the engineering cohort for technical consistency, code quality, and model optimization."
  },
  {
    id: "ach-3",
    title: "Group Excellence Award",
    organization: "IndiWebPros Internship Cohort",
    date: "August 2026",
    image: "/assets/certificates/Top and conssitent performer.jpg",
    description: "Received Group Excellence Award for outstanding team project delivery, architecture design, and healthcare analytics innovation."
  },
  {
    id: "ach-4",
    title: "College Level Paper Presentation — 2nd Prize",
    organization: "College Level Technical Symposium",
    date: "2025",
    image: "/assets/certificates/Paper presenattion win 2 prize.jpg",
    description: "Won 2nd Prize in a competitive college level paper presentation contest showcasing research on Artificial Intelligence and machine learning applications."
  }
];
