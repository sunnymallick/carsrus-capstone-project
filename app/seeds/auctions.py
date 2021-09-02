from app.models import db, Auction
import datetime

# Adds a demo user, you can add other users here if you want
def seed_auctions():
    tacoma = Auction(
        vin='5TFCZ5AN2KX186676', year='2019', make='Toyota', model='Tacoma', type='Truck', city='Salt Lake City', state='Utah', description='This truck has been absolutely amazing!', miles='48000', color='White', engine='3.5L V6', transmission='6-speed Automatic', img_url_1='url1', img_url_2='url2', img_url_3='url3', img_url_4='url4', start_date=datetime.date(2021, 9, 5), end_date=datetime.date(2021, 9, 12), user_id=2)
    volvo = Auction(
        vin='YV1672MW0B2637326', year='2011', make='Volvo', model='V50', type='Wagon', city='Salt Lake City', state='Utah', description='This Volvo is powered by a turbocharged 2.5L 5-cylinder motor making 225hp. This vehicle seats 5 comfortably and drives smooth on long trips.', miles='85000', color='Gray', engine='2.5L I5', transmission='5-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06934.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06936.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06945.jpg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06946.jpg', start_date=datetime.date(2021, 8, 31), end_date=datetime.date(2021, 9, 7), user_id=2)   
    db.session.add(tacoma)
    db.session.add(volvo)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_auctions():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()