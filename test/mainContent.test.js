import MainContent from "../src/components/MainContent";

/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */
function createTestProps(props) {
  return {
    charity_selected: false,
    charity_ID: "",
    charity_found: false,
    charity_details_found: {
      charity_logo_url: "",
      charity_website: "",
      charity_number: "",
      charity_name: "",
      charity_description: ""
    },
    charity_details_displayed: {
      charity_logo_url: "",
      charity_website: "",
      charity_number: "",
      charity_name: "",
      charity_description: ""
    },
    charity_slugs: [],
    show_list: true,
    ...props
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<MainContent {...props} />);
});

describe("<MainContent /> rendering", () => {
  it("Should render one <CharitySelection>", () => {
    expect(wrapper.find("CharitySelection")).toHaveLength(1);
  });

  /*
  it("Should render only one <CharityDetails /> if a charity has been selected", () => {
    wrapper = shallow(<MainContent {...props} charity_selected={true} />);
    expect(wrapper.find("CharityDetails")).toHaveLength(1);
  });

  it("Should render only one <Donations /> if a charity has been selected", () => {
    wrapper = shallow(<MainContent {...props} charity_selected={true} />);
    expect(wrapper.find("Donations")).toHaveLength(1);
  });
  */
});
