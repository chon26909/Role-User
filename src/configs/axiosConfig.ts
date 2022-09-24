import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

//-------------------@Intercepter Request-------------------
const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = "ABCD";
  config.headers!.Authorization = "Bearer " + token;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

axios.interceptors.request.use(onRequest, onRequestError);

//-------------------@Intercepter Response-------------------
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

axios.interceptors.response.use(onResponse, onResponseError);
