from app.models import db, User
import datetime

# Adds a demo user, you can add other users here if you want
def seed_auctions():
    # demo = Auction(
    #     vin='5TFCZ5AN2KX186676', year='2019', make='Toyota', model='Tacoma', type='Truck', reserve_price=39000, description='This truck has been absolutely amazing!', time_left=datetime.time(2021, 8, 24), start_date=datetime.date(2021) )
    # sunny = User(
    #     username='sunny', email='sunny@user.com', first_name='Sunny', last_name='Mallick', password='password')

    # db.session.add(demo)
    # db.session.add(sunny)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()