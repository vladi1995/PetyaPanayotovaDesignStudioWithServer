import * as request from "./requester";

const baseUrlComment = 'http://localhost:3030/data/comments';

export const create = (cardId, comment, user) => request.post(baseUrlComment, {cardId, comment, user});

export const getAllCommentsDetailed = (cardId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`cardId="${cardId}"`);

    return request.get(`${baseUrlComment}?where=${search}`);
};
