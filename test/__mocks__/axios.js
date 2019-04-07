/*
 *  Mocked axios HTTP request library - to return specified values for unit and integration tests
 */

const CHARITY_NAME = "Oxfam";
const CHARITY_LOGO_URL = "www.oxfam.com/logo.jpeg";
const CHARITY_WEBSITE = "www.oxfam.com";
const CHARITY_NUMBER = "884736";
const CHARITY_DESCRIPTION = "Some words about the charity";

const DONOR_DISPLAY_NAME = "Bob";
const DONATION_DATE_1 = "/Date(1554076800001+0000)/";
const DONATION_DATE_2 = "/Date(1554076800002+0000)/";
const DONATION_DATE_3 = "/Date(1554076800003+0000)/";
const DONATION_DATE_4 = "/Date(1554076800004+0000)/";
const DONATION_DATE_5 = "/Date(15540768000050+0000)/";
const DONATION_DATE_6 = "/Date(1554076800006+0000)/";
const MESSAGE = "From bob with love";
const AMOUNT = 50.23;
const ESTIMATE_TAX_RECLAIM = 3;
const CURRENCY_CODE = "GBP";
const DONOR_LOCAL_CURRENCY_CODE = "GBP";
const DONOR_LOCAL_AMOUNT = 50.23;
const IMAGE_URL = "www.link.com/to_image.jpg";

module.exports = {
  get: url => {
    /*
     *  http_request.js Unit Tests
     */

    switch (url) {
      case "charity_details":
        return Promise.resolve({
          data: {
            charity_was_found: true,
            charity_details_found: {
              charity_name: "Oxfam"
            }
          }
        });

      case "test":
        return Promise.resolve({
          data: "Server response"
        });

      case "fail_with_statusText":
        return Promise.reject({
          response: {
            statusText: "Message from server"
          }
        });

      case "fail_without_statusText":
        return Promise.reject({
          response: {}
        });

      case "fail_timed_out":
        return Promise.reject({
          code: "ECONNABORTED"
        });

      case "fail_returning_request":
        return Promise.reject({
          request: {}
        });

      case "fail_unknown_error":
        return Promise.reject({});

      /*
       *  data_access.js Unit Tests
       */

      case "https://api.justgiving.com/975998a1/v1/charity/1":
        return Promise.resolve({
          data: {
            name: CHARITY_NAME,
            logoAbsoluteUrl: CHARITY_LOGO_URL,
            websiteUrl: CHARITY_WEBSITE,
            registrationNumber: CHARITY_NUMBER,
            description: CHARITY_DESCRIPTION
          }
        });

      case "https://api.justgiving.com/975998a1/v1/charity/2":
        return Promise.resolve({
          data: {
            name: CHARITY_NAME,
            logoAbsoluteUrl: CHARITY_LOGO_URL,
            websiteUrl: "http://",
            registrationNumber: CHARITY_NUMBER,
            description: CHARITY_DESCRIPTION
          }
        });

      case "https://api.justgiving.com/975998a1/v1/charity/3":
        return Promise.reject({
          response: { statusText: "That's an error" }
        });

      case "https://api.justgiving.com/975998a1/v1/charity/1/donations":
        return Promise.resolve({
          data: {
            donations: [
              {
                donorDisplayName: DONOR_DISPLAY_NAME,
                donationDate: DONATION_DATE_1,
                message: MESSAGE,
                amount: AMOUNT,
                estimatedTaxReclaim: ESTIMATE_TAX_RECLAIM,
                currencyCode: CURRENCY_CODE,
                donorLocalCurrencyCode: DONOR_LOCAL_CURRENCY_CODE,
                donorLocalAmount: DONOR_LOCAL_AMOUNT,
                imageUrl: IMAGE_URL
              },
              {
                donorDisplayName: DONOR_DISPLAY_NAME,
                donationDate: DONATION_DATE_2,
                message: MESSAGE,
                amount: AMOUNT,
                estimatedTaxReclaim: ESTIMATE_TAX_RECLAIM,
                currencyCode: CURRENCY_CODE,
                donorLocalCurrencyCode: DONOR_LOCAL_CURRENCY_CODE,
                donorLocalAmount: DONOR_LOCAL_AMOUNT,
                imageUrl: IMAGE_URL
              },
              {
                donorDisplayName: DONOR_DISPLAY_NAME,
                donationDate: DONATION_DATE_3,
                message: MESSAGE,
                amount: AMOUNT,
                estimatedTaxReclaim: ESTIMATE_TAX_RECLAIM,
                currencyCode: CURRENCY_CODE,
                donorLocalCurrencyCode: DONOR_LOCAL_CURRENCY_CODE,
                donorLocalAmount: DONOR_LOCAL_AMOUNT,
                imageUrl: IMAGE_URL
              },
              {
                donorDisplayName: DONOR_DISPLAY_NAME,
                donationDate: DONATION_DATE_4,
                message: MESSAGE,
                amount: AMOUNT,
                estimatedTaxReclaim: ESTIMATE_TAX_RECLAIM,
                currencyCode: CURRENCY_CODE,
                donorLocalCurrencyCode: DONOR_LOCAL_CURRENCY_CODE,
                donorLocalAmount: DONOR_LOCAL_AMOUNT,
                imageUrl: IMAGE_URL
              }
            ]
          }
        });

      case "https://api.justgiving.com/975998a1/v1/charity/2/donations":
        return Promise.resolve({
          data: {
            donations: [
              {
                donorDisplayName: null,
                donationDate: null,
                message: null,
                amount: null,
                estimatedTaxReclaim: null,
                currencyCode: CURRENCY_CODE,
                donorLocalCurrencyCode: DONOR_LOCAL_CURRENCY_CODE,
                donorLocalAmount: DONOR_LOCAL_AMOUNT,
                imageUrl: IMAGE_URL
              },
              {
                donorDisplayName: DONOR_DISPLAY_NAME,
                donationDate: DONATION_DATE_2,
                message: MESSAGE,
                amount: AMOUNT,
                estimatedTaxReclaim: ESTIMATE_TAX_RECLAIM,
                currencyCode: null,
                donorLocalCurrencyCode: null,
                donorLocalAmount: null,
                imageUrl: null
              }
            ]
          }
        });

      case "https://api.justgiving.com/975998a1/v1/charity/3/donations":
        return Promise.reject({});

      /*
       *  Fallback for any mocked requests
       */

      default:
        console.log("DEFAULT RESPONSE: URL = " + url);
        return Promise.reject({});
    }
  }
};
