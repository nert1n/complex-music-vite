import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url.ts";

export default class AuthService {
	static async getAuthMe() {
		const res = await axios.get(`${BACKEND_URL}/auth/me`, {
			headers: {
				Authorization: localStorage.getItem("access") ?? "",
			},
			withCredentials: true,
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
}
