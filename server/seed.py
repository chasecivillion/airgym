from app import app
from models import db, User, Hotel, Pod
from hotel_data import paris

with app.app_context():
   
   data = paris['data']
   
   print("Deleting data...")
   User.query.delete()
   Hotel.query.delete()
   Pod.query.delete()

   print("Creating Users...")

   u1 = User(idToken='chasecivillion', email='beaukim3@gmail.com')
   db.session.add(u1)

   print("Creating Hotels...")

   for i in range(len(data)):
        h1 = Hotel(
        name=data[i]['name'],
        images=data[i]['image'],
        latitude=data[i]['geoCode']['latitude'],
        longitude=data[i]['geoCode']['longitude'],
        city=data[i]['iataCode'],
        )
        db.session.add(h1)
        db.session.commit()

   print("Creating Pods...")

   p1 = Pod(name='basic', 
            image="https://cdn.shopify.com/s/files/1/0247/7326/3445/products/BuildYour121_1080x.jpg?v=1669045190", 
            user_id=u1.id, hotel_id=h1.id)
   db.session.add(p1)

   db.session.commit()

   print("Seeding done!")



