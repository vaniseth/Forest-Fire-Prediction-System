# Forest-Fire-Prediction-System

Forest Fire Prediction System gives the most accurate predictions of when fire can take place. Project made for Software Engineering Lab 2023.

## Description

* Forest Fire Prediction is a Supervised Machine Learning Model. This model is trained is using Rregression and Classification algorithms.
* Dataset used is **Algerian Forest Fires from UCI** [link](https://archive.ics.uci.edu/ml/datasets/Algerian+Forest+Fires+Dataset++#) . The datatset contains forest fire observations and data of regions of Algeria: the Bejaia region and the Sidi Bel-Abbes region.
* The timeline of this dataset is from June 2012 to September 2012. In this project, we focused on whether certain weather features could predict forest fires in these regions using few Machine Learning algorithms.

## Steps

1. Data Collection
2. Data Pre-Processing
3. Exploratory Data Analysis
4. Feature Engineering
5. Feature Selection
6. Model Building
7. Model Selection
8. Hyperparameter Tuning
9. Flask framework
10. Model deployment

## Model Development

### **Regression**

* For regression analysis **FWI(Fire weather Index)** considered as dependent feature because it highly correlated with classes variable with more than 90% correlation.

**Model Used:**

1. Linear regression
2. Lasso Regression
3. Ridge Regression
4. Decision tree
5. Random forest
6. K-Nearest Neighbour regressor
7. Support Vector Regressor

### **Classification**

* For Classification **Classes** is dependent feature which is a **Binary Classification(fire, not fire)**

**Model Used:**

1. Logistic Regression
2. Decision Tree
3. Random Forest
4. K-Nearest Neighbour
5. XGboost

## Model Selection

* HyperParameter Tuning Randomized Gridsearch CV is done for top 2 models for both Regression and Classification.
* For Classification `Stratified Kfold Cross-Validation metrics` is used based best Mean CV Accuracy Model is used for Model Deployment.
* For Regression `R2 score metrics` is used to select best model The R2 score is one of the performance evaluation measures for regression-based machine learning models.

## Flask Integration

* Importing the Flask module and creating a Flask web server from the Flask module.
* Create an object **app** in flask class with `__name__` which represents current app.py file.
* Create `/` route to render default page html.
* `/predict_api` route for api testing using `Postman`
* Create a route `/predict` `/predictR` to get user input for Classification and Regression respectively.
* Run the flask app with `app.run()` code.

## Setup

Try out the project, follow these steps:

1. Clone the repository

   ```powershell
   git clone https://github.com/vaniseth/Forest-Fire-Prediction-System.git
   ```
2. Change the directory to the project directory.

   ```powershell
   cd Forest-Fire-Prediction-System
   ```
3. Install the dependencies.

   ```powershell
   pip install -r requirements.txt 
   ```
4. Run the app.py to start the app

   ```powershell
   flask run
   ```
