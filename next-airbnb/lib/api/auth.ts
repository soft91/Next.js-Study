import axios from "axios";
import { UserType } from "../../types/user";

interface SingUpAPIBody {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  birthDay: string;
}

export const signupAPI = (body: SingUpAPIBody) => 
  axios.post<UserType>("/api/auth/signup", body);

export const loginAPI = (body: { email: string; password: string }) =>
  axios.post<UserType>("/api/auth/login", body);

export const meAPI = () => axios.get<UserType>("/api/auth/me");