const API_ENDPOINT = "http://localhost:3001/products";

import { Paging } from "@/types/index";
import httpRequest from "./httpRequest";

const getAllProducts = (params: Paging) => {
  const obj = {
    url: API_ENDPOINT,
    options: {
      params,
    },
  };

  return httpRequest.get(obj);
};

const getdetailProducts = (id: string | undefined) => {
  const obj = {
    url: `${API_ENDPOINT}/${id}`,
    options: null,
  };

  return httpRequest.get(obj);
};

const createProducts = (params: any) => {
  const obj = {
    url: `${API_ENDPOINT}/`,
    options: params,
  };

  return httpRequest.post(obj);
};

const editProducts = ({ params, id }: any) => {
  const obj = {
    url: `${API_ENDPOINT}/${id}`,
    options: params,
  };

  return httpRequest.put(obj);
};

const deleteProducts = (ids: number[]) => {
  const obj = {
    url: `${API_ENDPOINT}/delete`,
    options: {
      ids,
    },
  };

  return httpRequest.post(obj);
};

export {
  getAllProducts,
  createProducts,
  editProducts,
  deleteProducts,
  getdetailProducts,
};
