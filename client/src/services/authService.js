import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => {
    return request.post(`${baseUrl}/login`, { email, password });
};

export const register = (email, password, firstName, lastName, profileImageUrl, budget, likes, boughtProducts) => {
    return request.post(`${baseUrl}/register`, { email, password, firstName, lastName, profileImageUrl, budget, likes, boughtProducts });
};

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

