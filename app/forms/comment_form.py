from typing import Text
from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SubmitField
from wtforms.validators import DataRequired
from app.models.user import User
from app.models.auction import Auction

class CommentForm(FlaskForm):
    comment = TextField('Comment', validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])
    auction_id = IntegerField('Auction Id', validators=[DataRequired()])
    submit = SubmitField('Submit Comment')