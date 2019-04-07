/**
 * Unit tests for the HeaderContent component
 */

import HeaderContent from "../src/components/HeaderContent";

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
  wrapper = shallow(<HeaderContent {...props} />);
});

describe("<HeaderContent /> rendering", () => {
  it("Should render <HeaderContent /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe("HeaderContent with heading and logo", () => {
  it("Should render one <img>", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("Should render one <h1>", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("Should contain a h1 matching the heading prop", () => {
    expect(wrapper.find("h1").text()).toEqual(HEADING);
  });

  it("Should should display heading and logo", () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
