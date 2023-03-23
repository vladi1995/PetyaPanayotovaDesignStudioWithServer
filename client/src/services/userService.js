import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const getOne = (userId) => request.get(`${baseUrl}/${userId}`);

export const edit = (userId, userData) => request.put(`${baseUrl}/${userId}`, userData);