from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Auction, User, Bid
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
    auctions_query = Auction.query.all()
    auctions = [auction.to_dict() for auction in auctions_query]
    for auction in auctions:
        #goes through each bid and grabs username by user_id
        auction['username'] = User.query.get(auction['user_id']).username
    return {'auctions': auctions}

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
            city=form.data['city'],
            state=form.data['state'],
            description=form.data['description'],
            miles=form.data['miles'],
            color=form.data['color'],
            engine=form.data['engine'],
            transmission=form.data['transmission'],
            img_url_1=form.data['img_url_1'],
            img_url_2=form.data['img_url_2'],
            img_url_3=form.data['img_url_3'],
            img_url_4=form.data['img_url_4'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date'],
        )
        db.session.add(auction)
        db.session.commit()
        return {}, 200
    errors = form.errors
    return {'errors': validation_errors_to_error_messages(errors)}, 401

@auction_routes.route('/<int:id>', methods=['PUT'])
def edit_auction(id):
    data = request.json
    auction = Auction.query.get(id)
    auction.vin = data['vin']
    auction.year = data['year']
    auction.make = data['make']
    auction.model = data['model']
    auction.type = data['type']
    auction.city = data['city']
    auction.state = data['state']
    auction.description = data['description']
    auction.miles = data['miles']
    auction.color = data['color']
    auction.engine = data['engine']
    auction.transmission = data['transmission']
    auction.img_url_1 = data['img_url_1']
    auction.img_url_2 = data['img_url_2']
    auction.img_url_3 = data['img_url_3']
    auction.img_url_4 = data['img_url_4']
    # auction.start_date = data['start_date']
    # auction.end_date = data['end_date']
    
    db.session.commit()

    return auction.to_dict()

@auction_routes.route('/<int:id>', methods=['DELETE'])
def delete_auction(id):
    auction = Auction.query.get(id)

    db.session.delete(auction)
    db.session.commit()

    return {'message': 'success'}, 204
