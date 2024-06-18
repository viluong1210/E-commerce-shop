const API_ENDPOINT = "http://localhost:3001";

import { CreateUserType } from "@/types/authType";
import httpRequest from "./httpRequest";

const login = (params: any) => {
  const obj = {
    url: `${API_ENDPOINT}/auth/login`,
    options: params,
  };

  return httpRequest.post(obj);
};

const register = (params: CreateUserType) => {
  const obj = {
    url: `${API_ENDPOINT}/auth/register`,
    options: params,
  };

  return httpRequest.post(obj);
};

export { login, register };
