import api from '../services/API';

export function setToken(remember, tokenInfo) {
  remember
    ? localStorage.setItem('auth', JSON.stringify(tokenInfo))
    : sessionStorage.setItem('auth', JSON.stringify(tokenInfo));
  api.defaults.headers.common['Authorization'] = tokenInfo.tokenType + tokenInfo.accessToken;
}

export function tokenHasRemember() {
  return !!localStorage.getItem('auth');
}

export function getNotExpiredAccessToken() {
  const token = getToken();
  return token &&
    token.hasOwnProperty('expiryAccessToken') &&
    new Date(token.expiryAccessToken) > new Date()
    ? token.tokenType + token.accessToken
    : null;
}

export function getNotExpiredRefreshToken() {
  const token = getToken();
  return token &&
    token.hasOwnProperty('expiryAccessToken') &&
    new Date(token.expiryRefreshToken) > new Date()
    ? token.tokenType + token.refreshToken
    : null;
}

export function removeToken() {
  localStorage.removeItem('auth');
  sessionStorage.removeItem('auth');
  delete api.defaults.headers.common['Authorization'];
}

export function getToken() {
  let token = localStorage.getItem('auth') || sessionStorage.getItem('auth');
  return token ? JSON.parse(token) : null;
}
