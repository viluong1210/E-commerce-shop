const API_ENDPOINT = "http://localhost:3000/contacts";

import { Paging } from "@/types/index";
import httpRequest from "./httpRequest";

const getAllContacts = (params: Paging) => {
  const obj = {
    url: API_ENDPOINT,
    options: {
      params,
    },
  };

  return httpRequest.get(obj);
};

const createContacts = (params: any) => {
  const obj = {
    url: `${API_ENDPOINT}/`,
    options: params,
  };

  return httpRequest.post(obj);
};

const deleteContacts = (ids: number[]) => {
  const obj = {
    url: `${API_ENDPOINT}/delete`,
    options: {
      ids,
    },
  };

  return httpRequest.post(obj);
};

export { getAllContacts, createContacts, deleteContacts };
