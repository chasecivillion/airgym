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
    

# @app.route('/sign_in', methods =['GET','POST'])
# @cross_origin(methods=['GET','POST'], supports_credentials=True)
# def sign_in():
#     if request.method == 'POST':
#         data = request.get_json()
#         email = data['email']
#         password = data['password']
#         try:
#             user = auth.sign_in_with_email_and_password(email, password)
#             idToken = auth.get_account_info(user['idToken'])
#             localId = idToken['users'][0]['localId']
#             session['user'] = email
#         except:
#             return redirect('/')
#         response = make_response(
#             # [{'idToken': f'{localId}'},
#             #     {'email': f'{idToken["users"][0]["email"]}'}],
#             {'cookie':'cookie'},
#             200
#         )
#         response.set_cookie('user',
#                             'user')
#         return response
    
@app.route('/makecookie')
def makeCookie():
    response = make_response(
        {'cookies': 'yes'}, 200
    )
    response.set_cookie(
        'user', 'user')
    return response


@app.route('/cookies')
def getCookie():
    name = request.cookies.get('user')
    return f'Cookies: {name}'




@app.route('/sign_out', methods=['GET', 'POST'])
@cross_origin()
def sign_out():
    if request.method == "GET":
        return make_response(
            {'bye':'bye'},
            200
        )
    if request.method == "POST":
        data = request.get_json()
        user = data['user']
        name = session.get('user')
        if user == name:
            session.pop('user')
        response = make_response(
            {'log out': 'successful'},
            200
        )
        response.set_cookie('localId', None)
        return response


######################################################################
######################################################################
###################################   Hotel Routes ###################
######################################################################

@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def home():
    if request.method == 'GET':
        localId = request.cookies.get('localId')
        hotels = Hotel.query.all()
        response = make_response(
            [hotel.to_dict() for hotel in hotels],
            200
        )
        if localId == None:
            return response
        return response
        
    elif request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            idToken = auth.get_account_info(user['idToken'])
            localId = idToken['users'][0]['localId']
            response = make_response(
                [{'idToken': f'{idToken}'},
                 {'email': f'{email}'}],
                200
            )
            response.set_cookie(
                'session', localId, httponly=True, secure=True, domain='127.0.0.1')
            return response
        except:
            return redirect('/')

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


class UserById(Resource):
    def get(self, idToken):
        user = User.query.filter_by(idToken=idToken).first()
        return make_response(
            user.to_dict(),
            200
        )
api.add_resource(UserById, '/user/<string:idToken>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)