const API_ENDPOINT = "http://localhost:3500/user";

import httpRequest from "./httpRequest";

const getProfile = (id: any) => {
  const obj = {
    url: `${API_ENDPOINT}/${id}`,
    options: {},
  };

  return httpRequest.get(obj);
};

const getAllUser = (page: number, limit: number) => {
  const obj = {
    url: `${API_ENDPOINT}`,
    options: {
      params: { page, limit },
    },
  };

  return httpRequest.get(obj);
};

export { getProfile, getAllUser };
