from .db import db
from flask_login import UserMixin

class Bid(db.Model, UserMixin):
    __tablename__ = 'bids'

    id = db.Column(db.Integer, primary_key=True)
    bid = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    auction_id = db.Column(db.Integer, db.ForeignKey('auctions.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=True)
    updated_at = db.Column(db.DateTime, default=db.func.now(), server_onupdate=db.func.now(), nullable=True)

    user = db.relationship('User', back_populates='bids')
    auction = db.relationship('Auction', back_populates='bids')

    def to_dict(self):
        return {
            'id': self.id,
            'bid': self.bid,
            'user_id': self.user_id,
            'auction_id': self.auction_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
