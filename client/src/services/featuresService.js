import * as request from "./requester";

const baseUrlBuying = 'http://localhost:3030/data/boughtProducts';
const baseUrlLike = 'http://localhost:3030/data/likes';

export const getAll = () => request.get(baseUrlBuying);

export const create = (cardId) => request.post(baseUrlBuying, cardId);

export const getAllLikes = () => request.get(baseUrlLike);

export const getLikesPerCard = (cardId) => {
    const search = encodeURIComponent(`_ownerId="${cardId}"`);
    return request.get(`${baseUrlLike}?where=${search}`);
};

export const createLike = (userId) => request.post(baseUrlLike, userId);