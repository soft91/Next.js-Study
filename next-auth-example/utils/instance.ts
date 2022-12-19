import axios, { AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

// Axios Access Token
const axiosConfig: AxiosRequestConfig = {
	baseURL: "http://localhost:3000",
	withCredentials: true,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(async (request: AxiosRequestConfig) => {
	const session = await getSession();

	request.headers = request.headers ?? {};
	if (session) {
		request.headers.Authorization = `Bearer ${session.user.accessToken}`;
	}
	return request;
});

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
