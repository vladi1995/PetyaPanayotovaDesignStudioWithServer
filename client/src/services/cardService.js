import * as request from "./requester";

const baseUrl = 'http://localhost:3030/cards';

export const getAll = () => request.get(baseUrl);

export const getOne = (gameId) => request.get(`${baseUrl}/details/${gameId}`);

export const create = (gameData) => request.post(`${baseUrl}`, gameData);

export const edit = (cardId, cardData) => request.put(`${baseUrl}/edit/${cardId}`, cardData);

export const remove = (gameId) => request.del(`${baseUrl}/delete/${gameId}`);

export const getOneDetailed = (cardId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);  
    const search = encodeURIComponent(`_id="${cardId}"`); 

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};

export const getAllDetailed = (userId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);  
    const search = encodeURIComponent(`_ownerId="${userId}"`); 

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};