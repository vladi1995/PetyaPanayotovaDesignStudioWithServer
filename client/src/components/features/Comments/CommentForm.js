import { useContext, useState } from "react";

import { AuthContext } from "../../../contexts/AuthContext";
import * as commentService from '../../../services/commentService';

import './Comments.css';
const CommentForm = ({ cardId, addNewComment }) => {
    const [comment, setComment] = useState('');
    const {user} = useContext(AuthContext);

    const addCommentHandler = (e) => {
        e.preventDefault();
        commentService.create(cardId, comment, user)
            .then(result => addNewComment(result));
    };

    const onChangeComment = (e) => {
        setComment(e.target.value);
    };

    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-9" id="sec-5ffd">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h3 className="u-text u-text-default u-text-1">Коментирай</h3>
                <div className="u-form u-form-1">
                    <form
                        className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                        style={{ "padding": "15px" }}
                        source="email"
                        onSubmit={addCommentHandler}
                    >
                        <div className="u-form-group u-form-message u-label-none">
                            <label htmlFor="email-ef64" className="u-label">Email</label>
                            <textarea
                                placeholder="Въведете коментар"
                                id="email-ef64"
                                name="comment"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                                required="required"
                                onChange={onChangeComment}
                                value={comment}
                            ></textarea>
                        </div>
                        <div className="u-form-group u-form-submit">
                            <input type="submit" value="Изпрати" className="u-btn u-btn-submit u-button-style" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CommentForm;