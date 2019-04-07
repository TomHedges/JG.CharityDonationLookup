/**
 * Unit tests for the http_request.js
 */

import { http_request } from "../src/scripts/http_request";
import { HTTP_RESULT_STATUS } from "../src/constants/constants";

jest.mock("axios");

describe("Successful HTTP request returns data", () => {
  it("Should successfully return test data", () => {
    return http_request("test").then(response => {
      expect(response.status).toEqual(HTTP_RESULT_STATUS.SUCCESS);
      expect(response.data).toEqual("Server response");
    });
  });

  it("Should successfully return charity data", () => {
    return http_request("charity_details").then(response => {
      expect(response.status).toEqual(HTTP_RESULT_STATUS.SUCCESS);
      expect(response.data.charity_was_found).toBeTruthy();
      expect(response.data.charity_details_found.charity_name).toEqual("Oxfam");
    });
  });
});

describe("Failed HTTP request returns gracefully", () => {
  it("Should return error statusText if provided by server", () => {
    return http_request("fail_with_statusText").then(response => {
      expect(response.status).toEqual(HTTP_RESULT_STATUS.ERROR);
      expect(response.error).toEqual("Server said: " + "Message from server");
    });
  });

  it("Should return error message if no statusText provided by server", () => {
    return http_request("fail_without_statusText").then(response => {
      expect(response.status).toEqual(HTTP_RESULT_STATUS.ERROR);
      expect(response.error).toEqual("Sorry, server responded with an error");
    });
  });

  it("Should return error message if the HTTP request times out/aborts", () => {
    return http_request("fail_timed_out").then(response => {
      expect(response.status).toEqual(HTTP_RESULT_STATUS.ERROR);
      expect(response.error).toEqual(
        "Your request timed out. Please try again!"
      );
    });
  });

  it("Should return error message if there is a 503 error or similar connection refusal", () => {
    return http_request("fail_returning_request").then(response => {
      expect(response.status).toEqual(HTTP_RESULT_STATUS.ERROR);
      expect(response.error).toEqual(
        "Sorry! That charity ID may be invalid or you may have lost internet connection"
      );
    });
  });

  it("Should return error message if there is any other type of failure", () => {
    return http_request("fail_unknown_error").then(response => {
      expect(response.status).toEqual(HTTP_RESULT_STATUS.ERROR);
      expect(response.error).toEqual(
        "Unknown error - please refresh the page!"
      );
    });
  });
});
