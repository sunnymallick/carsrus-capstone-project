from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SubmitField
from wtforms.fields.core import DateField
from wtforms.validators import DataRequired, ValidationError
from app.models.user import User
from app.models.auction import Auction

class AuctionForm(FlaskForm):
    user_id = IntegerField('User Id', validators=[DataRequired()])
    vin = StringField('VIN', validators=[DataRequired()])
    year = StringField('Year', validators=[DataRequired()])
    make = StringField('Make', validators=[DataRequired()])
    model = StringField('Model', validators=[DataRequired()])
    type = StringField('Type', validators=[DataRequired()])
    reserve_price = IntegerField('Reserve Price', validators=[DataRequired()])
    description = TextField('Description', validators=[DataRequired()])
    start_date = DateField('Start Date', validators=[DataRequired()])
    end_date = DateField('End Date', validators=[DataRequired()])
    img_url = TextField('Image URL')
    submit = SubmitField('Submit Auction')