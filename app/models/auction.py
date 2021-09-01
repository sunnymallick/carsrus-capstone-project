from .db import db
from flask_login import UserMixin


class Auction(db.Model, UserMixin):
    __tablename__ = 'auctions'

    id = db.Column(db.Integer, primary_key=True)
    vin = db.Column(db.String(17), nullable=False)
    year = db.Column(db.String, nullable=False)
    make = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    miles = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String, nullable=False)
    engine = db.Column(db.String, nullable=False)
    transmission = db.Column(db.String, nullable=False)
    img_url_1 = db.Column(db.Text, nullable=False)
    img_url_2 = db.Column(db.Text, nullable=False)
    img_url_3 = db.Column(db.Text, nullable=False)
    img_url_4 = db.Column(db.Text, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='auctions')
    bids = db.relationship('Bid', back_populates='auction')
    comments = db.relationship('Comment', back_populates='auction')

    def to_dict(self):
        return {
            'id': self.id,
            'vin': self.vin,
            'year': self.year,
            'make': self.make,
            'model': self.model,
            'type': self.type,
            'city': self.city,
            'state': self.state,
            'description': self.description,
            'miles': self.miles,
            'color': self.color,
            'engine': self.engine,
            'transmission': self.transmission,
            'img_url_1': self.img_url_1,
            'img_url_2': self.img_url_2,
            'img_url_3': self.img_url_3,
            'img_url_4': self.img_url_4,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'user_id': self.user_id
        }
