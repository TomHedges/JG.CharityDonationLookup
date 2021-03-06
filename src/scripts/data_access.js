/*
 * data_access.js
 * Helper functions to de-couple the React-aware fuctionality from the HTTP library.
 * Provides a consistent API - making and consuming HTTP requests, and converting response or error
 * data into a format that is suitable for the React App business logic.
 */

import { HTTP_RESULT_STATUS } from "../constants/constants";
import { API_KEY } from "../constants/api_key";
import { http_request } from "./http_request";

const URL_ROOT = "https://api.justgiving.com/" + API_KEY + "/v1";
const URL_CHARITY_DETAILS = URL_ROOT + "/charity/";
const headers = { "Content-Type": "application/json" };

/*
 * function get_charity_details(charity_ID: String)
 * Receives a charity_ID, generates the URL for a charity details request, and forwards to the HTTP request function.
 * Returns the charity details data, or an error message.
 * Errors commonly returned as user enters IDs which return 4xx or 5xx range errors from the JustGiving server.
 */
export function get_charity_details(charity_ID) {
  const url = URL_CHARITY_DETAILS + charity_ID;
  return http_request(url, headers).then(response => {
    let state_updates = {};

    if (response.status === HTTP_RESULT_STATUS.SUCCESS) {
      const charity_website =
        response.data.websiteUrl !== "http://" ? response.data.websiteUrl : "";
      state_updates = {
        charity_was_found: true,
        charity_details_found: {
          charity_name: response.data.name,
          charity_logo_url: response.data.logoAbsoluteUrl,
          charity_website: charity_website,
          charity_number: response.data.registrationNumber,
          charity_description: response.data.description
        },
        charity_ID_searched: charity_ID,
        charity_slug:
          response.data.name +
          " (Reg. Charity No. " +
          response.data.registrationNumber +
          ")"
      };
    } else {
      state_updates = {
        charity_was_found: false,
        charity_ID_searched: charity_ID,
        charity_details_found: {
          charity_name: "",
          charity_logo_url: "",
          charity_website: "",
          charity_number: "",
          charity_description: ""
        },
        charity_slug: response.error
      };
    }

    return state_updates;
  });
}

/*
 * function get_recent_donations(charity_ID: String)
 * Receives a charity_ID, generates the URL for a donations request, and forwards to the HTTP request function.
 * Returns the donation data, or an error message.
 */
export function get_recent_donations(charity_ID) {
  const url = URL_CHARITY_DETAILS + charity_ID + "/donations";
  return http_request(url, headers).then(response => {
    let state_updates = {};

    if (response.status === HTTP_RESULT_STATUS.SUCCESS) {
      let donations = [];
      let i;
      for (i = 0; i < response.data.donations.length; i++) {
        let donation = {};
        donation.donor_name = response.data.donations[i].donorDisplayName
          ? response.data.donations[i].donorDisplayName
          : "";
        donation.donation_date = response.data.donations[i].donationDate
          ? response.data.donations[i].donationDate
          : "";
        donation.donor_comment = response.data.donations[i].message
          ? response.data.donations[i].message
          : "";
        donation.donation_amount = response.data.donations[i].amount
          ? response.data.donations[i].amount
          : 0;
        donation.donation_tax_reclaim = response.data.donations[i]
          .estimatedTaxReclaim
          ? response.data.donations[i].estimatedTaxReclaim
          : 0;
        donation.donation_currency = response.data.donations[i].currencyCode
          ? response.data.donations[i].currencyCode
          : "";
        donation.donation_currency_local = response.data.donations[i]
          .donorLocalCurrencyCode
          ? response.data.donations[i].donorLocalCurrencyCode
          : "";
        donation.donation_amount_local = response.data.donations[i]
          .donorLocalAmount
          ? response.data.donations[i].donorLocalAmount
          : 0;
        donation.donor_avatar_url = response.data.donations[i].imageUrl
          ? response.data.donations[i].imageUrl
          : "";
        donation.donation_key =
          donation.donor_name +
          donation.donation_date +
          donation.donor_comment +
          donation.donation_amount;
        donations.push(donation);
      }
      state_updates = {
        donations: donations
      };
    } else {
      state_updates = {
        donations: []
      };
    }

    return state_updates;
  });
}
