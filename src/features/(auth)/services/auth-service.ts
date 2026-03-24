import axios from "axios";
import { ILoginFormData, ISignupFormData } from "../types/auth-types";

export const signup = async (formData: ISignupFormData) => {
  const { data } = await axios.post("/api/signup", formData);

  return data
}

export const login = async (formData: ILoginFormData) => {
  const { data } = await axios.post("/api/login", formData);

  return data
}