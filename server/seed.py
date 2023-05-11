from app import app
from faker import Faker
from random import choice as rc
from models import db, User, Hotel, Pod
from hotel_data import paris

with app.app_context():
     
	fake = Faker()
	fake.unique.clear()
	emails = [fake.unique.first_name() + '.' + fake.unique.last_name() + '@gmail.com' for i in range(500)]

	data = paris['data']

	print("Deleting data...")
	User.query.delete()
	Hotel.query.delete()
	Pod.query.delete()

	print("Creating Users...")
	
	user = [
		User(
			email = emails[i],
			idToken = fake.bothify(text= '??###???#?##????')
		)
	for i in range(500)]
	

	db.session.add_all(user)
	db.session.commit()

	print("Creating Hotels...")

	hotel = [
		Hotel(
	name=data[i]['name'],
	images=data[i]['image'],
	latitude=data[i]['geoCode']['latitude'],
	longitude=data[i]['geoCode']['longitude'],
	distance=data[i]['distance']['value'],
	city=data[i]['iataCode'],
	)
	for i in range(len(data))]
	db.session.add_all(hotel)
	db.session.commit()

	print("Creating Pods...")

	pods = ['Breeze Pod', 'Cloud Pod', 'Vapor Pod']

	breezePod = [
		Pod(name='Breeze Pod', 
			image='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/83907808_3350889531605674_3221206823252000768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=zCBRSTTQLJ8AX_Cmnas&_nc_ht=scontent-iad3-2.xx&oh=00_AfBIes2Mgww_rxZv_LUUVJ1_q8QZcfbnOVwC0MA-ldfnRQ&oe=64820D04', 
			user_id=rc(user).id, hotel_id=rc(hotel).id)
	for i in range(1000)]
	db.session.add_all(breezePod)
	db.session.commit()

	cloudPod = [
		Pod(name='Cloud Pod', 
			image='https://www.shopbala.com/static/91c9d17a1ecad3bc41499c771733d76c/d28fc/PLP-12-Mobile-1.jpg', 
			user_id=rc(user).id, hotel_id=rc(hotel).id)
	for i in range(1000)]
	db.session.add_all(cloudPod)
	db.session.commit()

	vaporPod = [
		Pod(name='Vapor Pod', 
			image='https://static.dezeen.com/uploads/2014/08/Nike-pop-up-robert-storey-studio_dezeen_784_5.jpg', 
			user_id=rc(user).id, hotel_id=rc(hotel).id)
	for i in range(1000)]
	db.session.add_all(vaporPod)
	db.session.commit()

	print("Seeding done!")



