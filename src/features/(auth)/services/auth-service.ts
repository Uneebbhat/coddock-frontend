import axios from "axios";
import { ILoginFormData, ISignupFormData } from "../types/auth-types";

export const signup = async (formData: ISignupFormData) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/signup",
    formData,
  );

  return data;
};

export const login = async (formData: ILoginFormData) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/login",
    formData,
  );

  return data;
};

export const logout = async () => {
  const { data } = await axios.post("http://localhost:3000/api/logout");
  return data;
};
