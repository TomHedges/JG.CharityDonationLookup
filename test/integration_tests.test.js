/**
 * Integration test - using MainContent component as an entryway
 */

import MainContent from "../src/components/MainContent";

jest.mock("axios");
jest.setTimeout(30000);

const flushPromises = () => {
  return new Promise(resolve => setImmediate(resolve));
};

const wrapper = mount(<MainContent />);

it("Should have some blank states and no data displayed on intial load", () => {
  expect(wrapper.state("charity_ID")).toEqual("");
  expect(wrapper.state("charity_was_found")).not.toBeTruthy();

  wrapper.update();

  expect(wrapper.find("input#charity_id").prop("value")).toEqual("");
  expect(wrapper.find("span#charity_result")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();
});

it("Should update state and display with loading message when the input is changed to 9", async () => {
  expect(
    wrapper
      .find("input#charity_id")
      .simulate("change", { target: { value: "9" } })
  );

  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("9");
  expect(wrapper.state("charity_slug")).toEqual("Loading...");
  expect(wrapper.find("span#charity_result").text()).toEqual("Loading...");
  expect(wrapper.find("CharityDetails")).toHaveLength(0);
  expect(wrapper.find("Donations")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();

  await flushPromises();
});

it("Should update state and display with returned error message, as this is not a known charity ID", () => {
  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("9");
  expect(wrapper.state("charity_slug")).toEqual(
    "Sorry! That charity ID may be invalid or you may have lost internet connection"
  );
  expect(wrapper.find("span#charity_result").text()).toEqual(
    "Sorry! That charity ID may be invalid or you may have lost internet connection"
  );
  expect(wrapper.find("CharityDetails")).toHaveLength(0);
  expect(wrapper.find("Donations")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();
});

it("Should update state and display with loading message when the input is changed to 99", async () => {
  expect(
    wrapper
      .find("input#charity_id")
      .simulate("change", { target: { value: "99" } })
  );

  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("99");
  expect(wrapper.state("charity_slug")).toEqual("Loading...");
  expect(wrapper.find("span#charity_result").text()).toEqual("Loading...");
  expect(wrapper.find("CharityDetails")).toHaveLength(0);
  expect(wrapper.find("Donations")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();

  await flushPromises();
});

it("Should update state and display with returned charity data", () => {
  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("99");
  expect(wrapper.state("charity_slug")).toEqual(
    "Barnados (Reg. Charity No. 111333)"
  );
  expect(wrapper.find("span#charity_result").text()).toEqual(
    "Barnados (Reg. Charity No. 111333)"
  );
  expect(wrapper.find("CharityDetails")).toHaveLength(0);
  expect(wrapper.find("Donations")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();
});

it("Should clear state state and display when the input is emptied", () => {
  expect(
    wrapper
      .find("input#charity_id")
      .simulate("change", { target: { value: "" } })
  );

  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("");
  expect(wrapper.state("charity_slug")).toEqual("");
  expect(wrapper.find("span#charity_result")).toHaveLength(0);
  expect(wrapper.find("CharityDetails")).toHaveLength(0);
  expect(wrapper.find("Donations")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();
});

it("Should update state and display with loading message when the input is changed to 1", async () => {
  expect(
    wrapper
      .find("input#charity_id")
      .simulate("change", { target: { value: "1" } })
  );

  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("1");
  expect(wrapper.state("charity_slug")).toEqual("Loading...");
  expect(wrapper.find("span#charity_result").text()).toEqual("Loading...");
  expect(wrapper.find("CharityDetails")).toHaveLength(0);
  expect(wrapper.find("Donations")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();

  await flushPromises();
});

it("Should update state and results display with details of charity 1", () => {
  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("1");
  expect(wrapper.state("charity_slug")).toEqual(
    "Oxfam (Reg. Charity No. 884736)"
  );
  expect(wrapper.state("charity_details_found")).toEqual({
    charity_logo_url: "www.oxfam.com/logo.jpeg",
    charity_website: "www.oxfam.com",
    charity_number: "884736",
    charity_name: "Oxfam",
    charity_description: "Some words about the charity"
  });
  expect(wrapper.state("charity_details_displayed")).toEqual({
    charity_logo_url: "",
    charity_website: "",
    charity_number: "",
    charity_name: "",
    charity_description: ""
  });
  expect(wrapper.find("span#charity_result").text()).toEqual(
    "Oxfam (Reg. Charity No. 884736)"
  );
  expect(wrapper.find("CharityDetails")).toHaveLength(0);
  expect(wrapper.find("Donations")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharityDetails")).toJSON()
  ).toMatchSnapshot();
});

it("Should update display with details of charity, request donations and show loading spinner", async () => {
  expect(wrapper.find("span#charity_result").simulate("click"));

  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("1");
  expect(wrapper.state("show_list")).not.toBeTruthy();
  expect(wrapper.state("charity_details_displayed")).toEqual(
    wrapper.state("charity_details_found")
  );

  expect(wrapper.find("div.dropdown_content_hidden")).toHaveLength(1);
  expect(wrapper.find("CharityDetails")).toHaveLength(1);
  expect(wrapper.find("div.charity_details h3")).toHaveLength(1);
  expect(wrapper.find("div.charity_details h3").text()).toEqual("Oxfam");
  expect(wrapper.find("Donations")).toHaveLength(1);
  expect(wrapper.find("div.loader")).toHaveLength(1);
  expect(wrapper.find("Donation")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharityDetails")).toJSON()
  ).toMatchSnapshot();

  await flushPromises();
});

it("Should hold list of 4 donations in state and display them", () => {
  wrapper.update();
  //console.log(wrapper.state("donations"));
  expect(wrapper.state("donations")).toHaveLength(4);
  expect(wrapper.state("donations")).toMatchSnapshot();

  expect(wrapper.state("charity_details_found")).toEqual({
    charity_logo_url: "www.oxfam.com/logo.jpeg",
    charity_website: "www.oxfam.com",
    charity_number: "884736",
    charity_name: "Oxfam",
    charity_description: "Some words about the charity"
  });
  expect(wrapper.state("charity_details_displayed")).toEqual(
    wrapper.state("charity_details_found")
  );

  expect(wrapper.find("CharityDetails")).toHaveLength(1);
  expect(wrapper.find("Donations")).toHaveLength(1);
  expect(wrapper.find("Donation")).toHaveLength(4);
  expect(wrapper.find("p.donor_name")).toHaveLength(4);
  expect(
    wrapper
      .find("p.donor_name")
      .at(0)
      .text()
  ).toEqual("Bob");
});

it("Should wait for the auto-refresh process to complete once, and ensure that 2 additional donations are displayed", done => {
  // This setState is a hack to force mocked HTTP request library to return "more recent" donations
  wrapper.setState({ charity_ID_displayed: "1b" });
  wrapper.update();

  setTimeout(() => {
    expect(wrapper.state("donations")).toHaveLength(6);
    expect(wrapper.state("donations")).toMatchSnapshot();
    done();
  }, 14000);
});

it("Should wait for the auto-refresh process to complete again, and ensure that another 2 additional donations are displayed", done => {
  // This setState is a hack to force mocked HTTP request library to return "more recent" donations
  wrapper.setState({ charity_ID_displayed: "1c" });
  wrapper.update();

  setTimeout(() => {
    expect(wrapper.state("donations")).toHaveLength(8);
    expect(wrapper.state("donations")).toMatchSnapshot();
    done();
  }, 14000);
});

it("Should wait for the auto-refresh process to complete again, and ensure that donations data has not changed (as there were no updates)", done => {
  setTimeout(() => {
    expect(wrapper.state("donations")).toHaveLength(8);
    expect(wrapper.state("donations")).toMatchSnapshot();
    done();
  }, 14000);
});

it("Should leave donations displayed, but search for new charity details when the input is changed to 2", async () => {
  expect(
    wrapper
      .find("input#charity_id")
      .simulate("change", { target: { value: "2" } })
  );

  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("2");
  expect(wrapper.state("charity_slug")).toEqual("Loading...");
  expect(wrapper.state("charity_details_found")).toEqual({
    charity_logo_url: "",
    charity_website: "",
    charity_number: "",
    charity_name: "",
    charity_description: ""
  });
  expect(wrapper.state("charity_details_displayed")).toEqual({
    charity_logo_url: "www.oxfam.com/logo.jpeg",
    charity_website: "www.oxfam.com",
    charity_number: "884736",
    charity_name: "Oxfam",
    charity_description: "Some words about the charity"
  });
  expect(wrapper.find("span#charity_result").text()).toEqual("Loading...");
  expect(wrapper.find("CharityDetails")).toHaveLength(1);
  expect(wrapper.find("Donations")).toHaveLength(1);
  expect(wrapper.find("Donation")).toHaveLength(8);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();

  await flushPromises();
});

it("Should update state and dropdown display with new charity data", () => {
  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("2");
  expect(wrapper.state("charity_slug")).toEqual(
    "Oxfam (Reg. Charity No. 884736)"
  );
  expect(wrapper.find("span#charity_result").text()).toEqual(
    "Oxfam (Reg. Charity No. 884736)"
  );
  wrapper.update();
  expect(wrapper.find("CharityDetails")).toHaveLength(1);
  expect(wrapper.find("div.donation_wrapper")).toHaveLength(8);

  expect(
    renderer.create(wrapper.find("CharityDetails")).toJSON()
  ).toMatchSnapshot();
});

it("Should update state and display with returned data about new charity with ID 2", async () => {
  expect(wrapper.find("span#charity_result").simulate("click"));

  wrapper.update();

  expect(wrapper.state("charity_ID")).toEqual("2");
  expect(wrapper.state("show_list")).not.toBeTruthy();
  expect(wrapper.state("charity_details_displayed")).toEqual(
    wrapper.state("charity_details_found")
  );

  wrapper.update();

  expect(wrapper.find("div.dropdown_content_hidden")).toHaveLength(1);
  expect(wrapper.find("CharityDetails")).toHaveLength(1);
  expect(wrapper.find("div.charity_details h3")).toHaveLength(1);
  expect(wrapper.find("div.charity_details h3").text()).toEqual("Oxfam");
  expect(wrapper.find("Donations")).toHaveLength(1);
  expect(wrapper.find("div.loader")).toHaveLength(1);
  expect(wrapper.find("Donation")).toHaveLength(0);
  expect(wrapper.find("div.donation_wrapper")).toHaveLength(0);

  expect(
    renderer.create(wrapper.find("CharitySelection")).toJSON()
  ).toMatchSnapshot();

  await flushPromises();
});

it("Should hold list of 2 donations in state and display them", () => {
  wrapper.update();
  expect(wrapper.state("donations")).toHaveLength(2);
  expect(wrapper.state("donations")).toMatchSnapshot();

  expect(wrapper.state("charity_details_found")).toEqual({
    charity_logo_url: "www.oxfam.com/logo.jpeg",
    charity_website: "",
    charity_number: "884736",
    charity_name: "Oxfam",
    charity_description: "Some words about the charity"
  });
  expect(wrapper.state("charity_details_displayed")).toEqual(
    wrapper.state("charity_details_found")
  );
});
