# Remote library imports
from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from secret import api_key
import pyrebase


# Instantiate app, set attributes
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)


# Instantiate REST API
api = Api(app)



configuration = {
    "apiKey": api_key,
    "authDomain": "authentication-a41c7.firebaseapp.com",
    "projectId": "authentication-a41c7",
    "storageBucket": "authentication-a41c7.appspot.com",
    "messagingSenderId": "473573058453",
    "appId": "1:473573058453:web:f239b179e85d8a40e9789c",
    "measurementId": "G-X30ZLY1Z1P",
    "databaseURL": ""
}

# firebase
firebase = pyrebase.initialize_app(configuration)
auth = firebase.auth()

