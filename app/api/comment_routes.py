from flask import Blueprint, request
from app.models import db, Comment, Auction, User
from app.forms.comment_form import CommentForm

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
    comments_query = Comment.query.all()
    comments = [comment.to_dict() for comment in comments_query]
    for comment in comments:
        #goes through each comment and grabs username by user_id
        comment['username'] = User.query.get(comment['user_id']).username
    return {'comments': comments }

@comment_routes.route('/', methods=['POST'])
def create_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(
            comment=form.data['comment'],
            user_id=form.data['user_id'],
            auction_id=form.data['auction_id'],
        )
        db.session.add(new_comment)
        db.session.commit()
        return {'message': 'We made a comment!'}, 200
    errors = form.errors
    return {'errors': validation_errors_to_error_messages(errors)}, 401

@comment_routes.route('/<int:id>', methods=['PUT'])
def edit_comment(id):
    data = request.json
    comment = Comment.query.get(id)

    comment.comment = data['comment']
 
    db.session.commit()
    return comment.to_dict()

@comment_routes.route('/<int:id>', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get(id)
    
    db.session.delete(comment)
    db.session.commit()
    return {}, 200