/**
 * Unit tests for the FooterContent component
 */

import FooterContent from "../src/components/FooterContent";

const HEADING = "JG Donations Report";

function createTestProps(props) {
  return {
    heading: HEADING,
    ...props
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<FooterContent {...props} />);
});

describe("<FooterContent /> rendering", () => {
  it("Should render <FooterContent /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe("FooterContent should contain copyright assertion and header text", () => {
  it("Should display one <p>", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });

  it("Should display one <p> containing copyright assertion and heading", () => {
    expect(wrapper.find("p").text()).toEqual("© Tom Hedges 2019 - " + HEADING);
  });

  it("Snapshot should display copyright assertion and header text", () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
