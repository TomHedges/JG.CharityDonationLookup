/**
 * Unit tests for the CharityDetails component
 */

import CharityDetails from "../src/components/CharityDetails";

const HEADING = "Charity Details:";
const CHARITY_LOGO_URL =
  "https://images.justgiving.com/image/4cf848f3-9ca5-4f54-9250-216c74d58eb7.png";
const CHARITY_WEBSITE = "http://www.macmillan.org.uk";
const CHARITY_NUMBER = "261017";
const CHARITY_NAME = "Macmillan Cancer Support";
const CHARITY_DESCRIPTION =
  "We’re here to help everyone with cancer live life as fully as they can, providing physical, financial and emotional support. So whatever cancer throws your way, we’re right there with you.";
const FORMATTED_CHARITY_NUMBER = "Reg. Charity Number: " + CHARITY_NUMBER;

function createTestProps(props) {
  return {
    charity_details_displayed: {
      charity_logo_url: CHARITY_LOGO_URL,
      charity_website: CHARITY_WEBSITE,
      charity_number: CHARITY_NUMBER,
      charity_name: CHARITY_NAME,
      charity_description: CHARITY_DESCRIPTION
    },
    ...props
  };
}

let wrapper, props, tree;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<CharityDetails {...props} />);
});

describe("<CharityDetails /> rendering", () => {
  it("Should render <CharityDetails /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Display with all props - logo, name, description, charity number and website link", () => {
  it("Should contain one h2 heading", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  });

  it("Should contain heading text: " + HEADING, () => {
    expect(wrapper.find("h2").text()).toEqual(HEADING);
  });

  it("Should contain a column wrapper div", () => {
    expect(wrapper.find("div.charity_details_column_wrapper")).toHaveLength(1);
  });

  it("Should contain a left column div within the wrapper", () => {
    expect(
      wrapper.find(
        "div.charity_details_column_wrapper > div.charity_details_column_left"
      )
    ).toHaveLength(1);
  });

  it("Should have a link in the left column div", () => {
    expect(
      wrapper.find(
        "div.charity_details_column_wrapper > div.charity_details_column_left > a"
      )
    ).toHaveLength(1);
  });

  it("Should have a link in the left column to the URL specified in the charity_website prop", () => {
    expect(
      wrapper
        .find(
          "div.charity_details_column_wrapper > div.charity_details_column_left > a"
        )
        .prop("href")
    ).toEqual(CHARITY_WEBSITE);
  });

  it("Should have a linked img in the left column div", () => {
    expect(
      wrapper.find(
        "div.charity_details_column_wrapper > div.charity_details_column_left > a > img"
      )
    ).toHaveLength(1);
  });

  it("Should display image source from prop charity_logo_url", () => {
    expect(
      wrapper
        .find(
          "div.charity_details_column_wrapper > div.charity_details_column_left > a > img"
        )
        .prop("src")
    ).toEqual(CHARITY_LOGO_URL);
  });

  it("Should contain a right column div within the wrapper", () => {
    expect(
      wrapper.find(
        "div.charity_details_column_wrapper > div.charity_details_column_right"
      )
    ).toHaveLength(1);
  });

  it("Should have an h3, in the right column div", () => {
    expect(
      wrapper.find(
        "div.charity_details_column_wrapper > div.charity_details_column_right > h3"
      )
    ).toHaveLength(1);
  });

  it("Should have an h3 with text matching charity_name prop", () => {
    expect(
      wrapper
        .find(
          "div.charity_details_column_wrapper > div.charity_details_column_right > h3"
        )
        .text()
    ).toEqual(CHARITY_NAME);
  });

  it("Should have a link in the h3 to the charity_website prop", () => {
    expect(
      wrapper
        .find(
          "div.charity_details_column_wrapper > div.charity_details_column_right > h3 > a"
        )
        .prop("href")
    ).toEqual(CHARITY_WEBSITE);
  });

  it("Should have a p in the right column div, matching the charity_description prop", () => {
    expect(
      wrapper
        .find("div.charity_details_column_right > p")
        .at(0)
        .text()
    ).toEqual(CHARITY_DESCRIPTION);
  });

  it("Should have a 2nd p in the right column div, displaying a formatted charity_description", () => {
    expect(
      wrapper
        .find("div.charity_details_column_right > p")
        .at(1)
        .text()
    ).toEqual(FORMATTED_CHARITY_NUMBER);
  });

  it("Should have a 3rd p in the right column div, containing a link", () => {
    expect(
      wrapper
        .find("div.charity_details_column_right > p")
        .at(2)
        .find("a")
    ).toHaveLength(1);
  });

  it("Should have a 3rd p in the right column div, containing a link with src matching the charity_website prop", () => {
    expect(
      wrapper
        .find("div.charity_details_column_right > p")
        .at(2)
        .find("a")
        .prop("href")
    ).toEqual(CHARITY_WEBSITE);
  });

  it("Should have a 3rd p in the right column div, containing a link with text matching the charity_website prop", () => {
    expect(
      wrapper
        .find("div.charity_details_column_right > p")
        .at(2)
        .find("a")
        .text()
    ).toEqual(CHARITY_WEBSITE);
  });

  it("Snapshot should display all charity details", () => {
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Display single column of name, description, charity number and website link when there is a blank logo URL", () => {
  it("Should contain a column wrapper div", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: "",
          charity_website: CHARITY_WEBSITE,
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(wrapper.find("div.charity_details_column_wrapper")).toHaveLength(1);
  });

  it("Should contain a single div within the wrapper div", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: "",
          charity_website: CHARITY_WEBSITE,
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(
      wrapper.find("div.charity_details_column_wrapper > div")
    ).toHaveLength(1);
  });

  it("Should contain a single div within the wrapper div, which has no class name", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: "",
          charity_website: CHARITY_WEBSITE,
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(
      wrapper.find("div.charity_details_column_wrapper > div").prop("className")
    ).toEqual("");
  });

  it("Snapshot should display all charity details", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: "",
          charity_website: CHARITY_WEBSITE,
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Display content without links when the charity_website prop is blank", () => {
  it("Should display charity logo directly within left column div", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: "",
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(
      wrapper.find("div.charity_details_column_left > img.charity_logo")
    ).toHaveLength(1);
  });

  it("Should not have a link within the left column div", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: "",
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(wrapper.find("div.charity_details_column_left > a")).toHaveLength(0);
  });

  it("Should display charity name within h3 tag, matching charity_name prop", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: "",
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(wrapper.find("h3").text()).toEqual(CHARITY_NAME);
  });

  it("Should not have a link within the h3 tag", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: "",
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(wrapper.find("h3 > a")).toHaveLength(0);
  });

  it("Should not display the final p tag for the website - so there should be two p tags, not 3", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: "",
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    expect(wrapper.find("div.charity_details_column_right > p")).toHaveLength(
      2
    );
  });

  it("Snapshot should display all charity details without links to charity website", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: "",
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: CHARITY_DESCRIPTION
        }}
      />
    );
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Display content without description when this is blank", () => {
  it("Should display charity number in the first p tag in the right hand column", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: CHARITY_WEBSITE,
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: ""
        }}
      />
    );
    expect(
      wrapper
        .find("div.charity_details_column_right > p")
        .at(0)
        .text()
    ).toEqual(FORMATTED_CHARITY_NUMBER);
  });

  it("Snapshot should display all charity details except the blank description", () => {
    wrapper = shallow(
      <CharityDetails
        {...props}
        charity_details_displayed={{
          charity_logo_url: CHARITY_LOGO_URL,
          charity_website: CHARITY_WEBSITE,
          charity_number: CHARITY_NUMBER,
          charity_name: CHARITY_NAME,
          charity_description: ""
        }}
      />
    );
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
