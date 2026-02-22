# A Machine Learning System to Predict Fire Weather Index (FWI)

## Overview

Tempest: FWI Predictor is an end-to-end Machine Learning + Web Application designed to predict the Fire Weather Index (FWI) using environmental and meteorological parameters.
The system helps forest departments, disaster management teams, climate researchers, and planners to assess wildfire risk early and take preventive actions.
The project follows a modular internship-style workflow, covering:

Data collection & preprocessing
Exploratory data analysis (EDA)
Feature engineering & scaling
Model training & optimization
Model evaluation
Deployment via Flask with an interactive UI

## Why Fire Weather Index (FWI)?

FWI is a globally used indicator that measures fire danger based on:

Temperature
Relative Humidity
Wind Speed
Rainfall
Fuel moisture and dryness indicators
Higher FWI → Higher wildfire risk

## System Workflow

<img width="997" height="938" alt="image" src="https://github.com/user-attachments/assets/37307662-bddb-43f3-b52f-b1cce3d071bb" />

## Web interface of the application

### Home page(input page)

<img width="1881" height="913" alt="Screenshot 2026-01-21 201839" src="https://github.com/user-attachments/assets/0f5f5d43-828f-4cef-995c-f75464318076" />

### Result page 

<img width="1881" height="908" alt="Screenshot 2026-01-21 201915" src="https://github.com/user-attachments/assets/6c6464bf-042e-4224-83ee-f7e107e8b3d3" />


## Project Structure

FWI_Project/
│
├── data/
│   └── FWI Dataset.csv
│
├── notebooks/
│   └── FWI.ipynb
│
├── models/
│   ├── ridge.pkl
│   └── scaler.pkl
│
├── FWI_app/
│   ├── app.py
│   ├── templates/
│   │   ├── index.html
│   │   └── result.html
│   └── static/
│       └── style.css
│
├── requirements.txt
├── README.md

## Dataset Description

The dataset contains real wildfire-related meteorological data.

Input Features
Temperature
Relative Humidity (RH)
Wind Speed (Ws)
Rain
FFMC
DMC
DC
ISI
BUI

## Target Variable

FWI (Fire Weather Index)

## User Interface (UI)

Clean and user-friendly layout
Fire-themed design
Real-time prediction
Result visualization with charts

## How to Run the Project Locally

### Clone Repository
git clone -b U-P-Mahendra https://github.com/Aspire-Infolabs/FWI_Prediction_Batch8.git
cd FWI_Prediction_Batch8

### Create and activate an Virtual Environment

### Windows
python -m venv venv

venv\Scripts\activate

### macOS / Linux
python3 -m venv venv 

source venv/bin/activate

### Install Dependencies
pip install -r requirements.txt

### Run Flask App
cd FWI_app
python app.py

### Open Browser
http://127.0.0.1:5000

## Tech Stack

Python
Pandas, NumPy
Matplotlib, Seaborn
Scikit-learn
Flask
HTML, CSS
## Author

U P Mahendra
Bachelor of Engineering in Artificial Intelligence and Machine Learning
Project developed as part of SpringBoard Internship Program





