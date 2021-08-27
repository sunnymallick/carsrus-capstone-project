from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import auction, db, Auction, Image
from app.forms.auction_form import AuctionForm


auction_routes = Blueprint('auctions', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@auction_routes.route('/')
def auctions():
    auctions = Auction.query.all()
    return {'auctions': [auction.to_dict() for auction in auctions]}

@auction_routes.route('/<int:id>')
def get_auctions(id):
    auction = Auction.query.get(id)
    return auction.to_dict()

@auction_routes.route('/form', methods=['GET', 'POST'])
def auction_form():
    form = AuctionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        
        auction = Auction(
            user_id=form.data['user_id'],
            vin=form.data['vin'],
            year=form.data['year'],
            make=form.data['make'],
            model=form.data['model'],
            type=form.data['type'],
            reserve_price=form.data['reserve_price'],
            description=form.data['description'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date'],
        )
        db.session.add(auction)
        db.session.commit()
        image = Image(
            img_url=form.data['img_url'],
            auction_id=auction.id
        )
        db.session.add(image)
        db.session.commit()
        return {'message': "Let's Sell a car!"}, 200
    errors = form.errors
    return {'errors': validation_errors_to_error_messages(errors)}, 401

@auction_routes.route('/<int:id>', methods=['PUT'])
def edit_restaurant(id):
    data = request.json
    auction = Auction.query.get(id)
    # image = Image.query.filter(Image.auction_id == id).all()
    auction.description = data['description']
    # image.img_url = data['img_url']
    
    db.session.commit()

    return auction.to_dict()

@auction_routes.route('/<int:id>', methods=['DELETE'])
def delete_auction(id):
    auction = Auction.query.get(id)

    db.session.delete(auction)
    db.session.commit()

    return {'message': 'success'}, 204
