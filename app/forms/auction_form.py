from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SubmitField
from wtforms.fields.core import DateField
from wtforms.validators import DataRequired, ValidationError
from app.models.user import User
from app.models.auction import Auction

def vin_number_exists(form, field):
    #checking if vin number is already in use
    vin = field.data
    auction_vin = Auction.query.filter(Auction.vin == auction_vin).first()
    if auction_vin:
        raise ValidationError('This VIN number has already been registered.')


class AuctionForm(FlaskForm):
    user_id = IntegerField('User Id', validators=[DataRequired()])
    vin = StringField('VIN', validators=[DataRequired()])
    year = StringField('Year', validators=[DataRequired()])
    make = StringField('Make', validators=[DataRequired()])
    model = StringField('Model', validators=[DataRequired()])
    type = StringField('Type', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    description = TextField('Description', validators=[DataRequired()])
    miles = IntegerField('Miles', validators=[DataRequired()])
    color = StringField('Color', validators=[DataRequired()])
    engine = StringField('Engine', validators=[DataRequired()])
    transmission = StringField('Transmission', validators=[DataRequired()])
    img_url_1 = StringField('Image URL 1', validators=[DataRequired()])
    img_url_2 = StringField('Image URL 2', validators=[DataRequired()])
    img_url_3 = StringField('Image URL 3', validators=[DataRequired()])
    img_url_4 = StringField('Image URL 4', validators=[DataRequired()])
    start_date = DateField('Start Date', validators=[DataRequired()])
    end_date = DateField('End Date', validators=[DataRequired()])
    submit = SubmitField('Submit Auction')