import CharitySelection from "../src/components/CharitySelection";

/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */
function createTestProps(props) {
  return {
    handleChange: () => {},
    charity_ID: "123",
    charity_slugs: ["here is a slug"],
    ...props
  };
}

let wrapper, props;

//beforeEach(() => {
props = createTestProps();
wrapper = shallow(<CharitySelection {...props} />);
//});

describe("<CharitySelection /> rendering", () => {
  it("Should render <CharitySelection /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe("<CharitySelection /> interactions", () => {
  it("Record change in input value when text is entered", () => {
    console.log(wrapper.find("input").props());
    wrapper.find("input").simulate("change", {
      target: { value: "15678" }
    });
    console.log(wrapper.find("input").props());
    expect(wrapper.find("input").props().value).toEqual("15678");
  });
});
