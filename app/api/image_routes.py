from flask import Blueprint, request
from app.models import db, Image


image_routes = Blueprint('images', __name__)

@image_routes.route('/')
def images():
    images = Image.query.all()
    return {'images': [image.to_dict() for image in images]}

    