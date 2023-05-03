from flask import session, request, make_response, redirect, jsonify, Response
# from flask_session import Session
from flask_restful import Resource
from flask_cors import CORS, cross_origin
from random import sample
from models import User, Hotel, Pod
from config import app, db, api, secret_key, auth
import ipdb

CORS(app)
app.secret_key = secret_key
# app.config["SESSION_PERMANENT"] = False
# app.config["SESSION_TYPE"] = "filesystem"
# Session(app)

# new_user = auth.create_user_with_email_and_password(email, password)

# user = auth.sign_in_with_email_and_password(email, password)

# info = auth.get_account_info(user['idToken'])

# auth.send_email_verification(user['idToken'])

# auth.send_password_reset_email(email)




######################################################################
######################################################################
###################################  LOGIN ROUTES#####################
######################################################################
@app.route('/sign_up', methods=['GET', 'POST'])
@cross_origin()
def create_account():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        user = auth.create_user_with_email_and_password(email, password)
        token = auth.get_account_info(user['idToken'])
        localId = token['users'][0]['localId']
        # ipdb.set_trace()
        new_user = User(
            email = data['email'],
            idToken = localId
            )
        if not new_user:
            return make_response(
                {'error': 'User not found'},
                404
            )
        db.session.add(new_user)
        db.session.commit()
        response = {'User created?': 'success'}
        return make_response(
            response,
            200,
        )
    

@app.route('/sign_in', methods =['POST'])
@cross_origin(methods=['POST'], supports_credentials=True)
def sign_in():
    data = request.get_json()
    email = data['email']
    password = data['password']
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        idToken = auth.get_account_info(user['idToken'])
        localId = idToken['users'][0]['localId']
        session['user'] = email
    except:
        return redirect('/')
    response = make_response(
        [{'idToken': f'{localId}'},
            {'email': f'{idToken["users"][0]["email"]}'}],
        200
    )
    response.set_cookie('idToken', localId)
    response.set_cookie('email', email)
    return response


@app.route('/cookies')
def getCookie():
    value = request.cookies.get('email')
    id = request.cookies.get('id')
    if value == None:
        return make_response(
            [{'email': 'guest'},
             {'idToken': -1 }],
             200
        )
    return make_response(
        [{'email': value },
         {'idToken': id }],
        200
    )


@app.route('/sign_out', methods=['POST'])
@cross_origin()
def sign_out():
    data = request.get_json()
    user = data['user']
    name = session.get('user')
    for key in list(session.keys()):
        session.pop(key)
    response = make_response(
        {'log out': 'successful'},
        200
    )
    response.set_cookie('email', 'guest')
    response.set_cookie('idToken', '')
    return response


######################################################################
######################################################################
###################################   Hotel Routes ###################
######################################################################

class Hotels(Resource):
    def get(self):
        hotels = Hotel.query.all()
        return make_response(
            [hotel.to_dict() for hotel in hotels],
            200
        )
api.add_resource( Hotels,'/hotels' )

class HotelById(Resource):
    def get(self, id):
        hotel = Hotel.query.filter_by(id=id).first()
        hotels = Hotel.query.all()
        curated_hotels = sample(hotels, 7)
        curated_hotels.append(hotel)
        curated_hotels.reverse()
        
        return make_response(
            [hotel.to_dict() for hotel in curated_hotels],
            200
        )
api.add_resource(HotelById, '/hotels/<int:id>')

class Pods(Resource):
    def get(self):
        pods = Pod.query.all()
        return make_response(
            [pod.to_dict() for pod in pods],
            200
        )
    
    def post(self):
        data = request.get_json()
        new_pod = Pod(
            name = data['name'],
            image = data['image'],
            user_id = data['user_id'],
            hotel_id = data['hotel_id']
        )

        db.session.add(new_pod)
        db.session.commit()
        return make_response(
            new_pod.to_dict(),
            201
        )
api.add_resource(Pods, '/pods')

class UserPods(Resource):
    def get(self, idToken):
        user = User.query.filter_by(idToken=idToken).first()
        if not user:
            return make_response(
                {'error': 'user not found'},
                404
            )
        return make_response(
            user.to_dict(only=('pods',)),
            200
        )
api.add_resource(UserPods, '/user/<string:idToken>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)