from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models.user import User
from app.models.auction import Auction

class BidForm(FlaskForm):
    bid = IntegerField('Bid', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    auction_id = IntegerField('Auction Id', validators=[DataRequired()])
    created_at = DateField('Created At', validators=[DataRequired()])
    updated_at = DateField('Updated At', validators=[DataRequired()])
    submit = SubmitField('Submit Bid')