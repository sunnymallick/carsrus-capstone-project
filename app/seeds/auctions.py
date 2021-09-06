from app.models import db, Auction
import datetime

# Adds a demo user, you can add other users here if you want
def seed_auctions():
    tacoma = Auction(
        vin='5TFCZ5AN2KX186676', year='2019', make='Toyota', model='Tacoma', type='Truck', city='Salt Lake City', state='UT', description='This is a 2019 Toyota Tacoma with the TRD-Offroad package with a white exterior and black interior. This Tacoma has 4WD and a rear-locking differential.', miles='48642', color='White', engine='3.5L V6 Engine', transmission='6-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0210.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0286.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0371.jpg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/toyota-tacoma/DSC_0454+(2).jpg', start_date=datetime.date(2021, 9, 6), end_date=datetime.date(2021, 9, 13), user_id=2)
    
    volvo = Auction(
        vin='YV1672MW0B2637326', year='2011', make='Volvo', model='V50', type='Wagon', city='Salt Lake City', state='UT', description='This is a 2011 Volvo V50, powered by a turbocharged 2.5L 5-cylinder motor making 225hp and is finished in a gray exterior and a light interior. This vehicle seats 5 comfortably and drives smooth on long trips.', miles='86259', color='Gray', engine='2.5L I5 Engine', transmission='5-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06934.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06936.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06945.jpg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/volvo-v50/DSC06946.jpg', start_date=datetime.date(2021, 9, 6), end_date=datetime.date(2021, 9, 13), user_id=2)

    wrangler = Auction(
        vin='1C4BJWCG4EL223522', year='2014', make='Jeep', model='Wrangler', type='Truck', city='Logan', state='UT', description='This is a 2014 Jeep Wrangler with a black-on-black interior and exterior. This specific Jeep is the Rubicon trim, which comes with disconnecting sway-bars and front and rear locking differentials.', miles='47152', color='Black', engine='3.6L V6 Engine', transmission='5-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06758.JPG', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06765.JPG', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06767.JPG', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/jeep-wrangler/DSC06768.JPG', start_date=datetime.date(2021, 9, 6), end_date=datetime.date(2021, 9, 13), user_id=1)

    model_s = Auction(
        vin='5YJSA1E23HF215391', year='2017', make='Tesla', model='Model S', type='Car', city='Denver', state='CO', description='This is a 2017 Tesla Model S finished with a blue exterior and a light interior. This specific Model S is the 100D trim, which boasts AWD and a 335 mile electric range!', miles='57652', color='Blue', engine='Dual Electric Motors', transmission='1-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/DSC06798.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/DSC06811.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/interior-1.jpeg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/tesla-models/interior-2.jpeg', start_date=datetime.date(2021, 9, 6), end_date=datetime.date(2021, 9, 13), user_id=1)   
    
    six_eight_mustang = Auction(
        vin='7F01T166729', year='1967', make='Ford', model='Mustang GT', type='Car', city='Los Angeles', state='CA', description='This is a 1967 Ford Mustang GTA with a 289 V8 and a 3-speed automatic transmission. This vehicle was parked on a farm for 15 years, but the car runs and drives well!', miles='125059', color='White', engine='289 (4.7L) V8 Engine', transmission='3-speed Automatic', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/67-mustang/DSC06994.JPG', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/67-mustang/DSC06477.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/67-mustang/DSC06480.jpg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/67-mustang/DSC06489.jpg', start_date=datetime.date(2021, 9, 7), end_date=datetime.date(2021, 9, 14), user_id=2)

    dodge_viper = Auction(
        vin='1B3JZ65Z38V200228', year='2008', make='Dodge', model='Viper', type='Car', city='San Diego', state='CA', description='This is a 2008 Dodge Viper SRT-10 convertible finished with a green exterior and black interior. This has a 600hp 8.4L V10 motor and a 6-speed manual transmission.', miles='47300', color='Green', engine='8.4L V10 Engine', transmission='6-speed Manual', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/dodge-viper/viper-1.jpeg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/dodge-viper/viper-2.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/dodge-viper/viper-3.jpeg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/dodge-viper/viper-4.jpeg', start_date=datetime.date(2021, 9, 7), end_date=datetime.date(2021, 9, 14), user_id=1
    )

    nine_eleven_turbo = Auction(
        vin='WP0AD29987S784089', year='2007', make='Porsche', model='911', type='Car', city='Asheville', state='NC', description='This is a 2007 Porsche 911 Turbo Coupe finished in a black exterior with a black interior. This 911 Turbo features a turbocharged 3.6L Flat-6 Engine and a 6-speed manual transmission!', miles='29100', color='Black', engine='3.6L Turbocharged Flat-6 Engine', transmission='6-speed Manual', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/porsche-911/porsche-1.jpeg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/porsche-911/porsche-2.jpeg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/porsche-911/porsche-3.jpeg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/porsche-911/porsche-4.jpeg', start_date=datetime.date(2021, 9, 7), end_date=datetime.date(2021, 9, 14), user_id=2
    )
    
    new_mustang = Auction(
        vin='1FA6P8CF3H5264094', year='2017', make='Ford', model='Mustang', type='Car', city='Chicago', state='IL', description='This is a 2017 Ford Mustang GT finished in a bright orange exterior and a black interior. This Mustang features a 435hp 5.0L Coyote V8 and a 6-speed manual transmission.', miles='46238', color='Orange', engine='5.0L V8 Engine', transmission='6-speed Manual', img_url_1='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/new-mustang/DSC05107-Edit.jpg', img_url_2='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/new-mustang/DSC05165.jpg', img_url_3='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/new-mustang/DSC05198-Edit.jpg', img_url_4='https://sunny-capstone-project.s3.us-west-1.amazonaws.com/images-for-site/capstone-images/new-mustang/DSC05215-Edit.jpg', start_date=datetime.date(2021, 9, 7), end_date=datetime.date(2021, 9, 14), user_id=1
    )

    db.session.add(tacoma)
    db.session.add(volvo)
    db.session.add(wrangler)
    db.session.add(model_s)
    db.session.add(six_eight_mustang)
    db.session.add(dodge_viper)
    db.session.add(nine_eleven_turbo)
    db.session.add(new_mustang)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_auctions():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()