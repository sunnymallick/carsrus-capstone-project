from flask import Blueprint, jsonify, request
from app.models import db, Bid, Auction
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
    bids = Bid.query.all()
    return {'bids': [bid.to_dict() for bid in bids]}

@bid_routes.route('/', methods=['POST'])
def create_bid():
    form = BidForm()
    print('-------')
    print(form.data)
    print('-------')
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

