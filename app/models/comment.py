from .db import db
from flask_login import UserMixin

class Comment(db.Model, UserMixin):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    auction_id = db.Column(db.Integer, db.ForeignKey('auctions.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=True)
    updated_at = db.Column(db.DateTime, default=db.func.now(), server_onupdate=db.func.now(), nullable=True)

    user = db.relationship('User', back_populates='comments')
    auction = db.relationship('Auction', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'user_id': self.user_id,
            'auction_id': self.auction_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
