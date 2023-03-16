import * as request from "./requester";

const baseUrl = 'http://localhost:3030/cards';
const baseUrlLike = 'http://localhost:3030/data/likes';

export const getOne = (cardId) => request.get(`${baseUrl}/details/${cardId}`);

export const create = (cardId) => request.post(baseUrl, cardId);

export const getAllLikes = () => request.get(baseUrlLike);

export const getLikesPerCard = (cardId) => {
    const search = encodeURIComponent(`_ownerId="${cardId}"`);
    return request.get(`${baseUrlLike}?where=${search}`);
};

export const createLike = (userId) => request.post(baseUrlLike, userId);