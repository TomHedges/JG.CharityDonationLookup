import axios from "axios";
import { HTTP_RESULT_STATUS } from "../constants/constants";

export function http_request(url, headers) {
  /*
  let response = {
    status: "",
    data: "",
    error: ""
  };
  */

  let instance = axios.create({
    headers: headers
  });

  return instance
    .get(url)
    .then(res => {
      let response = {};
      response.status = HTTP_RESULT_STATUS.SUCCESS;
      response.data = res.data;
      return response;
    })
    .catch(error => {
      let response = {};
      response.status = HTTP_RESULT_STATUS.ERROR;
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.statusText) {
          response.error = "Server said: " + error.response.statusText;
        } else {
          response.error = "Sorry, server responded with an error";
        }
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        response.error =
          "No response received - may be a 503 error, or you may have lost internet connection";
      } else {
        // Something happened in setting up the request that triggered an Error
        response.error = "Unknown error - please refresh the page!";
      }
      return response;
    });
}

/*
let instance = axios.create({
  headers: { "Content-Type": "application/json" }
});

instance.interceptors.response.use(
  response => {
    // Do something with response data
    console.log("winning: " + response.status);
    return response;
  },
  error => {
    // Do something with response error
    console.log("pas de problem: " + error.response.status);
    return Promise.reject(error);
  }
);

const UNAUTHORIZED = 503;
instance.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response.status;
    if (status === UNAUTHORIZED) {
      console.log("intercept");
      //dispatch(userSignOut());
    } else {
      console.log("intercept2");
    }
    return Promise.reject(error);
  }
);
*/
