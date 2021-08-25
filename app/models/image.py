from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.Text, nullable=False)
    auction_id = db.Column(db.Integer, db.ForeignKey('auctions.id'), nullable=False)

    auction = db.relationship('Auction', back_populates='images')

    def to_dict(self):
        return {
            'id': self.id,
            'bid': self.bid,
            'auction_id': self.auction_id
        }