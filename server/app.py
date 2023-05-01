from flask import session, request, make_response, redirect, jsonify, Response
from flask_restful import Resource
from flask_cors import CORS, cross_origin
from random import sample
from models import User, Hotel, Pod
from config import app, db, api, secret_key, auth

CORS(app)
app.secret_key = secret_key

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
        new_user = User(
            username = "test",
            email = data['email']
            )
        if not new_user:
            return make_response(
                {'error': 'User not found'},
                404
            )
        db.session.add(new_user)
        db.session.commit()
        # auth.create_user_with_email_and_password(email, password)
        response = {'User created?': 'success'}
        return make_response(
            response,
            200,
        )

class SignIn(Resource):
    def post(self):
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            auth.sign_in_with_email_and_password(email, password)
            session['user'] = email
        except:
            return make_response(
                {'error':'login failed'},
                400
            )
        return make_response(
            {'Login token': 'Accepted'},
            200
        )
    
api.add_resource(SignIn, '/sign_in')

class SignOut(Resource):
    def get(self):
        session.pop('user')
        return redirect('/')
    
api.add_resource(SignOut,'/sign_out')

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
api.add_resource(Hotels, '/hotels')

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
api.add_resource(HotelById, f'/hotels/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

