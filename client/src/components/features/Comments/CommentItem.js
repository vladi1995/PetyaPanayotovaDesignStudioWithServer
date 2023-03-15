const CommentItem = ({comment}) => {
    return (
        <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-13 u-layout-cell-1">
                            <div className="u-container-layout u-valign-top u-container-layout-1">
                                <img className="profileImage" src={comment.user.profileImageUrl} />
                                <p className="u-text u-text-1">{comment.user.firstName} {comment.user.lastName}</p>
                                <p className="u-text u-text-2">{comment.commentInfo_createdOn}</p>
                            </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-47 u-layout-cell-2">
                            <div className="u-container-layout u-container-layout-2">
                                <p className="u-text u-text-3">{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;