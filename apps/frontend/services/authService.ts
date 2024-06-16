const API_ENDPOINT = "http://localhost:3000";

import httpRequest from "./httpRequest";

const login = (params: any) => {
  const obj = {
    url: `${API_ENDPOINT}/auth/login`,
    options: params,
  };

  return httpRequest.post(obj);
};

const register = (params: any) => {
  const obj = {
    url: `${API_ENDPOINT}/auth/register`,
    options: params,
  };

  return httpRequest.post(obj);
};

export { login, register };
