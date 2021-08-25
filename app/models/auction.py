from flask_sqlalchemy import model
from sqlalchemy.orm.session import make_transient
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
    reserve_price = db.Column(db.Numeric(100000))
    description = db.Column(db.Text, nullable=False)
    time_left = db.Column(db.Time, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='auctions')

    def to_dict(self):
        return {
            'id': self.id,
            'vin': self.vin,
            'year': self.year,
            'make': self.make,
            'model': self.model,
            'type': self.type,
            'reserve_price': self.reserve_price,
            'description': self.description,
            'time_left': self.time_left,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'user_id': self.user_id
        }
