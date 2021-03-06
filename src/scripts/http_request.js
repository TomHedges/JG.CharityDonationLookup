/*
 * http_request.js
 * Wrapper forthe Axios HTTP request library. De-couples axiops-specific implementation details from rest of app.
 */

import axios from "axios";
import { HTTP_RESULT_STATUS } from "../constants/constants";

/*
 * function http_request(url: String, headers: JSONObject)
 * Receives a URL and any headers that are required. Makes request and returns raw response or an error message.
 */
export function http_request(url, headers) {
  const config = {
    headers: headers,
    timeout: 5000
  };
  return axios
    .get(url, config)
    .then(res => {
      let response = {};
      response.status = HTTP_RESULT_STATUS.SUCCESS;
      response.data = res.data;
      return response;
    })
    .catch(error => {
      let response = {};
      response.status = HTTP_RESULT_STATUS.ERROR;
      if (error.code === "ECONNABORTED") {
        response.error = "Your request timed out. Please try again!";
      } else if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.statusText) {
          response.error = "Server said: " + error.response.statusText;
        } else {
          response.error = "Sorry, server responded with an error";
        }
      } else if (error.request) {
        // The request was made but no response was received
        response.error =
          "Sorry! That charity ID may be invalid or you may have lost internet connection";
      } else {
        // Something happened in setting up the request that triggered an Error
        response.error = "Unknown error - please refresh the page!";
      }
      return response;
    });
}
