import FooterContent from "../src/components/FooterContent";

/**
 * Unit tests for the FooterContent component
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

describe("Snapshot should contain copyright statement and header text", () => {
  const tree = renderer.create(wrapper).toJSON();
  expect(tree).toMatchSnapshot();
});
