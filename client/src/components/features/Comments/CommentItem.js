import { useState } from 'react';

import * as cardService from '../../../services/cardService';

import { imageFormatter } from "../../../utils/formatFunctions";

const CommentItem = ({ comment, index, deleteCommentHandler, editCommentHandler, editted, card, user }) => {
    const [newComment, setNewComment] = useState(comment.comment);

    const onEditComment = (e, index) => {
        e.preventDefault();
        card.commentList.splice(index, 1, { user, comment: newComment });

        cardService.edit(card._id, card)
            .then(result => editCommentHandler(-1));
    };

    const onChangeComment = (e) => {
        setNewComment(e.target.value);
    };
console.log(comment);
    return (
        <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-13 u-layout-cell-1">
                            <div className="u-container-layout u-valign-top u-container-layout-1">
                                <img className="profileImage"
                                    src={imageFormatter(comment.user.profileImageUrl)}
                                    style={{ "borderRadius": "5px" }}
                                />
                                <p className="u-text u-text-1"><b>{comment.user.firstName} {comment.user.lastName}</b></p>
                            </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-47 u-layout-cell-2">
                            <div className="u-container-layout u-container-layout-2">
                                {(editted === -1) ?
                                    <p className="u-text u-text-3">{comment.comment}</p>
                                    :
                                    (editted > -1 && editted === index)
                                        ?
                                        <form onSubmit={(e) => onEditComment(e, index)}>
                                            <input type="text" onChange={onChangeComment}
                                                value={newComment} name="newComment" />
                                            <input type="submit" value="Edit" />
                                        </form>
                                        :
                                        <p className="u-text u-text-3">{comment.comment}</p>
                                }
                            </div>
                            {user._id === comment.user._id &&
                                <>
                                    <span className="u-file-icon u-icon u-icon-1">
                                        <button onClick={() => editCommentHandler(index)}>
                                            <img src="/images/2919592.png" alt="" />
                                        </button>
                                    </span>

                                    <span className="u-file-icon u-icon u-icon-1">
                                        <button onClick={() => deleteCommentHandler(index)}>
                                            <img src="/images/6861362.png" alt="" />
                                        </button>
                                    </span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;