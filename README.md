# Capstone Project - AirGym.

## Introduction

Airgym is an activewear lending service that replaces a person's need to pack activewear when they travel. It is a full-stack web application built with Python, Flask, and Firebase for the backend and React, JavaScript for the frontend.

## Where Do I Start?

Fork and clone this project to your local directory. In order to access this project's sign-up and sign-in features, you will need to create a Firebase account for an API key (If you'd like to demo the project without these features, make sure to disable the Firebase configuration in the `config.py` file). Once you have your API key, go to the `config.py` file and insert your key on line 33 inside the object labeled `configuration`. Now, you're ready to generate the app!

## Generating Pipenv

To install all the necessary dependencies, in your console, run:

$ pipenv install

After your environment is set up, run:

$ pipenv shell

***

## Generating Database

While in your `pipenv shell`, `cd` into the `server/` directory, then run `flask db upgrade` to ensure you have the latest database. 

## Running the Application

### `client-app/`

Open a new terminal outside of the pipenv shell and navigate to the `client-app/` directory. Run
`npm install` to install all of the front-end dependencies and then run `npm start`. This should start up the development server.

### `server/`

Go to your pipenv shell and run `python app.py` to start the backend server.

You should now be able to access the web application on your browser! 

** Some images may not be retrieved from the image URLs because the database is not being kept up to date. This will not affect the overall functionality of the app but if you find anything, please feel free to reach out via Github or Linkedin.

https://www.linkedin.com/in/beaukim/

Happy Coding!