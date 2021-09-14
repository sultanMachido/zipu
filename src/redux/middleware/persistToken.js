import axios from 'axios';

const base_url = 'https://loanapp-test-api.dev.intelia.io';
const accessToken = window.localStorage.getItem('accessToken');

const config = {
	headers: { Authorization: `Bearer ${accessToken}` }
};

const persistToken = (store) => (next) => (action) => {
	axios
		.post(`${base_url}/auth/refresh-token`, {}, config)
		.then((response) => {
			const refreshJwt = response.data.jwt;
			window.localStorage.setItem('refreshJwt', refreshJwt);
			axios
				.post(`${base_url}/auth/refresh-token`, { refreshJwt }, config)
				.then((response) => {
					const accessToken = response.data.jwt;
					window.localStorage.setItem('accessToken', accessToken);
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((err) => {
			console.log(err);
		});
	let result = next(action);
	return result;
};

export default persistToken;
