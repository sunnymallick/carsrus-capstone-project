from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Auction
from app.forms.auction_form import AuctionForm

auction_routes = Blueprint('auctions', __name__)

@auction_routes.route('/')
def auctions():
    auctions = Auction.query.all()
    return {'auctions': [auction.to_dict() for auction in auctions]}

@auction_routes.route('/<int:id>')
def get_auctions(id):
    auction = Auction.query.get(id)
    return auction.to_dict()

@auction_routes.route('/form')
def auction_form():
    form = AuctionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        auction = Auction(
            vin=form.data['vin'],
            year=form.data['year'],
            make=form.data['make'],
            model=form.data['model']
        )

