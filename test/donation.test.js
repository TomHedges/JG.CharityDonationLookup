import Donation from "../src/components/Donation";

/**
 * Unit tests for the Donation component
 */

const DONOR_NAME = "Tom Hedges";
const DONATION_DATE = "/Date(1554076800000+0000)/";
const DONATION_DATE_DISPLAY_FORMAT = "01/04/2019";
const DONOR_COMMENT = "Good luck!";
const DONATION_AMOUNT = 10;
const DONATION_CURRENCY = "GBP";
const DONATION_AMOUNT_CONVERTED = "£10.00";
const DONATION_TAX_RECLAIM = 2.5;
const DONATION_AMOUNT_LOCAL = 10;
const DONATION_CURRENCY_LOCAL = "GBP";
const DONATION_TAX_RECLAIM_CONVERTED = "+ £2.50 Gift Aid";
const DONOR_AVATAR_URL =
  "https://images.justgiving.com/image/f1e9879a-dace-443a-a453-d0636e66a348.jpg?template=profilesummary";
const NO_TAX_RECLAIM = 0;
const USD_DONATION_AMOUNT_LOCAL = 15;
const USD_DONATION_CURRENCY_LOCAL = "USD";
const USD_DONATION_AMOUNT_CONVERTED = "$15.00";
const DONATION_KEY =
  DONOR_NAME + DONATION_DATE + DONOR_COMMENT + DONATION_AMOUNT;

function createTestProps(props) {
  return {
    donor_name: DONOR_NAME,
    donation_date: DONATION_DATE,
    donor_comment: DONOR_COMMENT,
    donation_amount: DONATION_AMOUNT,
    donation_currency: DONATION_CURRENCY,
    donation_tax_reclaim: DONATION_TAX_RECLAIM,
    donation_amount_local: DONATION_AMOUNT_LOCAL,
    donation_currency_local: DONATION_CURRENCY_LOCAL,
    donor_avatar_url: DONOR_AVATAR_URL,
    donation_key: DONATION_KEY,
    ...props
  };
}

let wrapper, props, tree;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<Donation {...props} />);
});

