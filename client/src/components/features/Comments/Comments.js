import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';
import * as commentService from '../../../services/commentService';

import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

import './Comments.css';

const Comments = ({ card }) => {
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        commentService.getAllCommentsDetailed(card[0]._id)
            .then(res => setComments(res));
    }, []);

    const addNewComment = (commentInfo) => {
        setComments(state => [
            ...state,
            commentInfo,
        ]);
    };

    return (
        <>
            <section className="u-clearfix u-grey-5 u-section-8" id="sec-feda">
                {comments.map(x => <CommentItem key={x._id} comment={x} />)}
            </section>
            {(user._id !== card[0]._ownerId && user.email) && <CommentForm key={'form'} cardId={card[0]._id} addNewComment={addNewComment} />}
            
        </>
    );
};

export default Comments;