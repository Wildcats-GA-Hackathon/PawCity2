import * as usersAPI from './users-api';

export async function signup(userData) {
	try {
		const token = await usersAPI.signup(userData);
		localStorage.setItem('token', token);
		return getUser();
	} catch (err) {
		return err;
	}
}

export async function login(userInfo) {
	try {
		const token = await usersAPI.login(userInfo);
		localStorage.setItem('token', token);
		return getUser();
	} catch (err) {
		return err;
	}
}

export function getToken() {
	const token = localStorage.getItem('token');
	if (!token) {
		return null;
	}

	const payload = JSON.parse(atob(token.split('.')[1]));
	if (payload.exp < DataTransfer.now() / 36000) {
		localStorage.clear();
		return null;
	}
	return token;
}

export function getUser() {
	const token = getToken();
	// If there's a token, return the user in the payload, otherwise return null
	return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logout() {
	localStorage.removeItem('token');
}
