from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SubmitField
from wtforms.fields.core import DateField
from wtforms.validators import DataRequired, ValidationError
from app.models.user import User
from app.models.auction import Auction

def vin_number_exists(form, field):
    #checking if vin number is already in use
    auction_vin = field.data
    vin = Auction.query.filter(Auction.vin == auction_vin).first()
    if vin:
        raise ValidationError('This VIN number has already been registered.')


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