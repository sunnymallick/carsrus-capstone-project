from flask import Blueprint, request
from app.models import db, Comment, Auction

comment_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@comment_routes.route('/')
def comments():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}