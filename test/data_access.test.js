/**
 * Unit tests for data_access.js
 */

import { get_charity_details } from "../src/scripts/data_access";
import { get_recent_donations } from "../src/scripts/data_access";

jest.mock("axios");

describe("Successful charity details request", () => {
  it("Should successfully return full charity details", () => {
    return get_charity_details("1").then(state_updates => {
      expect(state_updates).toEqual({
        charity_was_found: true,
        charity_details_found: {
          charity_name: "Oxfam",
          charity_logo_url: "www.oxfam.com/logo.jpeg",
          charity_website: "www.oxfam.com",
          charity_number: "884736",
          charity_description: "Some words about the charity"
        },
        charity_ID_searched: "1",
        charity_slug: "Oxfam (Reg. Charity No. 884736)"
      });
    });
  });

  it("Should successfully return dataset without URL prefix (where not a full website)", () => {
    return get_charity_details("2").then(state_updates => {
      expect(state_updates).toEqual({
        charity_was_found: true,
        charity_details_found: {
          charity_name: "Oxfam",
          charity_logo_url: "www.oxfam.com/logo.jpeg",
          charity_website: "",
          charity_number: "884736",
          charity_description: "Some words about the charity"
        },
        charity_ID_searched: "2",
        charity_slug: "Oxfam (Reg. Charity No. 884736)"
      });
    });
  });

  it("Should return blank data and error message if not successful", () => {
    return get_charity_details("3").then(state_updates => {
      expect(state_updates).toEqual({
        charity_was_found: false,
        charity_details_found: {
          charity_name: "",
          charity_logo_url: "",
          charity_website: "",
          charity_number: "",
          charity_description: ""
        },
        charity_ID_searched: "3",
        charity_slug: "Server said: That's an error"
      });
    });
  });
});

describe("Successful donations request", () => {
  it("Should successfully return full set of donations", () => {
    return get_recent_donations("1").then(state_updates => {
      expect(state_updates).toEqual({
        donations: [
          {
            donor_name: "Bob",
            donation_date: "/Date(1554076800005+0000)/",
            donor_comment: "From bob with love",
            donation_amount: 50.23,
            donation_tax_reclaim: 3,
            donation_currency: "GBP",
            donation_currency_local: "GBP",
            donation_amount_local: 50.23,
            donor_avatar_url: "www.link.com/to_image.jpg",
            donation_key:
              "Bob" +
              "/Date(1554076800005+0000)/" +
              "From bob with love" +
              "50.23"
          },
          {
            donor_name: "Bob",
            donation_date: "/Date(1554076800006+0000)/",
            donor_comment: "From bob with love",
            donation_amount: 50.23,
            donation_tax_reclaim: 3,
            donation_currency: "GBP",
            donation_currency_local: "GBP",
            donation_amount_local: 50.23,
            donor_avatar_url: "www.link.com/to_image.jpg",
            donation_key:
              "Bob" +
              "/Date(1554076800006+0000)/" +
              "From bob with love" +
              "50.23"
          },
          {
            donor_name: "Bob",
            donation_date: "/Date(1554076800007+0000)/",
            donor_comment: "From bob with love",
            donation_amount: 50.23,
            donation_tax_reclaim: 3,
            donation_currency: "GBP",
            donation_currency_local: "GBP",
            donation_amount_local: 50.23,
            donor_avatar_url: "www.link.com/to_image.jpg",
            donation_key:
              "Bob" +
              "/Date(1554076800007+0000)/" +
              "From bob with love" +
              "50.23"
          },
          {
            donor_name: "Bob",
            donation_date: "/Date(1554076800008+0000)/",
            donor_comment: "From bob with love",
            donation_amount: 50.23,
            donation_tax_reclaim: 3,
            donation_currency: "GBP",
            donation_currency_local: "GBP",
            donation_amount_local: 50.23,
            donor_avatar_url: "www.link.com/to_image.jpg",
            donation_key:
              "Bob" +
              "/Date(1554076800008+0000)/" +
              "From bob with love" +
              "50.23"
          }
        ]
      });
    });
  });

  it("Should successfully return donations with null replaced by blank String or 0", () => {
    return get_recent_donations("2").then(state_updates => {
      expect(state_updates).toEqual({
        donations: [
          {
            donor_name: "",
            donation_date: "",
            donor_comment: "",
            donation_amount: 0,
            donation_tax_reclaim: 0,
            donation_currency: "GBP",
            donation_currency_local: "GBP",
            donation_amount_local: 50.23,
            donor_avatar_url: "www.link.com/to_image.jpg",
            donation_key: "" + "" + "" + "0"
          },
          {
            donor_name: "Bob",
            donation_date: "/Date(1554076800002+0000)/",
            donor_comment: "From bob with love",
            donation_amount: 50.23,
            donation_tax_reclaim: 3,
            donation_currency: "",
            donation_currency_local: "",
            donation_amount_local: 0,
            donor_avatar_url: "",
            donation_key:
              "Bob" +
              "/Date(1554076800002+0000)/" +
              "From bob with love" +
              "50.23"
          }
        ]
      });
    });
  });

  it("Should return blank array if request is not successful", () => {
    return get_recent_donations("3").then(state_updates => {
      expect(state_updates).toEqual({
        donations: []
      });
    });
  });
});
