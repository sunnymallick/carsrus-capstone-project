from app.models import db, Auction
import datetime

# Adds a demo user, you can add other users here if you want
def seed_auctions():
    tacoma = Auction(
        vin='5TFCZ5AN2KX186676', year='2019', make='Toyota', model='Tacoma', type='Truck', city='Salt Lake City', state='Utah', description='This truck has been absolutely amazing!', miles='48000', color='White', engine='3.5L V6', transmission='6-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0210.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0286.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0371.jpg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0454+(2).jpg', start_date=datetime.date(2021, 9, 5), end_date=datetime.date(2021, 9, 12), user_id=2)
    
    volvo = Auction(
        vin='YV1672MW0B2637326', year='2011', make='Volvo', model='V50', type='Wagon', city='Salt Lake City', state='Utah', description='This Volvo is powered by a turbocharged 2.5L 5-cylinder motor making 225hp. This vehicle seats 5 comfortably and drives smooth on long trips.', miles='85000', color='Gray', engine='2.5L I5', transmission='5-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06934.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06936.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06945.jpg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06946.jpg', start_date=datetime.date(2021, 8, 31), end_date=datetime.date(2021, 9, 7), user_id=2)

    wrangler = Auction(
        vin='1C4BJWCG4EL223522', year='2014', make='Jeep', model='Wranger', type='Truck', city='Logan', state='Utah', description='This is a 2014 Jeep Wrangler with a black-on-black interior and exterior. This specific Jeep is the Rubicon trim, which comes with disconnecting sway-bars and front and rear locking differentials.', miles='47152', color='Black', engine='3.6L V6', transmission='5-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06758.JPG', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06765.JPG', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06767.JPG', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06768.JPG', start_date=datetime.date(2021, 9, 7), end_date=datetime.date(2021, 9, 14), user_id=1)

    model_s = Auction(
        vin='5YJSA1E23HF215391', year='2017', make='Tesla', model='Model S', type='Car', city='Denver', state='Colorado', description='This is a 2017 Tesla Model S finished with a blue exterior and a light interior. This specific Model S is the 100D trim, which boasts AWD and a 335 mile electric range!', miles='57652', color='Blue', engine='Dual Electric Motors', transmission='1-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/DSC06798.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/DSC06811.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/interior-1.jpeg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/interior-2.jpeg', start_date=datetime.date(2021, 8, 10), end_date=datetime.date(2021, 8, 17), user_id=1)   
    
    db.session.add(tacoma)
    db.session.add(volvo)
    db.session.add(wrangler)
    db.session.add(model_s)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_auctions():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()