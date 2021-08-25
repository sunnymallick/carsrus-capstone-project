from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Auction

auction_routes = Blueprint('auctions', __name__)

@auction_routes.route('/')
def auctions():
    auctions = Auction.query.all()
    return {'auctions': [auction.to_dict() for auction in auctions]}

@auction_routes.route('/<int:id>')
def auctions(id):
    auction = Auction.query.get(id)
    return auction.to_dict()

