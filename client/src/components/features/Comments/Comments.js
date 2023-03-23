import { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';
import * as cardService from '../../../services/cardService';

import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

import './Comments.css';

const Comments = ({ card }) => {
    const [comments, setComments] = useState(card.commentList);
    const [editted, setEditted] = useState(-1);
    const { user } = useContext(AuthContext);

    const addNewComment = (commentInfo) => {
        setComments(state => [
            ...state,
            commentInfo,
        ]);
    };

    const deleteCommentHandler = (index) => {
        const confirmation = window.confirm('Are you sure that you want to delete the comment?');

        if (confirmation) {
            setComments(state => state.filter((x, i) => i !== index ? x : ''));
            card.commentList.splice(index, 1);

            cardService.edit(card._id, card)
                .then(result => console.log(result));
        }
    };

    const editCommentHandler = (index) => {
        setEditted(index);
    };

    return (
        <>
            <section className="u-clearfix u-grey-5 u-section-8" id="sec-feda">
                {card.commentList.map((x, i) =>
                    <CommentItem
                        key={i}
                        comment={x}
                        index={i}
                        deleteCommentHandler={deleteCommentHandler}
                        editCommentHandler={editCommentHandler}
                        editted={editted}
                        card={card}
                        user={user}
                    />
                )}
                <br />
            </section>
            {(user._id !== card.ownerId._id && user.email)
                &&
                <CommentForm key={card._id} card={card} addNewComment={addNewComment}
                />
            }
        </>
    );
};

export default Comments;