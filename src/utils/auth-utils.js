import request from 'superagent'

const URL = 'https://minion-server.herokuapp.com/auth';

async function getUserAuth(username, password, authRoute) {
	const response = await request.post(`${URL}/${authRoute}`)
			.send({ username, password });

		return response.body;
}

export async function loginOrSignup(username, password) {
	let response = {};
	try {
		// console.log('trying to login');
		response = await getUserAuth(username, password, 'signin');
	}
	catch(e) {
		// console.log('entered CATCH block');
		response = {
			id: '', 
			username: '', 
			token: ''
		};
		console.log('could not sign in user');
	}
	console.log(response);
	return response;
}