import FooterContent from "../src/components/FooterContent";

/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */
function createTestProps(props) {
  return {
    heading: "JG Donations Report",
    ...props
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<FooterContent {...props} />);
});

describe("<FooterContent /> rendering", () => {
  it("Should render one <p>", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
