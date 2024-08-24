const API_ENDPOINT = "http://localhost:3001/orders";

import { Paging } from "@/types/index";
import httpRequest from "./httpRequest";

const getAllOrder = (params: Paging) => {
  const obj = {
    url: API_ENDPOINT,
    options: {
      params,
    },
  };

  return httpRequest.get(obj);
};

const getdetailOrder = (id: string | undefined) => {
  const obj = {
    url: `${API_ENDPOINT}/${id}`,
    options: null,
  };

  return httpRequest.get(obj);
};

const createOrder = (params: any) => {
  const obj = {
    url: `${API_ENDPOINT}/`,
    options: params,
  };

  return httpRequest.post(obj);
};

const editOrder = ({ params, id }: any) => {
  const obj = {
    url: `${API_ENDPOINT}/${id}`,
    options: params,
  };

  return httpRequest.put(obj);
};

const deleteOrder = (ids: number) => {
  const obj = {
    url: `${API_ENDPOINT}/delete`,
    options: {
      ids,
    },
  };

  return httpRequest.post(obj);
};

export { getAllOrder, createOrder, editOrder, deleteOrder, getdetailOrder };
