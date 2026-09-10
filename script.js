(function () {
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.certificates': 'Certificates',
      'nav.contact': 'Contact',
      'footer.copy': '© 2026 Rina Rismawati. All rights reserved.',
      'footer.views': 'Views',

      'home.eyebrow': 'Welcome to my portfolio',
      'home.title': 'Hi, I’m <span>Rina Rismawati</span>',
      'home.subtitle': 'Data Analyst & Machine Learning Enthusiast',
      'home.text': 'I analyze and transform data into meaningful insights, while building machine learning models to help solve real-world problems. I’m interested in data exploration, problem solving, and developing data-driven solutions.',
      'home.viewProjects': '▥ View Projects',
      'home.contactMe': '✉ Contact Me',
      'home.data.title': 'Data Analysis',
      'home.data.text': 'Exploring, cleaning, and analyzing data to uncover meaningful insights.',
      'home.ml.title': 'Machine Learning',
      'home.ml.text': 'Building and evaluating models to solve problems and make predictions.',
      'home.dashboard.title': 'Dashboard Projects',
      'home.dashboard.text': 'Designing dashboards that visualize data and support data-driven decisions.',

      'about.bannerTitle': 'About <span class="accent">Me</span>',
      'about.bannerText': 'Get to know more about me and my journey.',
      'about.role': 'Data Analyst & Machine Learning Enthusiast',
      'about.location': 'Garut, Indonesia',
      'about.open': '● Open to Opportunities',
      'about.hello': 'Hello! I’m <span class="accent">Rina Rismawati.</span>',
      'about.p1': 'I’m passionate about turning data into meaningful insights and building intelligent models that solve real-world problems. My interests lie in data analysis, machine learning, and creating solutions that drive positive impact.',
      'about.p2': 'I enjoy exploring data, uncovering patterns, and turning complex problems into simple, actionable insights. I’m always eager to learn new things and take on challenges that help me grow.',
      'about.education': 'Education',
      'about.educationText': 'Institut Teknologi Garut<br>Informatics Engineering<br>2022 – Present',
      'about.interests': 'Interests',
      'about.interest1': 'Data Analysis',
      'about.interest2': 'Machine Learning',
      'about.interest3': 'Data Visualization',
      'about.learned': 'What I’ve Learned',
      'about.learned1': 'Turning data into actionable insights',
      'about.learned2': 'Evaluating machine learning models',
      'about.learned3': 'Communicating results clearly',
      'about.loveTitle': 'Why I love data',
      'about.loveText': 'Data tells stories. I love the challenge of finding those stories and turning them into insights that help people make smarter decisions.',

      'skills.bannerTitle': 'Skills & <span class="accent">Tools</span>',
      'skills.bannerText': 'Technologies and tools I use to turn data into insights and build impactful solutions.',
      'skills.ai': 'AI / Machine Learning',
      'skills.data': 'Data & Notebook',
      'skills.dev': 'Development Tools',

      'projects.bannerTitle': '<span class="accent">Projects</span>',
      'projects.bannerText': 'Selected works in data analysis and machine learning.',
      'projects.all': 'All',
      'projects.data': 'Data Analysis',
      'projects.ml': 'Machine Learning',
      'projects.dashboard': 'Dashboard',
      'projects.bikeTitle': 'Bike Sharing Analysis',
      'projects.bikeText': 'Analyzed Bike Sharing rental patterns from 2011–2012 to identify yearly, monthly, hourly, and seasonal trends, then presented the findings in an interactive Streamlit dashboard.',
      'bike.title': 'Bike Sharing Analysis',
      'bike.subtitle': 'Data Analysis & Interactive Dashboard',
      'bike.overviewTitle': 'Project Overview',
      'bike.overviewText': 'This project analyzes Bike Sharing rental data from 2011 to 2012 to understand usage patterns across years, months, hours, and seasons. The analysis covers data wrangling, exploratory data analysis, visualization, and an interactive Streamlit dashboard.',
      'bike.questionsTitle': 'Business Questions',
      'bike.q1': 'How did bike rental performance change from 2011 to 2012?',
      'bike.q2': 'How did monthly rental performance vary during 2011–2012?',
      'bike.q3': 'How did bike rentals vary by hour during 2011–2012?',
      'bike.q4': 'Which season recorded the highest number of bike rentals?',
      'bike.workflowTitle': 'Analysis Workflow',
      'bike.workflowText': 'Data Gathering → Data Assessment → Data Cleaning → Exploratory Data Analysis → Visualization → Streamlit Dashboard',
      'bike.insightsTitle': 'Key Insights',
      'bike.insight1': 'Total rentals increased substantially from about 1.25 million in 2011 to around 2 million in 2012.',
      'bike.insight2': 'Rental activity generally increased toward the middle of the year, with strong demand around June to September.',
      'bike.insight3': 'Hourly usage peaked around 8 AM and 5 PM, indicating strong commuter-related usage patterns.',
      'bike.insight4': 'Fall recorded the highest total bike rentals among the four seasons.',
      'bike.visualsTitle': 'Analysis Results',
      'bike.yearlyCaption': 'Yearly bike rental performance',
      'bike.monthlyCaption': 'Monthly rental comparison between 2011 and 2012',
      'bike.hourlyCaption': 'Hourly bike rental patterns',
      'bike.seasonCaption': 'Bike rentals by season',
      'bike.toolsTitle': 'Tools Used',
      'bike.back': '← Back to Projects',
      'bike.github': 'View GitHub',
      'bike.demo': '↗ Live Dashboard',
      'projects.beverageTitle': 'Beverage Sales Dataset Clustering with K-Means',
      'projects.beverageText': 'Applied K-Means clustering to the Beverage Sales dataset to identify purchasing patterns using customer type, unit price, quantity, discount, and total transaction value, supported by PCA and Silhouette evaluation.',
      'beverage.back': '← Back to Projects',
      'beverage.title': 'Beverage Sales Dataset Clustering with K-Means',
      'beverage.subtitle': 'Machine Learning — Unsupervised Clustering',
      'beverage.github': 'View GitHub',
      'beverage.overviewTitle': 'Project Overview',
      'beverage.overviewText': 'This project applies unsupervised machine learning to the Beverage Sales dataset, containing 8,999,910 transaction rows and 11 original features. K-Means clustering is used to discover purchasing patterns from customer type, unit price, quantity, discount, and total transaction value.',
      'beverage.datasetTitle': 'Dataset & Features',
      'beverage.datasetText': 'The dataset contains beverage sales transactions with numerical and categorical variables. After preprocessing, the clustering model uses Customer_Type, Unit_Price, Quantity, Discount, and Total_Price.',
      'beverage.toolsTitle': 'Tools Used',
      'beverage.workflowTitle': 'Machine Learning Workflow',
      'beverage.workflowText': 'Dataset Loading → Exploratory Data Analysis → Feature Selection → Label Encoding → Standardization → K-Means Clustering → Elbow & Silhouette Evaluation → PCA → Cluster Interpretation',
      'beverage.evaluationTitle': 'Model Evaluation',
      'beverage.eval1': 'The clustering model was configured with 3 clusters using K-Means.',
      'beverage.eval2': 'The sampled Silhouette Score reached approximately 0.712 before PCA-based optimization.',
      'beverage.eval3': 'After PCA retained 95% of the variance, the sampled Silhouette Score reached 0.7239.',
      'beverage.insightsTitle': 'Cluster Characteristics',
      'beverage.insight1': 'Cluster 0 represents lower-value purchases with an average unit price of 4.47, average quantity of 7.99, and average total price of 35.17.',
      'beverage.insight2': 'Cluster 1 represents high-volume purchases with an average quantity of 49.65 and average total price of 135.18.',
      'beverage.insight3': 'Cluster 2 represents premium, high-value transactions with an average unit price of 72.70 and average total price of 2,425.09.',
      'beverage.visualsTitle': 'Model & Analysis Results',
      'beverage.distributionCaption': 'Distribution of numerical features in the Beverage Sales dataset',
      'beverage.correlationCaption': 'Correlation matrix of numerical features',
      'beverage.elbowCaption': 'Elbow Method for evaluating the number of clusters',
      'beverage.pcaCaption': 'Explained variance across PCA components',
      'beverage.clusterCaption': '2D PCA visualization of the three K-Means clusters',
      'projects.beverageClassTitle': 'Beverage Sales Cluster Classification with KNN & Random Forest',
      'projects.beverageClassText': 'Built supervised classification models to predict the cluster labels produced in the Beverage Sales clustering project, comparing K-Nearest Neighbors and Random Forest using accuracy, precision, recall, F1-score, and confusion matrices.',
      'beverageClass.back': '← Back to Projects',
      'beverageClass.title': 'Beverage Sales Cluster Classification with KNN & Random Forest',
      'beverageClass.subtitle': 'Machine Learning — Supervised Classification',
      'beverageClass.github': 'View GitHub',
      'beverageClass.overviewTitle': 'Project Overview',
      'beverageClass.overviewText': 'This project continues the Beverage Sales clustering work by using the generated cluster labels as the classification target. K-Nearest Neighbors and Random Forest are trained to learn the cluster assignment patterns from Customer_Type, Unit_Price, Quantity, Discount, and Total_Price.',
      'beverageClass.toolsTitle': 'Tools Used',
      'beverageClass.datasetTitle': 'Dataset & Target',
      'beverageClass.datasetText': 'The input dataset is hasil_clustering.csv, generated from the previous Beverage Sales K-Means project. After removing rows with missing cluster labels, 206,452 labeled records are used. The feature set contains five variables, while Cluster (0, 1, or 2) becomes the target label.',
      'beverageClass.workflowTitle': 'Machine Learning Workflow',
      'beverageClass.workflowText': 'Load Clustered Dataset → Separate Features & Target → Label Encoding → Mean Imputation → Standardization → 80/20 Train-Test Split → Train KNN & Random Forest → Evaluate Classification Performance',
      'beverageClass.evaluationTitle': 'Model Evaluation',
      'beverageClass.eval1': 'KNN achieved 99.983% accuracy with weighted precision, recall, and F1-score all around 99.983%.',
      'beverageClass.eval2': 'Random Forest achieved 99.988% accuracy and slightly outperformed KNN with fewer misclassifications.',
      'beverageClass.eval3': 'The test set contains 41,291 samples, while the training set contains 165,161 samples.',
      'beverageClass.eval4': 'Hyperparameter tuning was not performed because both baseline models already achieved performance above 99% on the test set.',
      'beverageClass.interpretationTitle': 'Interpretation',
      'beverageClass.interpretation1': 'Random Forest is the stronger model in this experiment, although the performance gap from KNN is very small.',
      'beverageClass.interpretation2': 'Because the target labels originate from K-Means clustering built from the same feature space, the classification task primarily learns to reproduce the previously discovered cluster boundaries rather than predict an independent business outcome.',
      'beverageClass.visualsTitle': 'Classification Results',
      'beverageClass.performanceCaption': 'Performance comparison between KNN and Random Forest',
      'beverageClass.knnCaption': 'KNN confusion matrix based on the notebook test predictions',
      'beverageClass.rfCaption': 'Random Forest confusion matrix based on the notebook test predictions',
      'projects.wineTitle': 'Predictive Analytics — Red Wine Quality Prediction',
      'projects.wineText': 'Built and compared regression models to predict red wine quality from physicochemical characteristics, with Gradient Boosting Regressor selected as the best final model.',
      'wine.back': '← Back to Projects',
      'wine.title': 'Predictive Analytics — Red Wine Quality Prediction',
      'wine.subtitle': 'Machine Learning — Regression Modeling',
      'wine.github': 'View GitHub',
      'wine.overviewTitle': 'Project Overview',
      'wine.overviewText': 'This predictive analytics project uses physicochemical measurements to estimate red wine quality. Three regression approaches—Linear Regression, Support Vector Regressor, and Gradient Boosting Regressor—are compared, with hyperparameter tuning applied to the more advanced models.',
      'wine.toolsTitle': 'Tools Used',
      'wine.datasetTitle': 'Dataset & Features',
      'wine.datasetText': 'The UCI Wine Quality red wine dataset contains 1,599 records, 11 physicochemical input features, and the quality score as the regression target. After removing 240 duplicate rows, 1,359 unique samples remain for modeling.',
      'wine.workflowTitle': 'Machine Learning Workflow',
      'wine.workflowText': 'Data Understanding → Duplicate Removal → Feature/Target Split → 80/20 Train-Test Split → StandardScaler → Linear Regression, SVR & Gradient Boosting → GridSearchCV → MAE, RMSE & R² Evaluation',
      'wine.insightsTitle': 'Key Findings',
      'wine.insight1': 'Wine quality scores range from 3 to 8, with most observations concentrated at quality 5 and 6.',
      'wine.insight2': 'Alcohol shows a positive relationship with quality, while volatile acidity shows a notable negative relationship.',
      'wine.insight3': 'After cleaning, 1,087 samples are used for training and 272 samples for testing.',
      'wine.insight4': 'Gradient Boosting Regressor provides the strongest final test performance among the evaluated models.',
      'wine.evaluationTitle': 'Final Model Evaluation',
      'wine.eval1': 'R² Score: 0.4560 — the model explains about 45.60% of the variance in red wine quality.',
      'wine.eval2': 'MAE: 0.4806 — predictions differ from the actual quality score by about 0.48 points on average.',
      'wine.eval3': 'RMSE: 0.6208 — this metric places greater weight on larger prediction errors.',
      'wine.eval4': 'Selected model: Gradient Boosting Regressor with learning_rate 0.05, max_depth 3, and n_estimators 100 after GridSearchCV.',
      'wine.visualsTitle': 'Analysis & Prediction Results',
      'wine.distributionCaption': 'Distribution of the red wine quality target',
      'wine.correlationCaption': 'Correlation heatmap across physicochemical features and quality',
      'wine.predictionCaption': 'Actual versus predicted quality using Gradient Boosting Regressor',
      'wine.residualHistogramCaption': 'Distribution of prediction residuals',
      'wine.residualScatterCaption': 'Residuals versus predicted quality values',
      'projects.bookCbfTitle': 'Goodreads-10k Book Recommendation System with Content-Based Filtering',
      'projects.bookCbfText': 'Built a book recommendation system using TF-IDF and Cosine Similarity to recommend similar titles from the Goodreads-10k dataset, evaluated with Precision@10.',
      'bookcbf.back': '← Back to Projects',
      'bookcbf.title': 'Goodreads-10k Book Recommendation System with Content-Based Filtering',
      'bookcbf.subtitle': 'Machine Learning — Recommendation System',
      'bookcbf.github': 'View GitHub',
      'bookcbf.overviewTitle': 'Project Overview',
      'bookcbf.overviewText': 'This project builds a book recommendation system using Content-Based Filtering. Book metadata is transformed with TF-IDF and compared using Cosine Similarity so the system can recommend books with content characteristics similar to a selected title.',
      'bookcbf.toolsTitle': 'Tools Used',
      'bookcbf.datasetTitle': 'Dataset & Features',
      'bookcbf.datasetText': 'The project uses the Goodreads-10k dataset with 10,000 books and 23 columns. The recommendation content is constructed from title, authors, and original_title, while average_rating is used only as a heuristic relevance criterion during Precision@10 evaluation.',
      'bookcbf.workflowTitle': 'Machine Learning Workflow',
      'bookcbf.workflowText': 'Data Understanding → Missing Value Handling → Text Feature Combination → Text Normalization → TF-IDF Vectorization → Cosine Similarity → Top-N Recommendation → Precision@10 Evaluation',
      'bookcbf.resultsTitle': 'Recommendation & Evaluation Results',
      'bookcbf.result1': 'The TF-IDF representation covers 10,000 books with up to 5,000 text features.',
      'bookcbf.result2': 'Average Precision@10 across five evaluated books is 0.58 using average_rating ≥ 4.0 as the relevance heuristic.',
      'bookcbf.result3': "Harry Potter and the Sorcerer's Stone achieved Precision@10 of 1.00, meaning all 10 recommendations met the chosen relevance criterion.",
      'bookcbf.result4': 'The model can recommend books without requiring user-to-user interaction data because recommendations are based on item content.',
      'bookcbf.examplesTitle': 'Example Recommendations',
      'bookcbf.example1': 'For The Hobbit, recommendations include The Hobbit: Graphic Novel, The History of the Hobbit, The Silmarillion, The Children of Húrin, and other Middle-earth related titles.',
      'bookcbf.example2': 'For Pride and Prejudice, the model surfaces related retellings and Jane Austen titles such as Pride and Prejudice and Zombies, Eligible, Emma, and The Complete Novels.',
      'bookcbf.example3': 'For The Da Vinci Code, the recommendations include other Robert Langdon and code-related titles, including The Lost Symbol.',
      'bookcbf.example4': 'Because the model relies on title, author, and original title text, it may over-specialize and recommend items that are very similar rather than diverse.',
      'bookcbf.visualsTitle': 'Analysis & Evaluation Results',
      'bookcbf.ratingCaption': 'Distribution of average ratings in the Goodreads-10k dataset',
      'bookcbf.precisionCaption': 'Precision@10 results for five evaluated books',
      'projects.vegetableTitle': 'Vegetable Image Classification with CNN',
      'projects.vegetableText': 'Built a deep learning image classification model using a Convolutional Neural Network (CNN) to recognize 15 vegetable classes from the Vegetable Image Dataset, supported by data augmentation and multi-format model export.',
      'vegetable.back': '← Back to Projects',
      'vegetable.title': 'Vegetable Image Classification with CNN',
      'vegetable.subtitle': 'Deep Learning — Image Classification',
      'vegetable.github': 'View GitHub',
      'vegetable.overviewTitle': 'Project Overview',
      'vegetable.overviewText': 'This project builds a deep learning image classification model for the Vegetable Image Dataset. A custom Convolutional Neural Network (CNN) is trained to distinguish 15 vegetable classes using image normalization, data augmentation, dropout regularization, and training callbacks.',
      'vegetable.toolsTitle': 'Tools Used',
      'vegetable.datasetTitle': 'Dataset & Classes',
      'vegetable.datasetText': 'The dataset contains 18,000 vegetable images across 15 classes: Bean, Bitter Gourd, Bottle Gourd, Brinjal, Broccoli, Cabbage, Capsicum, Carrot, Cauliflower, Cucumber, Papaya, Potato, Pumpkin, Radish, and Tomato. Images are resized to 224×224 pixels and split into 14,399 training, 1,801 validation, and 1,800 testing images.',
      'vegetable.workflowTitle': 'Deep Learning Workflow',
      'vegetable.workflowText': 'Dataset Preparation → Train/Validation/Test Split → Image Rescaling & Augmentation → CNN Architecture → Adam Optimization → Training with Callbacks → Accuracy & Loss Evaluation → Inference → SavedModel, TensorFlow Lite & TensorFlow.js Export',
      'vegetable.resultsTitle': 'Model Results',
      'vegetable.result1': 'Training accuracy reported in the notebook reached 98.00%.',
      'vegetable.result2': 'Validation accuracy reported in the notebook reached 98.00%.',
      'vegetable.result3': 'Testing accuracy reported in the notebook reached 97.72%.',
      'vegetable.result4': 'The model was exported to SavedModel, TensorFlow Lite, and TensorFlow.js formats for broader deployment options.',
      'vegetable.architectureTitle': 'Model Architecture',
      'vegetable.architecture1': 'The CNN uses four Conv2D blocks with 64, 128, 256, and 512 filters, each followed by MaxPooling and Dropout.',
      'vegetable.architecture2': 'A Dense layer with 128 units is used before the final Softmax output layer for 15-class classification.',
      'vegetable.architecture3': 'Image augmentation includes rotation, width/height shifting, shear, zoom, and horizontal flipping.',
      'vegetable.architecture4': 'EarlyStopping, ModelCheckpoint, and ReduceLROnPlateau are used to stabilize training and retain the best model.',
      'vegetable.visualsTitle': 'Training & Inference Results',
      'vegetable.classCountCaption': 'Training image distribution across the 15 vegetable classes',
      'vegetable.samplesCaption': 'Augmented training image samples used during model training',
      'vegetable.curvesCaption': 'Training and validation accuracy/loss curves',
      'vegetable.inferenceCaption': 'Example inference result from the testing set',
      'projects.pjuTitle': 'PJU Condition Analysis Dashboard — Tasikmalaya Regency',
      'projects.pjuText': 'Analyzed the condition and spatial distribution of public street lighting (PJU) in Tasikmalaya Regency, combining data cleaning, geospatial analysis, condition mapping, and an interactive Streamlit dashboard.',
      'pju.back': '← Back to Projects',
      'pju.title': 'PJU Condition Analysis Dashboard — Tasikmalaya Regency',
      'pju.subtitle': 'Data Analysis, Geospatial Mapping & Interactive Dashboard',
      'pju.github': 'View GitHub',
      'pju.demo': '↗ Live Dashboard',
      'pju.overviewTitle': 'Project Overview',
      'pju.overviewText': 'This project analyzes the condition and spatial distribution of Public Street Lighting (PJU) across Tasikmalaya Regency. The workflow combines data cleaning, exploratory analysis, condition classification, spatial joining with district boundaries, static and interactive mapping, and a Streamlit dashboard for easier exploration.',
      'pju.toolsTitle': 'Tools Used',
      'pju.datasetTitle': 'Dataset & Processing',
      'pju.datasetText': 'The raw dataset contains 5,589 PJU records with location, coordinates, condition, PJU type, pole type, and lamp type. After handling missing values, 4,235 records remained for condition analysis. A spatial join with the Tasikmalaya Regency district GeoJSON retained 3,229 records whose coordinates fall inside the mapped district boundaries.',
      'pju.workflowTitle': 'Analysis Workflow',
      'pju.workflowText': 'Data Loading → Data Cleaning → District Extraction → Exploratory Feature Importance → Condition Classification → Coordinate Parsing → GeoDataFrame Creation → Spatial Join → District Summary → Static & Interactive Maps → Streamlit Dashboard',
      'pju.insightsTitle': 'Key Insights',
      'pju.insight1': 'After non-spatial cleaning, the dataset contains 3,777 PJU in good condition and 458 damaged PJU.',
      'pju.insight2': 'Sukahening recorded the highest damaged count in the district summary shown in the notebook, with 31 damaged PJU and a damaged percentage of about 68.9%.',
      'pju.insight3': 'Among the technical attributes examined, lamp type showed a stronger relationship with PJU condition than pole type in the exploratory feature-importance analysis.',
      'pju.insight4': 'The notebook concludes that maintenance attention should prioritize vulnerable pole and lamp categories, while the findings should be treated as an initial indication because the available variables are limited and the category distribution is uneven.',
      'pju.visualsTitle': 'Analysis & Geospatial Results',
      'pju.conditionCaption': 'Distribution of PJU condition: good versus damaged',
      'pju.top10Caption': 'Top 10 districts with the highest number of damaged PJU',
      'pju.percentCaption': 'Top 10 districts by damaged PJU percentage',
      'pju.mapCaption': 'Tasikmalaya Regency district map categorized by damaged-PJU percentage',
      'pju.lampCaption': 'Damaged PJU counts by lamp type',
      'pju.poleCaption': 'Damaged PJU counts by pole type',
      'pju.limitationsTitle': 'Important Note',
      'pju.limitationsText': 'The analysis is a snapshot based on the available attributes. It does not include factors such as installation age, installation quality, weather, accident exposure, or usage intensity. Because some categories have much smaller populations than others, percentage-based damage comparisons should be interpreted carefully.',

      'projects.cbfUbcfTitle': 'Comparative Analysis of CBF and UBCF for Book Recommendation Systems',
      'projects.cbfUbcfText': 'Compared Content-Based Filtering and User-Based Collaborative Filtering under the same evaluation setting to analyze recommendation accuracy, coverage, hit rate, and the effect of sparse user-item interactions.',
      'cbfubcf.back': '← Back to Projects',
      'cbfubcf.title': 'Comparative Analysis of CBF and UBCF for Book Recommendation Systems',
      'cbfubcf.subtitle': 'Machine Learning — Recommendation System Comparison',
      'cbfubcf.github': 'View GitHub',
      'cbfubcf.overviewTitle': 'Project Overview',
      'cbfubcf.overviewText': 'This project compares Content-Based Filtering (CBF) and User-Based Collaborative Filtering (UBCF) for book recommendation under the same data preparation, train-test split, Top-N setting, and evaluation users. The goal is not only to identify which method performs better, but also to explain why the performance gap occurs.',
      'cbfubcf.toolsTitle': 'Tools Used',
      'cbfubcf.datasetTitle': 'Dataset & Preparation',
      'cbfubcf.datasetText': 'The raw data consists of 271,360 book records, 1,149,780 rating records, and 278,858 user records. After removing implicit ratings (rating 0), aligning interactions at Book-Title level, and applying iterative filtering with at least 10 user interactions and 3 title interactions, the modeling data contains 4,196 users, 16,490 titles, and 133,907 interactions.',
      'cbfubcf.workflowTitle': 'Machine Learning Workflow',
      'cbfubcf.workflowText': 'Data Understanding → Data Cleaning → Explicit Rating Filtering → User-Title Aggregation → Iterative K-Core Filtering → 80:20 Split per User → CBF with TF-IDF Metadata Similarity → UBCF with User-Item Matrix & User Similarity → Top-10 Recommendation → Precision, Recall, F1-Score & Diagnostic Evaluation',
      'cbfubcf.resultsTitle': 'Evaluation Results',
      'cbfubcf.result1': 'CBF achieved macro-average Precision of 0.0277 across 300 evaluated users.',
      'cbfubcf.result2': "CBF achieved macro-average Recall of 0.0840, higher than UBCF's 0.0073.",
      'cbfubcf.result3': 'CBF achieved macro-average F1-Score of 0.0377, compared with 0.0042 for UBCF.',
      'cbfubcf.result4': 'Both methods were evaluated on the same 300 users with Top-10 recommendation lists.',
      'cbfubcf.diagnosticTitle': 'Why the Results Differ',
      'cbfubcf.diagnostic1': 'CBF produced recommendations for all evaluated users, giving 100% recommendation coverage in the diagnostic summary.',
      'cbfubcf.diagnostic2': 'UBCF only produced recommendations for 75% of evaluated users, with an average recommendation count of 7.5 instead of 10.',
      'cbfubcf.diagnostic3': 'The UBCF train user-item matrix is extremely sparse at about 99.85%, limiting overlapping ratings between users and weakening neighborhood-based recommendation opportunities.',
      'cbfubcf.diagnostic4': 'CBF achieved a 19.67% hit rate in the diagnostic summary, while UBCF achieved 3.00%, showing that the observed performance gap is also related to recommendation availability and sparse interactions.',
      'cbfubcf.evalSetupTitle': 'Evaluation Setup',
      'cbfubcf.evalSetupText': 'Relevant items in the test data are defined using Book-Rating ≥ 9. The filtered dataset is split per user into approximately 78.75% train and 21.25% test. Evaluation uses 300 users selected from 3,135 evaluable users, with Top-N fixed at 10 for both methods.',
      'cbfubcf.conclusionTitle': 'Project Conclusion',
      'cbfubcf.conclusionText': 'In this experimental setting, CBF performs better than UBCF on Precision, Recall, F1-Score, recommendation coverage, and hit rate. The result should be interpreted as specific to this dataset and evaluation design: CBF benefits from book metadata, while UBCF is strongly affected by the sparse user-item interaction matrix and limited user overlap.',
      'cbfubcf.visualsTitle': 'Evaluation & Diagnostic Visuals',
      'cbfubcf.groundTruthCaption': 'Ground-truth relevance distribution on the test set using rating ≥ 9',
      'cbfubcf.evaluationCaption': 'Macro-average Precision, Recall, and F1-Score comparison between CBF and UBCF',
      'projects.segTitle': 'Customer Segmentation',
      'projects.segText': 'Segmented customers using K-Means clustering to identify distinct groups and improve marketing strategies.',
      'projects.emotionTitle': 'Emotion Detection from Text',
      'projects.emotionText': 'Built an NLP model to detect emotions in text and evaluate how well it understands short messages.',
      'projects.recTitle': 'Recommendation System Comparison',
      'projects.recText': 'Compared content-based and user-based collaborative filtering to understand their performance and trade-offs.',
      'projects.detail': '▥ View Detail',

      'cert.bannerTitle': 'Certificates & <span class="accent">Achievements</span>',
      'cert.bannerText': 'A collection of certifications and achievements that reflect my commitment to continuous learning and professional growth.',
      'cert.summary': 'Credential Summary',
      'cert.certifications': 'Professional Certification',
      'cert.certificationsText': 'Professional certification earned.',
      'cert.trainings': 'Training Program',
      'cert.trainingsText': 'Intensive training program completed.',
      'cert.achievements': 'Courses Completed',
      'cert.achievementsText': 'Completed courses and learning programs.',
      'cert.item1Title': 'Information Technology Specialist – Data Analytics',
      'cert.item1Issuer': 'Information Technology Specialist (Certiport)',
      'cert.item1Text': 'Successfully completed the certification requirements for Data Analytics.',
      'cert.item2Title': 'Coding Camp 2025 – Machine Learning Engineer',
      'cert.item2Issuer': 'DBS Foundation & Dicoding Indonesia',
      'cert.item2Text': 'Successfully completed Coding Camp powered by DBS Foundation with a Machine Learning Engineer specialization.',
      'cert.item3Title': 'Basic AI',
      'cert.item3Issuer': 'Dicoding Indonesia',
      'cert.item3Text': 'Covered foundational AI concepts, data for AI, machine learning, and introductory deep learning.',
      'cert.item4Title': 'Fundamental Deep Learning',
      'cert.item4Issuer': 'Dicoding Indonesia',
      'cert.item4Text': 'Studied neural networks, NLP, time series, image classification, recommendation systems, reinforcement learning, and model conversion.',
      'cert.item5Title': 'Applied Machine Learning',
      'cert.item5Issuer': 'Dicoding Indonesia',
      'cert.item5Text': 'Studied applied machine learning through predictive analytics, sentiment analysis, computer vision, and recommendation systems.',
      'cert.item6Title': 'Machine Learning for Beginners',
      'cert.item6Issuer': 'Dicoding Indonesia',
      'cert.item6Text': 'Built foundations in machine learning workflows, classification, regression, clustering, feature engineering, and model tuning.',
      'cert.item7Title': 'Fundamental Data Processing',
      'cert.item7Issuer': 'Dicoding Indonesia',
      'cert.item7Text': 'Learned Python-based data processing, data repositories, ETL pipelines, and data pipeline automation.',
      'cert.item8Title': 'Data Analysis with Python',
      'cert.item8Issuer': 'Dicoding Indonesia',
      'cert.item8Text': 'Covered descriptive statistics, data wrangling, exploratory data analysis, visualization, and dashboard development with Streamlit.',
      'cert.item9Title': 'Basic Structured Query Language (SQL)',
      'cert.item9Issuer': 'Dicoding Indonesia',
      'cert.item9Text': 'Learned relational database concepts, DBMS fundamentals, SQL structure, and basic data queries.',
      'cert.item10Title': 'Getting Started with Python Programming',
      'cert.item10Issuer': 'Dicoding Indonesia',
      'cert.item10Text': 'Learned Python fundamentals including data interaction, control flow, arrays, functions, OOP, testing, and popular libraries.',
      'cert.item11Title': 'Basic Data Visualization',
      'cert.item11Issuer': 'Dicoding Indonesia',
      'cert.item11Text': 'Learned data preparation and effective visualization practices using Google Sheets and visual storytelling principles.',
      'cert.item12Title': 'Basic Git with GitHub',
      'cert.item12Issuer': 'Dicoding Indonesia',
      'cert.item12Text': 'Learned Git and GitHub fundamentals, branching, collaboration workflows, code review, and portfolio use.',
      'cert.item13Title': 'Introduction to Programming Logic (Programming Logic 101)',
      'cert.item13Issuer': 'Dicoding Indonesia',
      'cert.item13Text': 'Studied programming logic, logic gates, computational thinking, and problem-solving fundamentals.',
      'cert.item14Title': 'Basic Programming for Software Developers',
      'cert.item14Issuer': 'Dicoding Indonesia',
      'cert.item14Text': 'Covered application requirements, flowcharts, basic HTML, CSS, JavaScript, and software documentation.',
      'cert.item15Title': 'Basic Data Science',
      'cert.item15Issuer': 'Dicoding Indonesia',
      'cert.item15Text': 'Covered data science fundamentals, data analysis processes, supporting tools, machine learning applications, and career exploration.',
      'cert.item16Title': 'Basic Project Management',
      'cert.item16Issuer': 'Dicoding Indonesia',
      'cert.item16Text': 'Studied project management foundations, project life cycles, methodologies, organizational structures, and project career paths.',
      'cert.item17Title': 'Self-Development Strategy',
      'cert.item17Issuer': 'Dicoding Indonesia',
      'cert.item17Text': 'Studied growth mindset, personal potential, time management, adaptability, and personal development planning.',
      'cert.item18Title': 'Basic Web Programming',
      'cert.item18Issuer': 'Dicoding Indonesia',
      'cert.item18Text': 'Studied HTML, CSS, responsive Flexbox layouts, JavaScript DOM manipulation, web storage, and website development fundamentals.',
      'cert.item19Title': 'Career as a Software Developer',
      'cert.item19Issuer': 'Dicoding Indonesia',
      'cert.item19Text': 'Explored software development career paths and the preparation needed to choose and pursue an appropriate career direction.',
      'cert.view': '↗ View Credential',

      'contact.title': 'Contact <span class="accent">Me</span>',
      'contact.subtitle': 'Let’s collaborate on data and AI projects.',
      'contact.preferred': 'Preferred Contact',
      'contact.preferredValue': 'Email or LinkedIn',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.subject': 'Subject',
      'contact.message': 'Message',
      'contact.namePlaceholder': 'Your name',
      'contact.emailPlaceholder': 'Your email',
      'contact.subjectPlaceholder': 'What’s this about?',
      'contact.messagePlaceholder': 'Write your message here...',
      'contact.send': '➤ Send Message',
      'contact.sending': 'Sending...',
      'contact.success': 'Message sent successfully. Thank you!',
      'contact.error': 'Unable to send the message. Please try again or contact me by email.'
    },
    id: {
      'nav.home': 'Beranda',
      'nav.about': 'Tentang',
      'nav.skills': 'Keahlian',
      'nav.projects': 'Proyek',
      'nav.certificates': 'Sertifikat',
      'nav.contact': 'Kontak',
      'footer.copy': '© 2026 Rina Rismawati. Seluruh hak cipta dilindungi.',
      'footer.views': 'Dilihat',

      'home.eyebrow': 'Selamat datang di portofolio saya',
      'home.title': 'Hai, saya <span>Rina Rismawati</span>',
      'home.subtitle': 'Data Analyst & Machine Learning Enthusiast',
      'home.text': 'Saya mengolah dan menganalisis data untuk menemukan insight yang bermakna, serta membangun model machine learning untuk membantu menyelesaikan permasalahan nyata. Saya tertarik pada eksplorasi data, pemecahan masalah, dan pengembangan solusi berbasis data.',
      'home.viewProjects': '▥ Lihat Proyek',
      'home.contactMe': '✉ Hubungi Saya',
      'home.data.title': 'Analisis Data',
      'home.data.text': 'Mengeksplorasi, membersihkan, dan menganalisis data untuk menemukan insight yang bermakna.',
      'home.ml.title': 'Machine Learning',
      'home.ml.text': 'Membangun dan mengevaluasi model untuk menyelesaikan masalah dan membuat prediksi.',
      'home.dashboard.title': 'Proyek Dashboard',
      'home.dashboard.text': 'Merancang dashboard yang memvisualisasikan data dan mendukung pengambilan keputusan berbasis data.',

      'about.bannerTitle': 'Tentang <span class="accent">Saya</span>',
      'about.bannerText': 'Kenali lebih dekat tentang saya dan perjalanan saya.',
      'about.role': 'Data Analyst & Machine Learning Enthusiast',
      'about.location': 'Garut, Indonesia',
      'about.open': '● Terbuka untuk Peluang',
      'about.hello': 'Halo! Saya <span class="accent">Rina Rismawati.</span>',
      'about.p1': 'Saya tertarik mengubah data menjadi insight yang bermakna dan membangun model cerdas untuk membantu menyelesaikan permasalahan nyata. Minat saya berada pada analisis data, machine learning, dan pembuatan solusi yang memberikan dampak positif.',
      'about.p2': 'Saya menikmati proses mengeksplorasi data, menemukan pola, dan mengubah masalah yang kompleks menjadi insight yang sederhana dan dapat ditindaklanjuti. Saya selalu antusias mempelajari hal baru dan menghadapi tantangan yang membantu saya berkembang.',
      'about.education': 'Pendidikan',
      'about.educationText': 'Institut Teknologi Garut<br>Teknik Informatika<br>2022-Sekarang',
      'about.interests': 'Minat',
      'about.interest1': 'Analisis Data',
      'about.interest2': 'Machine Learning',
      'about.interest3': 'Visualisasi Data',
      'about.learned': 'Yang Saya Pelajari',
      'about.learned1': 'Mengubah data menjadi insight yang dapat digunakan',
      'about.learned2': 'Mengevaluasi model machine learning',
      'about.learned3': 'Mengomunikasikan hasil dengan jelas',
      'about.loveTitle': 'Mengapa saya menyukai data',
      'about.loveText': 'Data menyimpan cerita. Saya menyukai tantangan untuk menemukan cerita tersebut dan mengubahnya menjadi insight yang membantu orang membuat keputusan yang lebih baik.',

      'skills.bannerTitle': 'Keahlian & <span class="accent">Tools</span>',
      'skills.bannerText': 'Teknologi dan tools yang saya gunakan untuk mengubah data menjadi insight dan membangun solusi yang berdampak.',
      'skills.ai': 'AI / Machine Learning',
      'skills.data': 'Data & Notebook',
      'skills.dev': 'Development Tools',

      'projects.bannerTitle': '<span class="accent">Proyek</span>',
      'projects.bannerText': 'Beberapa karya pilihan dalam analisis data dan machine learning.',
      'projects.all': 'Semua',
      'projects.data': 'Analisis Data',
      'projects.ml': 'Machine Learning',
      'projects.dashboard': 'Dashboard',
      'projects.bikeTitle': 'Analisis Bike Sharing',
      'projects.bikeText': 'Menganalisis pola penyewaan Bike Sharing tahun 2011–2012 untuk mengidentifikasi tren tahunan, bulanan, per jam, dan musiman, kemudian menyajikan hasilnya melalui dashboard interaktif Streamlit.',
      'bike.title': 'Analisis Bike Sharing',
      'bike.subtitle': 'Analisis Data & Dashboard Interaktif',
      'bike.overviewTitle': 'Ringkasan Proyek',
      'bike.overviewText': 'Proyek ini menganalisis data penyewaan Bike Sharing tahun 2011 hingga 2012 untuk memahami pola penggunaan berdasarkan tahun, bulan, jam, dan musim. Analisis mencakup data wrangling, exploratory data analysis, visualisasi, serta penyajian hasil melalui dashboard interaktif Streamlit.',
      'bike.questionsTitle': 'Pertanyaan Bisnis',
      'bike.q1': 'Bagaimana performa penyewaan sepeda dari tahun 2011 hingga 2012?',
      'bike.q2': 'Bagaimana performa penyewaan sepeda per bulan selama tahun 2011 hingga 2012?',
      'bike.q3': 'Bagaimana performa penyewaan sepeda per jam selama tahun 2011 hingga 2012?',
      'bike.q4': 'Pada musim apa penyewaan sepeda paling banyak terjadi?',
      'bike.workflowTitle': 'Alur Analisis',
      'bike.workflowText': 'Pengumpulan Data → Penilaian Data → Pembersihan Data → Exploratory Data Analysis → Visualisasi → Dashboard Streamlit',
      'bike.insightsTitle': 'Insight Utama',
      'bike.insight1': 'Total penyewaan meningkat signifikan dari sekitar 1,25 juta pada 2011 menjadi sekitar 2 juta pada 2012.',
      'bike.insight2': 'Aktivitas penyewaan cenderung meningkat menuju pertengahan tahun, dengan permintaan kuat sekitar Juni hingga September.',
      'bike.insight3': 'Penggunaan per jam mencapai puncak sekitar pukul 08.00 dan 17.00, menunjukkan pola penggunaan yang kuat pada jam perjalanan kerja.',
      'bike.insight4': 'Musim gugur (fall) mencatat jumlah penyewaan sepeda tertinggi dibandingkan musim lainnya.',
      'bike.visualsTitle': 'Hasil Analisis',
      'bike.yearlyCaption': 'Performa penyewaan sepeda per tahun',
      'bike.monthlyCaption': 'Perbandingan penyewaan per bulan antara 2011 dan 2012',
      'bike.hourlyCaption': 'Pola penyewaan sepeda per jam',
      'bike.seasonCaption': 'Jumlah penyewaan berdasarkan musim',
      'bike.toolsTitle': 'Tools yang Digunakan',
      'bike.back': '← Kembali ke Proyek',
      'bike.github': 'Lihat GitHub',
      'bike.demo': '↗ Buka Dashboard',
      'projects.beverageTitle': 'Clustering Dataset Beverage Sales dengan K-Means',
      'projects.beverageText': 'Menerapkan clustering K-Means pada dataset Beverage Sales untuk mengidentifikasi pola pembelian berdasarkan tipe pelanggan, harga satuan, jumlah, diskon, dan total transaksi, didukung PCA serta evaluasi Silhouette.',
      'beverage.back': '← Kembali ke Proyek',
      'beverage.title': 'Clustering Dataset Beverage Sales dengan K-Means',
      'beverage.subtitle': 'Machine Learning — Unsupervised Clustering',
      'beverage.github': 'Lihat GitHub',
      'beverage.overviewTitle': 'Ringkasan Proyek',
      'beverage.overviewText': 'Proyek ini menerapkan unsupervised machine learning pada dataset Beverage Sales yang berisi 8.999.910 baris transaksi dan 11 fitur awal. K-Means digunakan untuk menemukan pola pembelian berdasarkan tipe pelanggan, harga satuan, jumlah, diskon, dan total nilai transaksi.',
      'beverage.datasetTitle': 'Dataset & Fitur',
      'beverage.datasetText': 'Dataset berisi transaksi penjualan minuman dengan variabel numerik dan kategorikal. Setelah preprocessing, model clustering menggunakan Customer_Type, Unit_Price, Quantity, Discount, dan Total_Price.',
      'beverage.toolsTitle': 'Tools yang Digunakan',
      'beverage.workflowTitle': 'Alur Machine Learning',
      'beverage.workflowText': 'Memuat Dataset → Exploratory Data Analysis → Pemilihan Fitur → Label Encoding → Standardisasi → K-Means Clustering → Evaluasi Elbow & Silhouette → PCA → Interpretasi Cluster',
      'beverage.evaluationTitle': 'Evaluasi Model',
      'beverage.eval1': 'Model clustering dikonfigurasi menjadi 3 cluster menggunakan K-Means.',
      'beverage.eval2': 'Silhouette Score berbasis sampel mencapai sekitar 0,712 sebelum optimasi berbasis PCA.',
      'beverage.eval3': 'Setelah PCA mempertahankan 95% varians, Silhouette Score berbasis sampel mencapai 0,7239.',
      'beverage.insightsTitle': 'Karakteristik Cluster',
      'beverage.insight1': 'Cluster 0 merepresentasikan pembelian bernilai lebih rendah dengan rata-rata harga satuan 4,47, quantity 7,99, dan total harga 35,17.',
      'beverage.insight2': 'Cluster 1 merepresentasikan pembelian bervolume tinggi dengan rata-rata quantity 49,65 dan total harga 135,18.',
      'beverage.insight3': 'Cluster 2 merepresentasikan transaksi premium bernilai tinggi dengan rata-rata harga satuan 72,70 dan total harga 2.425,09.',
      'beverage.visualsTitle': 'Hasil Model & Analisis',
      'beverage.distributionCaption': 'Distribusi fitur numerik pada dataset Beverage Sales',
      'beverage.correlationCaption': 'Matriks korelasi fitur numerik',
      'beverage.elbowCaption': 'Elbow Method untuk mengevaluasi jumlah cluster',
      'beverage.pcaCaption': 'Proporsi varians pada komponen PCA',
      'beverage.clusterCaption': 'Visualisasi 2D PCA dari tiga cluster K-Means',
      'projects.beverageClassTitle': 'Klasifikasi Cluster Dataset Beverage Sales dengan KNN & Random Forest',
      'projects.beverageClassText': 'Membangun model klasifikasi supervised untuk memprediksi label cluster hasil proyek clustering Beverage Sales, dengan membandingkan K-Nearest Neighbors dan Random Forest menggunakan accuracy, precision, recall, F1-score, serta confusion matrix.',
      'beverageClass.back': '← Kembali ke Proyek',
      'beverageClass.title': 'Klasifikasi Cluster Dataset Beverage Sales dengan KNN & Random Forest',
      'beverageClass.subtitle': 'Machine Learning — Klasifikasi Supervised',
      'beverageClass.github': 'Lihat GitHub',
      'beverageClass.overviewTitle': 'Ringkasan Proyek',
      'beverageClass.overviewText': 'Proyek ini merupakan lanjutan dari clustering Beverage Sales dengan menggunakan label cluster yang telah dihasilkan sebagai target klasifikasi. K-Nearest Neighbors dan Random Forest dilatih untuk mempelajari pola penentuan cluster berdasarkan Customer_Type, Unit_Price, Quantity, Discount, dan Total_Price.',
      'beverageClass.toolsTitle': 'Tools yang Digunakan',
      'beverageClass.datasetTitle': 'Dataset & Target',
      'beverageClass.datasetText': 'Dataset input adalah hasil_clustering.csv yang dihasilkan dari proyek K-Means Beverage Sales sebelumnya. Setelah baris dengan label cluster kosong dihapus, digunakan 206.452 data berlabel. Lima variabel digunakan sebagai fitur, sedangkan Cluster (0, 1, atau 2) menjadi label target.',
      'beverageClass.workflowTitle': 'Alur Machine Learning',
      'beverageClass.workflowText': 'Memuat Dataset Hasil Clustering → Memisahkan Fitur & Target → Label Encoding → Imputasi Mean → Standardisasi → Train-Test Split 80/20 → Melatih KNN & Random Forest → Evaluasi Performa Klasifikasi',
      'beverageClass.evaluationTitle': 'Evaluasi Model',
      'beverageClass.eval1': 'KNN mencapai accuracy 99,983% dengan weighted precision, recall, dan F1-score yang semuanya berada di sekitar 99,983%.',
      'beverageClass.eval2': 'Random Forest mencapai accuracy 99,988% dan sedikit lebih unggul dari KNN dengan jumlah kesalahan klasifikasi yang lebih sedikit.',
      'beverageClass.eval3': 'Data testing berjumlah 41.291 sampel, sedangkan data training berjumlah 165.161 sampel.',
      'beverageClass.eval4': 'Hyperparameter tuning tidak dilakukan karena kedua model baseline sudah menghasilkan performa di atas 99% pada data testing.',
      'beverageClass.interpretationTitle': 'Interpretasi',
      'beverageClass.interpretation1': 'Random Forest menjadi model yang sedikit lebih unggul pada eksperimen ini, meskipun selisih performanya dengan KNN sangat kecil.',
      'beverageClass.interpretation2': 'Karena label target berasal dari K-Means yang dibentuk menggunakan ruang fitur yang sama, tugas klasifikasi ini terutama mempelajari kembali batas cluster yang telah ditemukan, bukan memprediksi outcome bisnis independen.',
      'beverageClass.visualsTitle': 'Hasil Klasifikasi',
      'beverageClass.performanceCaption': 'Perbandingan performa KNN dan Random Forest',
      'beverageClass.knnCaption': 'Confusion matrix KNN berdasarkan prediksi data testing pada notebook',
      'beverageClass.rfCaption': 'Confusion matrix Random Forest berdasarkan prediksi data testing pada notebook',
      'projects.wineTitle': 'Predictive Analytics — Prediksi Kualitas Anggur Merah',
      'projects.wineText': 'Membangun dan membandingkan model regresi untuk memprediksi kualitas anggur merah dari karakteristik fisikokimia, dengan Gradient Boosting Regressor dipilih sebagai model akhir terbaik.',
      'wine.back': '← Kembali ke Proyek',
      'wine.title': 'Predictive Analytics — Prediksi Kualitas Anggur Merah',
      'wine.subtitle': 'Machine Learning — Pemodelan Regresi',
      'wine.github': 'Lihat GitHub',
      'wine.overviewTitle': 'Ringkasan Proyek',
      'wine.overviewText': 'Proyek predictive analytics ini menggunakan pengukuran fisikokimia untuk memperkirakan kualitas anggur merah. Tiga pendekatan regresi—Linear Regression, Support Vector Regressor, dan Gradient Boosting Regressor—dibandingkan, dengan hyperparameter tuning diterapkan pada model yang lebih lanjut.',
      'wine.toolsTitle': 'Tools yang Digunakan',
      'wine.datasetTitle': 'Dataset & Fitur',
      'wine.datasetText': 'Dataset red wine dari UCI Wine Quality berisi 1.599 data, 11 fitur input fisikokimia, dan skor quality sebagai target regresi. Setelah 240 baris duplikat dihapus, tersisa 1.359 sampel unik untuk pemodelan.',
      'wine.workflowTitle': 'Alur Machine Learning',
      'wine.workflowText': 'Data Understanding → Menghapus Duplikasi → Memisahkan Fitur/Target → Train-Test Split 80/20 → StandardScaler → Linear Regression, SVR & Gradient Boosting → GridSearchCV → Evaluasi MAE, RMSE & R²',
      'wine.insightsTitle': 'Temuan Utama',
      'wine.insight1': 'Skor kualitas anggur berada pada rentang 3 sampai 8, dengan sebagian besar data terkonsentrasi pada kualitas 5 dan 6.',
      'wine.insight2': 'Alcohol menunjukkan hubungan positif dengan kualitas, sedangkan volatile acidity menunjukkan hubungan negatif yang cukup jelas.',
      'wine.insight3': 'Setelah data dibersihkan, 1.087 sampel digunakan untuk training dan 272 sampel untuk testing.',
      'wine.insight4': 'Gradient Boosting Regressor memberikan performa testing akhir terbaik di antara model yang dievaluasi.',
      'wine.evaluationTitle': 'Evaluasi Model Akhir',
      'wine.eval1': 'R² Score: 0,4560 — model mampu menjelaskan sekitar 45,60% variasi kualitas anggur merah.',
      'wine.eval2': 'MAE: 0,4806 — rata-rata prediksi berbeda sekitar 0,48 poin dari skor kualitas aktual.',
      'wine.eval3': 'RMSE: 0,6208 — metrik ini memberi bobot lebih besar pada error prediksi yang lebih besar.',
      'wine.eval4': 'Model terpilih: Gradient Boosting Regressor dengan learning_rate 0,05, max_depth 3, dan n_estimators 100 setelah GridSearchCV.',
      'wine.visualsTitle': 'Hasil Analisis & Prediksi',
      'wine.distributionCaption': 'Distribusi target kualitas anggur merah',
      'wine.correlationCaption': 'Heatmap korelasi fitur fisikokimia dan kualitas',
      'wine.predictionCaption': 'Perbandingan kualitas aktual dan prediksi menggunakan Gradient Boosting Regressor',
      'wine.residualHistogramCaption': 'Distribusi residual prediksi',
      'wine.residualScatterCaption': 'Residual terhadap nilai kualitas prediksi',
      'projects.bookCbfTitle': 'Sistem Rekomendasi Buku Goodreads-10k dengan Content-Based Filtering',
      'projects.bookCbfText': 'Membangun sistem rekomendasi buku menggunakan TF-IDF dan Cosine Similarity untuk merekomendasikan judul yang serupa dari dataset Goodreads-10k, kemudian mengevaluasinya dengan Precision@10.',
      'bookcbf.back': '← Kembali ke Proyek',
      'bookcbf.title': 'Sistem Rekomendasi Buku Goodreads-10k dengan Content-Based Filtering',
      'bookcbf.subtitle': 'Machine Learning — Sistem Rekomendasi',
      'bookcbf.github': 'Lihat GitHub',
      'bookcbf.overviewTitle': 'Ringkasan Proyek',
      'bookcbf.overviewText': 'Proyek ini membangun sistem rekomendasi buku menggunakan Content-Based Filtering. Metadata buku direpresentasikan dengan TF-IDF lalu dibandingkan menggunakan Cosine Similarity sehingga sistem dapat merekomendasikan buku dengan karakteristik konten yang mirip dengan judul yang dipilih.',
      'bookcbf.toolsTitle': 'Tools yang Digunakan',
      'bookcbf.datasetTitle': 'Dataset & Fitur',
      'bookcbf.datasetText': 'Proyek menggunakan dataset Goodreads-10k yang berisi 10.000 buku dan 23 kolom. Konten rekomendasi dibentuk dari title, authors, dan original_title, sedangkan average_rating hanya digunakan sebagai kriteria relevansi heuristik saat evaluasi Precision@10.',
      'bookcbf.workflowTitle': 'Alur Machine Learning',
      'bookcbf.workflowText': 'Data Understanding → Penanganan Missing Value → Penggabungan Fitur Teks → Normalisasi Teks → Vectorization TF-IDF → Cosine Similarity → Rekomendasi Top-N → Evaluasi Precision@10',
      'bookcbf.resultsTitle': 'Hasil Rekomendasi & Evaluasi',
      'bookcbf.result1': 'Representasi TF-IDF mencakup 10.000 buku dengan maksimal 5.000 fitur teks.',
      'bookcbf.result2': 'Rata-rata Precision@10 dari lima buku yang dievaluasi adalah 0,58 dengan average_rating ≥ 4,0 sebagai kriteria relevansi heuristik.',
      'bookcbf.result3': "Harry Potter and the Sorcerer's Stone memperoleh Precision@10 sebesar 1,00, sehingga seluruh 10 rekomendasi memenuhi kriteria relevansi yang digunakan.",
      'bookcbf.result4': 'Model dapat memberikan rekomendasi tanpa membutuhkan data interaksi antar pengguna karena rekomendasi dibangun berdasarkan konten item.',
      'bookcbf.examplesTitle': 'Contoh Rekomendasi',
      'bookcbf.example1': 'Untuk The Hobbit, rekomendasi mencakup The Hobbit: Graphic Novel, The History of the Hobbit, The Silmarillion, The Children of Húrin, serta judul lain yang berkaitan dengan Middle-earth.',
      'bookcbf.example2': 'Untuk Pride and Prejudice, model menampilkan retelling terkait dan judul Jane Austen seperti Pride and Prejudice and Zombies, Eligible, Emma, dan The Complete Novels.',
      'bookcbf.example3': 'Untuk The Da Vinci Code, rekomendasi mencakup judul Robert Langdon dan buku bertema kode lainnya, termasuk The Lost Symbol.',
      'bookcbf.example4': 'Karena model bergantung pada teks judul, penulis, dan judul asli, rekomendasi dapat mengalami over-specialization sehingga item yang direkomendasikan sangat mirip dan kurang beragam.',
      'bookcbf.visualsTitle': 'Hasil Analisis & Evaluasi',
      'bookcbf.ratingCaption': 'Distribusi rata-rata rating pada dataset Goodreads-10k',
      'bookcbf.precisionCaption': 'Hasil Precision@10 untuk lima buku yang dievaluasi',
      'projects.vegetableTitle': 'Klasifikasi Gambar Sayuran dengan CNN',
      'projects.vegetableText': 'Membangun model klasifikasi gambar berbasis deep learning menggunakan Convolutional Neural Network (CNN) untuk mengenali 15 kelas sayuran dari Vegetable Image Dataset, didukung augmentasi data dan ekspor model ke beberapa format.',
      'vegetable.back': '← Kembali ke Proyek',
      'vegetable.title': 'Klasifikasi Gambar Sayuran dengan CNN',
      'vegetable.subtitle': 'Deep Learning — Klasifikasi Gambar',
      'vegetable.github': 'Lihat GitHub',
      'vegetable.overviewTitle': 'Ringkasan Proyek',
      'vegetable.overviewText': 'Proyek ini membangun model klasifikasi gambar berbasis deep learning untuk Vegetable Image Dataset. Model Convolutional Neural Network (CNN) khusus dilatih untuk membedakan 15 kelas sayuran menggunakan normalisasi gambar, augmentasi data, regularisasi dropout, dan callback selama proses training.',
      'vegetable.toolsTitle': 'Tools yang Digunakan',
      'vegetable.datasetTitle': 'Dataset & Kelas',
      'vegetable.datasetText': 'Dataset berisi 18.000 gambar sayuran dari 15 kelas: Bean, Bitter Gourd, Bottle Gourd, Brinjal, Broccoli, Cabbage, Capsicum, Carrot, Cauliflower, Cucumber, Papaya, Potato, Pumpkin, Radish, dan Tomato. Gambar diubah ke ukuran 224×224 piksel lalu dibagi menjadi 14.399 data training, 1.801 validation, dan 1.800 testing.',
      'vegetable.workflowTitle': 'Alur Deep Learning',
      'vegetable.workflowText': 'Persiapan Dataset → Pembagian Train/Validation/Test → Rescaling & Augmentasi Gambar → Arsitektur CNN → Optimasi Adam → Training dengan Callback → Evaluasi Accuracy & Loss → Inferensi → Ekspor SavedModel, TensorFlow Lite & TensorFlow.js',
      'vegetable.resultsTitle': 'Hasil Model',
      'vegetable.result1': 'Akurasi training yang dilaporkan pada notebook mencapai 98,00%.',
      'vegetable.result2': 'Akurasi validation yang dilaporkan pada notebook mencapai 98,00%.',
      'vegetable.result3': 'Akurasi testing yang dilaporkan pada notebook mencapai 97,72%.',
      'vegetable.result4': 'Model diekspor ke format SavedModel, TensorFlow Lite, dan TensorFlow.js sehingga memiliki opsi deployment yang lebih luas.',
      'vegetable.architectureTitle': 'Arsitektur Model',
      'vegetable.architecture1': 'CNN menggunakan empat blok Conv2D dengan 64, 128, 256, dan 512 filter, masing-masing diikuti MaxPooling dan Dropout.',
      'vegetable.architecture2': 'Dense layer dengan 128 unit digunakan sebelum output Softmax untuk klasifikasi 15 kelas.',
      'vegetable.architecture3': 'Augmentasi gambar mencakup rotasi, pergeseran horizontal/vertikal, shear, zoom, dan horizontal flip.',
      'vegetable.architecture4': 'EarlyStopping, ModelCheckpoint, dan ReduceLROnPlateau digunakan untuk menstabilkan training dan mempertahankan model terbaik.',
      'vegetable.visualsTitle': 'Hasil Training & Inferensi',
      'vegetable.classCountCaption': 'Distribusi jumlah gambar training pada 15 kelas sayuran',
      'vegetable.samplesCaption': 'Contoh gambar training setelah proses augmentasi',
      'vegetable.curvesCaption': 'Kurva accuracy dan loss pada training serta validation',
      'vegetable.inferenceCaption': 'Contoh hasil inferensi pada data testing',
      'projects.pjuTitle': 'Dashboard Analisis Kondisi PJU Kabupaten Tasikmalaya',
      'projects.pjuText': 'Menganalisis kondisi dan persebaran spasial Penerangan Jalan Umum (PJU) di Kabupaten Tasikmalaya melalui data cleaning, analisis geospasial, pemetaan kondisi, dan dashboard interaktif Streamlit.',
      'pju.back': '← Kembali ke Proyek',
      'pju.title': 'Dashboard Analisis Kondisi PJU Kabupaten Tasikmalaya',
      'pju.subtitle': 'Analisis Data, Pemetaan Geospasial & Dashboard Interaktif',
      'pju.github': 'Lihat GitHub',
      'pju.demo': '↗ Live Dashboard',
      'pju.overviewTitle': 'Ringkasan Proyek',
      'pju.overviewText': 'Proyek ini menganalisis kondisi dan persebaran spasial Penerangan Jalan Umum (PJU) di Kabupaten Tasikmalaya. Alurnya mencakup data cleaning, analisis eksploratif, klasifikasi kondisi, spatial join dengan batas kecamatan, pemetaan statis dan interaktif, serta dashboard Streamlit agar hasil lebih mudah dieksplorasi.',
      'pju.toolsTitle': 'Tools yang Digunakan',
      'pju.datasetTitle': 'Dataset & Pemrosesan',
      'pju.datasetText': 'Dataset mentah berisi 5.589 data PJU dengan informasi lokasi, koordinat, kondisi, jenis PJU, jenis tiang, dan jenis lampu. Setelah penanganan missing value, tersisa 4.235 data untuk analisis kondisi. Spatial join dengan GeoJSON kecamatan Kabupaten Tasikmalaya menghasilkan 3.229 data yang koordinatnya berada di dalam batas kecamatan yang dipetakan.',
      'pju.workflowTitle': 'Alur Analisis',
      'pju.workflowText': 'Load Data → Data Cleaning → Ekstraksi Kecamatan → Eksplorasi Feature Importance → Klasifikasi Kondisi → Pemisahan Koordinat → Pembuatan GeoDataFrame → Spatial Join → Ringkasan per Kecamatan → Peta Statis & Interaktif → Dashboard Streamlit',
      'pju.insightsTitle': 'Insight Utama',
      'pju.insight1': 'Setelah proses cleaning non-spasial, dataset terdiri dari 3.777 PJU berkondisi baik dan 458 PJU berkondisi rusak.',
      'pju.insight2': 'Sukahening memiliki jumlah PJU rusak tertinggi pada ringkasan kecamatan yang ditampilkan di notebook, yaitu 31 PJU rusak dengan persentase kerusakan sekitar 68,9%.',
      'pju.insight3': 'Di antara atribut teknis yang dianalisis, jenis lampu menunjukkan keterkaitan yang lebih kuat terhadap kondisi PJU dibandingkan jenis tiang pada eksplorasi feature importance.',
      'pju.insight4': 'Kesimpulan notebook menyarankan prioritas pemeliharaan pada kategori tiang dan lampu yang lebih rentan, tetapi hasilnya tetap perlu diposisikan sebagai indikasi awal karena variabel yang tersedia terbatas dan distribusi kategori tidak merata.',
      'pju.visualsTitle': 'Hasil Analisis & Geospasial',
      'pju.conditionCaption': 'Distribusi kondisi PJU: baik dibanding rusak',
      'pju.top10Caption': '10 kecamatan dengan jumlah PJU rusak terbanyak',
      'pju.percentCaption': '10 kecamatan dengan persentase PJU rusak tertinggi',
      'pju.mapCaption': 'Peta kecamatan Kabupaten Tasikmalaya berdasarkan kategori persentase PJU rusak',
      'pju.lampCaption': 'Jumlah PJU rusak berdasarkan jenis lampu',
      'pju.poleCaption': 'Jumlah PJU rusak berdasarkan jenis tiang',
      'pju.limitationsTitle': 'Catatan Penting',
      'pju.limitationsText': 'Analisis ini merupakan potret berdasarkan atribut yang tersedia. Dataset belum mencakup faktor seperti usia pemasangan, kualitas instalasi, cuaca, paparan kecelakaan, atau intensitas penggunaan. Karena beberapa kategori memiliki populasi yang jauh lebih sedikit, perbandingan persentase kerusakan perlu ditafsirkan dengan hati-hati.',

      'projects.cbfUbcfTitle': 'Analisis Perbandingan CBF dan UBCF pada Sistem Rekomendasi Buku',
      'projects.cbfUbcfText': 'Membandingkan Content-Based Filtering dan User-Based Collaborative Filtering pada skenario evaluasi yang sama untuk menganalisis akurasi rekomendasi, coverage, hit rate, serta dampak sparsity interaksi user-item.',
      'cbfubcf.back': '← Kembali ke Proyek',
      'cbfubcf.title': 'Analisis Perbandingan CBF dan UBCF pada Sistem Rekomendasi Buku',
      'cbfubcf.subtitle': 'Machine Learning — Perbandingan Sistem Rekomendasi',
      'cbfubcf.github': 'Lihat GitHub',
      'cbfubcf.overviewTitle': 'Ringkasan Proyek',
      'cbfubcf.overviewText': 'Proyek ini membandingkan Content-Based Filtering (CBF) dan User-Based Collaborative Filtering (UBCF) untuk rekomendasi buku dengan data preparation, train-test split, Top-N, dan user evaluasi yang sama. Tujuannya bukan hanya melihat metode mana yang lebih baik, tetapi juga menjelaskan penyebab perbedaan performanya.',
      'cbfubcf.toolsTitle': 'Tools yang Digunakan',
      'cbfubcf.datasetTitle': 'Dataset & Persiapan Data',
      'cbfubcf.datasetText': 'Data mentah terdiri dari 271.360 data buku, 1.149.780 data rating, dan 278.858 data user. Setelah menghapus implicit rating (rating 0), menyamakan unit interaksi pada level Book-Title, dan menerapkan iterative filtering dengan minimal 10 interaksi per user serta 3 interaksi per judul, data pemodelan berisi 4.196 user, 16.490 judul, dan 133.907 interaksi.',
      'cbfubcf.workflowTitle': 'Alur Machine Learning',
      'cbfubcf.workflowText': 'Data Understanding → Data Cleaning → Filtering Explicit Rating → Agregasi User-Title → Iterative K-Core Filtering → Split 80:20 per User → CBF dengan TF-IDF & Similarity Metadata → UBCF dengan User-Item Matrix & Similarity User → Rekomendasi Top-10 → Evaluasi Precision, Recall, F1-Score & Diagnostik',
      'cbfubcf.resultsTitle': 'Hasil Evaluasi',
      'cbfubcf.result1': 'CBF memperoleh macro-average Precision sebesar 0,0277 pada 300 user evaluasi.',
      'cbfubcf.result2': 'CBF memperoleh macro-average Recall sebesar 0,0840, lebih tinggi dibanding UBCF sebesar 0,0073.',
      'cbfubcf.result3': 'CBF memperoleh macro-average F1-Score sebesar 0,0377, sedangkan UBCF sebesar 0,0042.',
      'cbfubcf.result4': 'Kedua metode dievaluasi pada 300 user yang sama menggunakan daftar rekomendasi Top-10.',
      'cbfubcf.diagnosticTitle': 'Mengapa Hasilnya Berbeda',
      'cbfubcf.diagnostic1': 'CBF berhasil menghasilkan rekomendasi untuk seluruh user evaluasi sehingga recommendation coverage pada ringkasan diagnostik mencapai 100%.',
      'cbfubcf.diagnostic2': 'UBCF hanya menghasilkan rekomendasi untuk 75% user evaluasi, dengan rata-rata jumlah rekomendasi 7,5 dari target 10.',
      'cbfubcf.diagnostic3': 'User-item matrix pada data train UBCF sangat sparse, sekitar 99,85%, sehingga overlap rating antar-user terbatas dan peluang pembentukan neighborhood menjadi lebih kecil.',
      'cbfubcf.diagnostic4': 'CBF memperoleh hit rate 19,67% pada ringkasan diagnostik, sedangkan UBCF 3,00%. Ini menunjukkan bahwa perbedaan performa juga berkaitan dengan ketersediaan rekomendasi dan sparsity interaksi.',
      'cbfubcf.evalSetupTitle': 'Pengaturan Evaluasi',
      'cbfubcf.evalSetupText': 'Item relevan pada data test ditentukan menggunakan Book-Rating ≥ 9. Dataset hasil filtering dibagi per user menjadi sekitar 78,75% train dan 21,25% test. Evaluasi menggunakan 300 user dari 3.135 user yang dapat dievaluasi, dengan Top-N ditetapkan 10 untuk kedua metode.',
      'cbfubcf.conclusionTitle': 'Kesimpulan Proyek',
      'cbfubcf.conclusionText': 'Pada skenario eksperimen ini, CBF lebih baik dibanding UBCF pada Precision, Recall, F1-Score, recommendation coverage, dan hit rate. Hasil ini perlu dipahami sebagai hasil yang spesifik terhadap dataset dan desain evaluasi: CBF terbantu oleh metadata buku, sedangkan UBCF sangat dipengaruhi oleh user-item matrix yang sparse dan overlap interaksi antar-user yang terbatas.',
      'cbfubcf.visualsTitle': 'Visual Evaluasi & Diagnostik',
      'cbfubcf.groundTruthCaption': 'Distribusi ground truth relevansi pada data test menggunakan rating ≥ 9',
      'cbfubcf.evaluationCaption': 'Perbandingan macro-average Precision, Recall, dan F1-Score antara CBF dan UBCF',
      'projects.segTitle': 'Segmentasi Pelanggan',
      'projects.segText': 'Mengelompokkan pelanggan menggunakan K-Means untuk mengidentifikasi kelompok yang berbeda dan membantu meningkatkan strategi pemasaran.',
      'projects.emotionTitle': 'Deteksi Emosi dari Teks',
      'projects.emotionText': 'Membangun model NLP untuk mendeteksi emosi pada teks dan mengevaluasi kemampuannya memahami pesan singkat.',
      'projects.recTitle': 'Perbandingan Sistem Rekomendasi',
      'projects.recText': 'Membandingkan content-based filtering dan user-based collaborative filtering untuk memahami performa serta trade-off masing-masing metode.',
      'projects.detail': '▥ Lihat Detail',

      'cert.bannerTitle': 'Sertifikat & <span class="accent">Pencapaian</span>',
      'cert.bannerText': 'Kumpulan sertifikasi dan pencapaian yang mencerminkan komitmen saya terhadap pembelajaran berkelanjutan dan pengembangan profesional.',
      'cert.summary': 'Ringkasan Kredensial',
      'cert.certifications': 'Sertifikasi Profesional',
      'cert.certificationsText': 'Sertifikasi profesional yang telah diperoleh.',
      'cert.trainings': 'Program Pelatihan',
      'cert.trainingsText': 'Program pelatihan intensif yang telah diselesaikan.',
      'cert.achievements': 'Kelas Selesai',
      'cert.achievementsText': 'Kelas dan program pembelajaran yang telah diselesaikan.',
      'cert.item1Title': 'Information Technology Specialist – Data Analytics',
      'cert.item1Issuer': 'Information Technology Specialist (Certiport)',
      'cert.item1Text': 'Berhasil menyelesaikan persyaratan sertifikasi Data Analytics.',
      'cert.item2Title': 'Coding Camp 2025 – Machine Learning Engineer',
      'cert.item2Issuer': 'DBS Foundation & Dicoding Indonesia',
      'cert.item2Text': 'Berhasil menyelesaikan Coding Camp powered by DBS Foundation dengan spesialisasi Machine Learning Engineer.',
      'cert.item3Title': 'Belajar Dasar AI',
      'cert.item3Issuer': 'Dicoding Indonesia',
      'cert.item3Text': 'Mempelajari konsep dasar AI, data untuk AI, machine learning, dan pengantar deep learning.',
      'cert.item4Title': 'Belajar Fundamental Deep Learning',
      'cert.item4Issuer': 'Dicoding Indonesia',
      'cert.item4Text': 'Mempelajari neural network, NLP, time series, klasifikasi gambar, sistem rekomendasi, reinforcement learning, dan konversi model.',
      'cert.item5Title': 'Machine Learning Terapan',
      'cert.item5Issuer': 'Dicoding Indonesia',
      'cert.item5Text': 'Mempelajari penerapan machine learning pada predictive analytics, analisis sentimen, computer vision, dan sistem rekomendasi.',
      'cert.item6Title': 'Belajar Machine Learning untuk Pemula',
      'cert.item6Issuer': 'Dicoding Indonesia',
      'cert.item6Text': 'Mempelajari workflow machine learning, klasifikasi, regresi, clustering, feature engineering, serta optimasi model.',
      'cert.item7Title': 'Belajar Fundamental Pemrosesan Data',
      'cert.item7Issuer': 'Dicoding Indonesia',
      'cert.item7Text': 'Mempelajari pemrosesan data dengan Python, repositori data, ETL pipeline, dan automasi data pipeline.',
      'cert.item8Title': 'Belajar Analisis Data dengan Python',
      'cert.item8Issuer': 'Dicoding Indonesia',
      'cert.item8Text': 'Mempelajari descriptive statistics, data wrangling, exploratory data analysis, visualisasi, dan pengembangan dashboard dengan Streamlit.',
      'cert.item9Title': 'Belajar Dasar Structured Query Language (SQL)',
      'cert.item9Issuer': 'Dicoding Indonesia',
      'cert.item9Text': 'Mempelajari konsep basis data relasional, DBMS, struktur SQL, dan query dasar untuk mengelola data.',
      'cert.item10Title': 'Memulai Pemrograman dengan Python',
      'cert.item10Issuer': 'Dicoding Indonesia',
      'cert.item10Text': 'Mempelajari dasar Python, interaksi dengan data, control flow, array, fungsi, OOP, testing, dan library populer.',
      'cert.item11Title': 'Belajar Dasar Visualisasi Data',
      'cert.item11Issuer': 'Dicoding Indonesia',
      'cert.item11Text': 'Mempelajari persiapan data dan praktik visualisasi efektif menggunakan Google Sheets serta prinsip data storytelling.',
      'cert.item12Title': 'Belajar Dasar Git dengan GitHub',
      'cert.item12Issuer': 'Dicoding Indonesia',
      'cert.item12Text': 'Mempelajari dasar Git dan GitHub, branching, kolaborasi, code review, serta penggunaan GitHub sebagai portofolio.',
      'cert.item13Title': 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
      'cert.item13Issuer': 'Dicoding Indonesia',
      'cert.item13Text': 'Mempelajari logika pemrograman, gerbang logika, computational thinking, dan dasar pemecahan masalah.',
      'cert.item14Title': 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      'cert.item14Issuer': 'Dicoding Indonesia',
      'cert.item14Text': 'Mempelajari kebutuhan aplikasi, flowchart, dasar HTML, CSS, JavaScript, dan dokumentasi pengembangan software.',
      'cert.item15Title': 'Belajar Dasar Data Science',
      'cert.item15Issuer': 'Dicoding Indonesia',
      'cert.item15Text': 'Mempelajari fundamental data science, proses analisis data, tools pendukung, penerapan machine learning, dan eksplorasi karier.',
      'cert.item16Title': 'Belajar Dasar Manajemen Proyek',
      'cert.item16Issuer': 'Dicoding Indonesia',
      'cert.item16Text': 'Mempelajari dasar manajemen proyek, siklus proyek, metodologi, struktur organisasi, dan eksplorasi karier manajemen proyek.',
      'cert.item17Title': 'Belajar Strategi Pengembangan Diri',
      'cert.item17Issuer': 'Dicoding Indonesia',
      'cert.item17Text': 'Mempelajari growth mindset, penggalian potensi, manajemen waktu, adaptability, dan perencanaan pengembangan diri.',
      'cert.item18Title': 'Belajar Dasar Pemrograman Web',
      'cert.item18Issuer': 'Dicoding Indonesia',
      'cert.item18Text': 'Mempelajari HTML, CSS, layout responsif dengan Flexbox, JavaScript dan DOM, web storage, serta dasar pengembangan website.',
      'cert.item19Title': 'Meniti Karier sebagai Software Developer',
      'cert.item19Issuer': 'Dicoding Indonesia',
      'cert.item19Text': 'Mempelajari berbagai jalur karier software developer dan persiapan untuk memilih serta menjalani jalur karier yang sesuai.',
      'cert.view': '↗ Lihat Kredensial',

      'contact.title': 'Hubungi <span class="accent">Saya</span>',
      'contact.subtitle': 'Mari berkolaborasi dalam proyek data dan AI.',
      'contact.preferred': 'Kontak Utama',
      'contact.preferredValue': 'Email atau LinkedIn',
      'contact.name': 'Nama',
      'contact.email': 'Email',
      'contact.subject': 'Subjek',
      'contact.message': 'Pesan',
      'contact.namePlaceholder': 'Nama Anda',
      'contact.emailPlaceholder': 'Email Anda',
      'contact.subjectPlaceholder': 'Pesan ini tentang apa?',
      'contact.messagePlaceholder': 'Tulis pesan Anda di sini...',
      'contact.send': '➤ Kirim Pesan',
      'contact.sending': 'Mengirim...',
      'contact.success': 'Pesan berhasil dikirim. Terima kasih!',
      'contact.error': 'Pesan belum berhasil dikirim. Silakan coba lagi atau hubungi saya melalui email.'
    }
  };

  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const themeKnob = document.querySelector('.theme-knob');
  const languageOptions = document.querySelectorAll('[data-lang]');

  function getTabState() {
    try {
      if (!window.name || !window.name.startsWith('rinaPortfolioState:')) return {};
      return JSON.parse(window.name.slice('rinaPortfolioState:'.length)) || {};
    } catch (error) {
      return {};
    }
  }

  function setTabState(nextState) {
    const current = getTabState();
    window.name = 'rinaPortfolioState:' + JSON.stringify({ ...current, ...nextState });
  }

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // file:// pages can restrict localStorage in some browsers.
    }
  }

  function setTheme(theme) {
    const dark = theme === 'dark';
    root.classList.toggle('theme-dark', dark);
    root.classList.toggle('theme-light', !dark);
    body.classList.toggle('dark-mode', dark);
    if (themeToggle) themeToggle.checked = dark;
    if (themeKnob) themeKnob.textContent = dark ? '☀' : '☾';
    const selectedTheme = dark ? 'dark' : 'light';
    safeSet('portfolio-theme', selectedTheme);
    setTabState({ theme: selectedTheme });
  }

  function setLanguage(lang) {
    const language = lang === 'id' ? 'id' : 'en';
    const dict = translations[language];

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dict[key] !== undefined) element.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const key = element.dataset.i18nHtml;
      if (dict[key] !== undefined) element.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) element.setAttribute('placeholder', dict[key]);
    });

    languageOptions.forEach((option) => {
      const active = option.dataset.lang === language;
      option.classList.toggle('active', active);
      option.classList.toggle('inactive', !active);
      option.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    root.lang = language === 'id' ? 'id' : 'en';
    safeSet('portfolio-language', language);
    setTabState({ language });

    document.querySelectorAll('[data-site-view-count][data-count]').forEach((element) => {
      const numericValue = Number(element.dataset.count);
      if (Number.isFinite(numericValue)) {
        element.textContent = new Intl.NumberFormat(language === 'id' ? 'id-ID' : 'en-US').format(numericValue);
      }
    });
  }

  const tabState = getTabState();
  const savedTheme = tabState.theme || safeGet('portfolio-theme') || 'dark';
  const savedLanguage = tabState.language || safeGet('portfolio-language') || 'en';
  setTheme(savedTheme);
  setLanguage(savedLanguage);

  if (themeToggle) {
    themeToggle.addEventListener('change', function () {
      setTheme(this.checked ? 'dark' : 'light');
    });
  }

  languageOptions.forEach((option) => {
    option.addEventListener('click', function () {
      setLanguage(this.dataset.lang);
    });
    option.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setLanguage(this.dataset.lang);
      }
    });
  });


  // Shared portfolio view counter. One visit is counted per browser tab/session,
  // while every page can display the same total count.
  const viewCountElements = document.querySelectorAll('[data-site-view-count]');

  function formatViewCount(value) {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue)) return '—';
    const language = root.lang === 'id' ? 'id-ID' : 'en-US';
    return new Intl.NumberFormat(language).format(numericValue);
  }

  async function updatePortfolioViewCount() {
    if (!viewCountElements.length) return;

    const namespace = 'rinarismawati-portfolio-2026';
    const key = 'portfolio-total';
    let alreadyCounted = false;

    try {
      alreadyCounted = sessionStorage.getItem('portfolio-view-counted') === '1';
    } catch (error) {
      // Continue without session storage if a browser restricts it.
    }

    const endpoint = `https://counterapi.com/api/${namespace}/view/${key}${alreadyCounted ? '?readOnly=true' : ''}`;

    try {
      const response = await fetch(endpoint, { cache: 'no-store' });
      if (!response.ok) throw new Error('View counter request failed');
      const data = await response.json();

      viewCountElements.forEach((element) => {
        element.dataset.count = String(data.value);
        element.textContent = formatViewCount(data.value);
      });

      if (!alreadyCounted) {
        try {
          sessionStorage.setItem('portfolio-view-counted', '1');
        } catch (error) {
          // Ignore storage restrictions; the displayed count still works.
        }
      }
    } catch (error) {
      viewCountElements.forEach((element) => {
        element.textContent = '—';
      });
    }
  }

  updatePortfolioViewCount();

  // Project category filters (Projects page only).
  const projectFilterPills = document.querySelectorAll('.filter-pill[data-filter]');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  function applyProjectFilter(filter) {
    if (!projectFilterPills.length || !projectCards.length) return;

    projectFilterPills.forEach((pill) => {
      const active = pill.dataset.filter === filter;
      pill.classList.toggle('active', active);
      pill.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    projectCards.forEach((card) => {
      const categories = (card.dataset.category || '').split(/\s+/).filter(Boolean);
      card.hidden = filter !== 'all' && !categories.includes(filter);
    });
  }

  projectFilterPills.forEach((pill) => {
    pill.addEventListener('click', function () {
      applyProjectFilter(this.dataset.filter || 'all');
    });

    pill.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        applyProjectFilter(this.dataset.filter || 'all');
      }
    });
  });

  // Contact form submission (Contact page only).
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      const language = root.lang === 'id' ? 'id' : 'en';
      const submitButton = contactForm.querySelector('.send-btn');
      const formData = new FormData(contactForm);

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = translations[language]['contact.sending'];
      }
      if (formStatus) {
        formStatus.className = 'form-status';
        formStatus.textContent = translations[language]['contact.sending'];
      }

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          throw new Error(result.error || 'Form submission failed');
        }

        contactForm.reset();
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = translations[language]['contact.success'];
        }
      } catch (error) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = translations[language]['contact.error'];
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = translations[language]['contact.send'];
        }
      }
    });
  }


})();
