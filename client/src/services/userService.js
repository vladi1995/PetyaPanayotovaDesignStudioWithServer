import * as request from "./requester";

const baseUrlUsers = 'http://localhost:3030/data/userInfo';

export const getAll = () => request.get(baseUrlUsers);

export const getCurrentUser = (userId) => {
    const search = encodeURIComponent(`_ownerId="${userId}"`);
    return request.get(`${baseUrlUsers}?where=${search}`);
};

export const create = (userInfo) => request.post(baseUrlUsers, userInfo);

export const edit = (userId, userData) => request.put(`${baseUrlUsers}/${userId}`, userData);

