import axios, { AxiosResponse, CancelTokenSource } from "axios";

const { CancelToken } = axios;
const source: CancelTokenSource = CancelToken.source();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTcwMzM2NDQ3NiwiZXhwIjoxNzA1OTU2NDc2fQ.VC4HP6tU5aF4QjSh54z_Bbtw340zTD6ixXjsVe2RYcI";

const get = async (params: { url: string; options: any }): Promise<any> => {
  const endPoint: string = params.url;
  let config = params.options ? params.options : {};

  // const token = localStorage.getItem("access_token");

  if (token) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    config = { ...config, cancelToken: source.token };
  }

  const response: AxiosResponse = await axios.get(endPoint, config);
  return response.data;
};

const getFileResponse = async (params: {
  url: string;
  options: any;
}): Promise<any> => {
  const endPoint: string = params.url;
  let config = params.options
    ? params.options
    : {
        headers: {
          Accept: "image/png, application/json, application/pdf",
        },
        responseType: "blob",
      };

  const token = localStorage.getItem("access_token");

  if (token) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    config = { ...config, cancelToken: source.token };
  }

  const response: AxiosResponse = await axios.get(endPoint, config);
  return response;
};

const post = async (params: {
  url: string;
  config?: any;
  options: any;
}): Promise<any> => {
  const endPoint: string = params.url;
  let config = params.config ? params.config : {};
  // const token = localStorage.getItem("access_token");

  if (token) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    config = { ...config, cancelToken: source.token };
  }
  const response: AxiosResponse = await axios.post(
    endPoint,
    params.options,
    config
  );
  return response;
};

const put = async (params: { url: string; options: any }): Promise<any> => {
  const endPoint: string = params.url;
  let config = params.options ? params.options : {};
  if (token) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    config = { ...config, cancelToken: source.token };
  }
  const response = await axios.put(endPoint, params.options, config);
  return response;
};

const _delete = async (params: { url: string; options: any }): Promise<any> => {
  const endPoint: string = params.url;
  let config = params.options ? params.options : {};
  if (token) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    config = { ...config, cancelToken: source.token };
  }
  const response: AxiosResponse = await axios.delete(endPoint, config);
  return response;
};

const patch = async (params: { url: string; options: any }): Promise<any> => {
  const endPoint: string = params.url;
  let config = params.options ? params.options : {};
  config = { ...config, cancelToken: source.token };
  const response: AxiosResponse = await axios.patch(
    endPoint,
    params.options,
    config
  );
  return response;
};

const httpRequest = {
  get,
  put,
  post,
  patch,
  delete: _delete,
  getFileResponse,
};

export default httpRequest;
