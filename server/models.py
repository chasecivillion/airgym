from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from config import db


class User(db.Model, SerializerMixin):

    __tablename__ = 'users'

    serialize_rules = ('-pods','-hotels','-created_at', '-updated_at')

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    idToken = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    pods = db.relationship('Pod', back_populates='user',
                           cascade="all, delete-orphan")
    hotels = association_proxy('pods', 'hotel')

    @validates('email')
    def email_address(self, key, email):
        if '@' and '.com' in email:
            return email
        elif not email:
            raise ValueError('Email must be provided')
        else:
            raise ValueError('Email does not include "@" or ".com"')



class Hotel(db.Model, SerializerMixin):

    __tablename__ = 'hotels'

    serialize_rules = ('-pods','-users')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    images = db.Column(db.String)
    latitude = db.Column(db.Integer)
    longitude = db.Column(db.Integer)
    distance = db.Column(db.Integer)
    city = db.Column(db.String)

    pods = db.relationship('Pod', back_populates='hotel',
                           cascade="all, delete-orphan")
    users = association_proxy('pods', 'user')


class Pod(db.Model, SerializerMixin):

    __tablename__ = 'pods'

    serialize_rules = ('-user','-hotel','-created_at', '-updated_at')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotels.id'))

    user = db.relationship('User', back_populates='pods')
    hotel = db.relationship('Hotel', back_populates='pods')

    @validates('name')
    def name_handler(self, key, name):
        pods = ['breeze pod', 'cloud pod', 'vapor pod']
        for pod in pods:
            if pod == name.lower():
                return name
        raise ValueError('Please include a proper pod name.')