import Donations from "../src/components/Donations";

/**
 * Unit tests for the Donations component
 */

const TIMESTAMP = "04/04/2019, 19:42:15";
const FORMATTED_TIMESTAMP =
  "Last refreshed: " + TIMESTAMP + " (Refreshes every 10 seconds)";
const HANDLE_CLICK = jest.fn();

const DONOR_NAME = "Tom Hedges";
const DONATION_DATE_1 = "/Date(1554076800001+0000)/";
const DONATION_DATE_2 = "/Date(1554076800002+0000)/";
const DONATION_DATE_3 = "/Date(1554076800003+0000)/";
const DONATION_DATE_4 = "/Date(1554076800004+0000)/";
const DONOR_COMMENT = "Good luck!";
const DONATION_AMOUNT = 10;
const DONATION_CURRENCY = "GBP";
const DONATION_TAX_RECLAIM = 2.5;
const DONATION_AMOUNT_LOCAL = 10;
const DONATION_CURRENCY_LOCAL = "GBP";
const DONOR_AVATAR_URL =
  "https://images.justgiving.com/image/f1e9879a-dace-443a-a453-d0636e66a348.jpg?template=profilesummary";

const DONATIONS = [
  {
    donor_name: DONOR_NAME,
    donation_date: DONATION_DATE_1,
    donor_comment: DONOR_COMMENT,
    donation_amount: DONATION_AMOUNT,
    donation_currency: DONATION_CURRENCY,
    donation_tax_reclaim: DONATION_TAX_RECLAIM,
    donation_amount_local: DONATION_AMOUNT_LOCAL,
    donation_currency_local: DONATION_CURRENCY_LOCAL,
    donor_avatar_url: DONOR_AVATAR_URL,
    donation_key: DONOR_NAME + DONATION_DATE_1 + DONOR_COMMENT + DONATION_AMOUNT
  },
  {
    donor_name: DONOR_NAME,
    donation_date: DONATION_DATE_2,
    donor_comment: DONOR_COMMENT,
    donation_amount: DONATION_AMOUNT,
    donation_currency: DONATION_CURRENCY,
    donation_tax_reclaim: DONATION_TAX_RECLAIM,
    donation_amount_local: DONATION_AMOUNT_LOCAL,
    donation_currency_local: DONATION_CURRENCY_LOCAL,
    donor_avatar_url: DONOR_AVATAR_URL,
    donation_key: DONOR_NAME + DONATION_DATE_2 + DONOR_COMMENT + DONATION_AMOUNT
  },
  {
    donor_name: DONOR_NAME,
    donation_date: DONATION_DATE_3,
    donor_comment: DONOR_COMMENT,
    donation_amount: DONATION_AMOUNT,
    donation_currency: DONATION_CURRENCY,
    donation_tax_reclaim: DONATION_TAX_RECLAIM,
    donation_amount_local: DONATION_AMOUNT_LOCAL,
    donation_currency_local: DONATION_CURRENCY_LOCAL,
    donor_avatar_url: DONOR_AVATAR_URL,
    donation_key: DONOR_NAME + DONATION_DATE_3 + DONOR_COMMENT + DONATION_AMOUNT
  },
  {
    donor_name: DONOR_NAME,
    donation_date: DONATION_DATE_4,
    donor_comment: DONOR_COMMENT,
    donation_amount: DONATION_AMOUNT,
    donation_currency: DONATION_CURRENCY,
    donation_tax_reclaim: DONATION_TAX_RECLAIM,
    donation_amount_local: DONATION_AMOUNT_LOCAL,
    donation_currency_local: DONATION_CURRENCY_LOCAL,
    donor_avatar_url: DONOR_AVATAR_URL,
    donation_key: DONOR_NAME + DONATION_DATE_4 + DONOR_COMMENT + DONATION_AMOUNT
  }
];

function createTestProps_Loading(props) {
  return {
    timestamp: "not displayed",
    donations: null,
    handleClick: HANDLE_CLICK,
    ...props
  };
}

function createTestProps_DonationsReceived(props) {
  return {
    timestamp: TIMESTAMP,
    donations: DONATIONS,
    handleClick: HANDLE_CLICK,
    ...props
  };
}

function createTestProps_NoDonationsFound(props) {
  return {
    timestamp: TIMESTAMP,
    donations: [],
    handleClick: HANDLE_CLICK,
    ...props
  };
}

let wrapper, props, tree;

describe("Loading - display heading and loading spinner", () => {
  it("Should render <Donations /> component", () => {
    props = createTestProps_Loading();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain a h2 tag with the title 'Recent Donations:'", () => {
    props = createTestProps_Loading();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("h2").text()).toEqual("Recent Donations:");
  });

  it("Should have a p tag with the message 'Loading donations...'", () => {
    props = createTestProps_Loading();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("p").text()).toEqual("Loading donations...");
  });

  it("Should have a div with the loading spinner classes", () => {
    props = createTestProps_Loading();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("div.loader.loader_50")).toHaveLength(1);
  });

  it("Should display no donations", () => {
    props = createTestProps_DonationsReceived();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("div.donation_wrapper")).toHaveLength(0);
  });

  it("Snapshot should display heading, message and loading spinner", () => {
    props = createTestProps_Loading();
    wrapper = shallow(<Donations {...props} />);
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Results returned - display heading, refresh timestamp, and donations", () => {
  it("Should render <Donations /> component", () => {
    props = createTestProps_DonationsReceived();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain a h2 tag with the title 'Recent Donations:'", () => {
    props = createTestProps_DonationsReceived();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("h2").text()).toEqual("Recent Donations:");
  });

  it("Should display a p.refresh_message with the formatted timestamp", () => {
    props = createTestProps_DonationsReceived();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("p.refresh_message").text()).toEqual(
      FORMATTED_TIMESTAMP
    );
  });

  it("Should contain the same number of donations as there are elements in the 'donations' array prop", () => {
    props = createTestProps_DonationsReceived();
    //const testInstance = renderer.create(<Donations {...props} />).root;
    //expect(testInstance.findAllByType(Donation)).toHaveLength(DONATIONS.length);

    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("Donation")).toHaveLength(DONATIONS.length);
  });

  it("Snapshot should display heading, timestamp and donations", () => {
    props = createTestProps_DonationsReceived();
    wrapper = shallow(<Donations {...props} />);
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("No results returned - display heading, refresh timestamp, and message 'No donations found.'", () => {
  it("Should render <Donations /> component", () => {
    props = createTestProps_NoDonationsFound();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain a h2 tag with the title 'Recent Donations:'", () => {
    props = createTestProps_NoDonationsFound();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("h2").text()).toEqual("Recent Donations:");
  });

  it("Should contain a p with the message 'No donations found.'", () => {
    props = createTestProps_NoDonationsFound();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("p.centred_text.bold").text()).toEqual(
      "No donations found."
    );
  });

  it("Should display no donations", () => {
    props = createTestProps_DonationsReceived();
    wrapper = shallow(<Donations {...props} />);
    expect(wrapper.find("div.donation_wrapper")).toHaveLength(0);
  });

  it("Snapshot should display heading, timestamp and 'no donations' message", () => {
    props = createTestProps_NoDonationsFound();
    wrapper = shallow(<Donations {...props} />);
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
