import * as request from './requester';

const baseUrl = 'http://localhost:3030/cards';

export const getAll = () => request.get(baseUrl);

export const getOne = (gameId) => request.get(`${baseUrl}/details/${gameId}`);

export const create = (gameData) => request.post(`${baseUrl}`, gameData);

export const edit = (cardId, cardData) => request.put(`${baseUrl}/edit/${cardId}`, cardData);

export const remove = (gameId) => request.del(`${baseUrl}/delete/${gameId}`);

export const getAllDetailed = (userId) => {
    return request.get(baseUrl);
};

export const getAllCardsPerUser = (userId) => {
    return request.get(baseUrl);
};