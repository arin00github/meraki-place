import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
});

export const excuteRequest = async (
  url: string,
  config: AxiosRequestConfig
): Promise<AxiosResponse | null> => {
  try {
    return await axiosInstance(url, config);
  } catch (err) {
    const anyResult = err as AxiosError;
    if (anyResult && anyResult.response) {
      return anyResult.response;
    }
  }

  return null;
};
