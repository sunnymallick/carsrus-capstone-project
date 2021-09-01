from app.models import db, Auction
import datetime

# Adds a demo user, you can add other users here if you want
def seed_auctions():
    demo = Auction(
        vin='5TFCZ5AN2KX186676', year='2019', make='Toyota', model='Tacoma', type='Truck', city='Salt Lake City', state='Utah', description='This truck has been absolutely amazing!', miles='48000', color='white', engine='3.5L V6', transmission='6-speed Automatic', img_url_1='url1', img_url_2='url2', img_url_3='url3', img_url_4='url4', start_date=datetime.date(2021, 9, 5), end_date=datetime.date(2021, 9, 12), user_id=2)
        
    db.session.add(demo)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_auctions():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()