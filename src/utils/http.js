import axios from "axios";
import { api_token } from "../config/config";

export function getApi(pUrl, params) {
  let url = pUrl;

  return axios.get(url, {
    method: "get",
    headers: {
      Authorization: `Bearer ${api_token.token}`,
      "Content-Type": "application/json ",
    },
    responseType: "json",
    params: params,
  });
}

export function postApi(pUrl, data) {
  let url = pUrl;

  return axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  });
}

export function postQuery(pUrl, data) {
  let url = pUrl;

  return axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
}
