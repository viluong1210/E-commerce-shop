const API_ENDPOINT = "http://localhost:3001/categorys";

import httpRequest from "./httpRequest";

const getAllCategorys = () => {
  const obj = {
    url: `${API_ENDPOINT}`,
    options: null,
  };

  return httpRequest.get(obj);
};

const createCategorys = (params: { name: string }) => {
  const obj = {
    url: `${API_ENDPOINT}/`,
    options: params,
  };

  return httpRequest.post(obj);
};

const editCategorys = ({ params, id }: any) => {
  const obj = {
    url: `${API_ENDPOINT}/${id}`,
    options: params,
  };

  return httpRequest.put(obj);
};

const deleteCategorys = (ids: string[]) => {
  const obj = {
    url: `${API_ENDPOINT}/delete`,
    options: {
      ids,
    },
  };

  return httpRequest.post(obj);
};

export { getAllCategorys, createCategorys, editCategorys, deleteCategorys };
