import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';
import * as cardService from '../../../services/cardService';

import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

import './Comments.css';

const Comments = ({ card }) => {
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext);
  
    const addNewComment = (commentInfo) => {
        setComments(state => [
            ...state,
            commentInfo,
        ]);
    };

    console.log(card);
    return (
        <>
            <section className="u-clearfix u-grey-5 u-section-8" id="sec-feda">
                {card.commentList.map(x => <CommentItem key={Math.random().toString(36).slice(2, 7)} comment={x} />)}
            </section>
            {(user._id !== card.ownerId._id && user.email) && <CommentForm key={card._id} card={card} addNewComment={addNewComment} />}
            
        </>
    );
};

export default Comments;