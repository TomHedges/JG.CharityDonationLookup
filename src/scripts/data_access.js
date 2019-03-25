import { HTTP_RESULT_STATUS } from "../constants/constants";
import { API_KEY } from "../constants/api_key";
import { http_request } from "./http_request";

const URL_ROOT = "https://api.justgiving.com/" + API_KEY + "/v1";
const URL_CHARITY_DETAILS = URL_ROOT + "/charity/";
const headers = { "Content-Type": "application/json" };

export function get_charity_details(charity_ID) {
  const url = URL_CHARITY_DETAILS + charity_ID;
  return http_request(url, headers).then(response => {
    let state_updates = {};

    if (response.status === HTTP_RESULT_STATUS.SUCCESS) {
      state_updates = {
        charity_details_found: {
          charity_name: response.data.name,
          charity_logo_url: response.data.logoAbsoluteUrl,
          charity_website: response.data.websiteUrl,
          charity_number: response.data.registrationNumber,
          charity_description: response.data.description
        },
        charity_ID_searched: charity_ID,
        charity_slugs: [
          response.data.name +
            " (Reg. Charity No. " +
            response.data.registrationNumber +
            ")"
        ]
      };
    } else {
      state_updates = {
        charity_details_found: {
          charity_name: "",
          charity_logo_url: "",
          charity_website: "",
          charity_number: "",
          charity_description: ""
        },
        charity_ID_searched: charity_ID,
        charity_slugs: [response.error]
      };
    }

    return state_updates;
  });
}
