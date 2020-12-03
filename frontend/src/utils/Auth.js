import axios from "axios";

export function isLogged() {
    let auth = getToken();
    return !!(auth && auth.accessToken);
}

export function setToken(remember, tokenInfo) {
    remember && localStorage.setItem('auth', JSON.stringify(tokenInfo));
    axios.defaults.headers.common['Authorization'] = tokenInfo.tokenType + tokenInfo.accessToken;
}

export function getNotExpiredToken() {
    const token = getToken();
    return token && token.hasOwnProperty('expiryAccessToken') && !Date(token.expiryAccessToken) > new Date() && token;
}

export function removeToken() {
    localStorage.removeItem('auth');
    delete axios.defaults.headers.common["Authorization"];
}

export function getToken() {
    return JSON.parse(localStorage.getItem('auth'));
}

export function getRefreshToken() {
    let token = JSON.parse(localStorage.getItem('auth'));
    return token.tokenType + token.refreshToken;
}