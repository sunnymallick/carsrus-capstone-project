from flask import Blueprint, jsonify, request
from app.models import db, Bid, Auction, User
from app.forms.bid_form import BidForm

bid_routes = Blueprint('bids', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@bid_routes.route('/')
def bids():
    bids_query = Bid.query.all()
    bids = [bid.to_dict() for bid in bids_query]
    for bid in bids:
        #goes through each bid and grabs username by user_id
        bid['username'] = User.query.get(bid['user_id']).username
    return {'bids': bids}

@bid_routes.route('/', methods=['POST'])
def create_bid():
    form = BidForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_bid = Bid(
            bid=form.data['bid'],
            user_id=form.data['user_id'],
            auction_id=form.data['auction_id'],
        )
        db.session.add(new_bid)
        db.session.commit()
        return {'message': 'We made a bid!'}, 200
    errors = form.errors
    return {'errors': validation_errors_to_error_messages(errors)}, 401

@bid_routes.route('/<int:id>', methods=['DELETE'])
def delete_bid(id):
    bid = Bid.query.get(id)
    db.session.delete(bid)
    db.session.commit()
    return {}, 200