describe("<Donation /> rendering", () => {
  it("Should render <Donation /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Display with all props (GBP) - image, name, date, comment, amount and GA amount", () => {
  it("Should contain a left column div", () => {
    expect(wrapper.find("div.donation_column_left")).toHaveLength(1);
  });

  it("Should have an img in the left column div", () => {
    expect(wrapper.find("div.donation_column_left img")).toHaveLength(1);
  });

  it("Should display image source from prop donor_avatar_url", () => {
    expect(wrapper.find("div.donation_column_left img").prop("src")).toEqual(
      DONOR_AVATAR_URL
    );
  });

  it("Should contain a right column div", () => {
    expect(wrapper.find("div.donation_column_right")).toHaveLength(1);
  });

  it("Should have a p.donation_date, in the right column div", () => {
    expect(
      wrapper.find("div.donation_column_right p.donation_date")
    ).toHaveLength(1);
  });

  it("Should have p.donation_date text matching donation_date prop", () => {
    expect(
      wrapper.find("div.donation_column_right p.donation_date").text()
    ).toEqual(DONATION_DATE_DISPLAY_FORMAT);
  });

  it("Should have a p.donor_name, in the right column div", () => {
    expect(wrapper.find("div.donation_column_right p.donor_name")).toHaveLength(
      1
    );
  });

  it("Should have p.donor_name text matching donor_name prop", () => {
    expect(
      wrapper.find("div.donation_column_right p.donor_name").text()
    ).toEqual(DONOR_NAME);
  });

  it("Should have a p.donor_name, in the right column div", () => {
    expect(wrapper.find("div.donation_column_right p.donor_name")).toHaveLength(
      1
    );
  });

  it("Should have p.donor_name text matching donor_name prop", () => {
    expect(
      wrapper.find("div.donation_column_right p.donor_name").text()
    ).toEqual(DONOR_NAME);
  });

  it("Should have a p.donor_comment, in the right column div", () => {
    expect(
      wrapper.find("div.donation_column_right p.donor_comment")
    ).toHaveLength(1);
  });

  it("Should have p.donor_comment text matching donor_comment prop", () => {
    expect(
      wrapper.find("div.donation_column_right p.donor_comment").text()
    ).toEqual(DONOR_COMMENT);
  });

  it("Should have a p.donation_amount, in the right column div", () => {
    expect(
      wrapper.find("div.donation_column_right p.donation_amount")
    ).toHaveLength(1);
  });

  it("Should have p.donation_amount text containing correctly formatted currency symbol and donation amount", () => {
    expect(
      wrapper
        .find("div.donation_column_right p.donation_amount")
        .childAt(0)
        .text()
    ).toEqual(DONATION_AMOUNT_CONVERTED);
  });

  it("Should have span.tax_reclaim within p.donation_amount", () => {
    expect(
      wrapper.find(
        "div.donation_column_right p.donation_amount span.tax_reclaim"
      )
    ).toHaveLength(1);
  });

  it("Should have span.tax_reclaim containing correctly formatted currency symbol and Gift Aid amount", () => {
    expect(
      wrapper
        .find("div.donation_column_right p.donation_amount span.tax_reclaim")
        .text()
    ).toEqual(DONATION_TAX_RECLAIM_CONVERTED);
  });

  it("Snapshot should display all data", () => {
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Display GBP donation amount correctly without Gift Aid", () => {
  it("Should have a p.donation_amount, in the right column div", () => {
    wrapper = shallow(
      <Donation {...props} donation_tax_reclaim={NO_TAX_RECLAIM} />
    );
    expect(
      wrapper.find("div.donation_column_right p.donation_amount")
    ).toHaveLength(1);
  });

  it("Should have p.donation_amount text containing correctly formatted currency symbol and donation amount", () => {
    wrapper = shallow(
      <Donation {...props} donation_tax_reclaim={NO_TAX_RECLAIM} />
    );
    expect(
      wrapper
        .find("div.donation_column_right p.donation_amount")
        .childAt(0)
        .text()
    ).toEqual(DONATION_AMOUNT_CONVERTED);
  });

  it("Should not have span within p.donation_amount", () => {
    wrapper = shallow(
      <Donation {...props} donation_tax_reclaim={NO_TAX_RECLAIM} />
    );
    expect(
      wrapper.find("div.donation_column_right p.donation_amount span")
    ).toHaveLength(0);
  });

  it("Snapshot should display donation without Gift Aid", () => {
    wrapper = shallow(
      <Donation {...props} donation_tax_reclaim={NO_TAX_RECLAIM} />
    );
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Display USD donation amount correctly", () => {
  it("Should have a p.donation_amount, in the right column div", () => {
    wrapper = shallow(
      <Donation
        {...props}
        donation_currency_local={USD_DONATION_CURRENCY_LOCAL}
        donation_amount_local={USD_DONATION_AMOUNT_LOCAL}
        donation_tax_reclaim={NO_TAX_RECLAIM}
      />
    );
    expect(
      wrapper.find("div.donation_column_right p.donation_amount")
    ).toHaveLength(1);
  });

  it("Should have p.donation_amount text containing correctly formatted currency symbol and donation amount", () => {
    wrapper = shallow(
      <Donation
        {...props}
        donation_currency_local={USD_DONATION_CURRENCY_LOCAL}
        donation_amount_local={USD_DONATION_AMOUNT_LOCAL}
        donation_tax_reclaim={NO_TAX_RECLAIM}
      />
    );
    expect(
      wrapper
        .find("div.donation_column_right p.donation_amount")
        .childAt(0)
        .text()
    ).toEqual(USD_DONATION_AMOUNT_CONVERTED);
  });

  it("Should not have span within p.donation_amount", () => {
    wrapper = shallow(
      <Donation
        {...props}
        donation_currency_local={USD_DONATION_CURRENCY_LOCAL}
        donation_amount_local={USD_DONATION_AMOUNT_LOCAL}
        donation_tax_reclaim={NO_TAX_RECLAIM}
      />
    );
    expect(
      wrapper.find("div.donation_column_right p.donation_amount span")
    ).toHaveLength(0);
  });

  it("Snapshot should display USD data", () => {
    wrapper = shallow(
      <Donation
        {...props}
        donation_currency_local={USD_DONATION_CURRENCY_LOCAL}
        donation_amount_local={USD_DONATION_AMOUNT_LOCAL}
        donation_tax_reclaim={NO_TAX_RECLAIM}
      />
    );
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
