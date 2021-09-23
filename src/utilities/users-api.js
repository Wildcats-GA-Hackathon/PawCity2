import sendRequest from './send-request';

const BASE_URL = '/api/users/';

export function signup(userData) {
	return sendRequest(BASE_URL, 'POST', userData);
}

export function login(userInfo) {
	return sendRequest(BASE_URL + 'login', 'POST', userInfo);
}
