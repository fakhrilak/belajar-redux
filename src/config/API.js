import axios from 'axios';
// Set config defaults when creating the instance
export const API = axios.create({
	baseURL: 'http://7ec96f921ca4.ngrok.io'
	//baseURL: 'http://localhost:5000/tapaksuci/v1'
});