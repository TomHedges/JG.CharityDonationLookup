import HeaderContent from "../src/components/HeaderContent";

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
  wrapper = shallow(<HeaderContent {...props} />);
});

describe("<HeaderContent /> rendering", () => {
  it("Should render <HeaderContent /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Should render one <img>", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
  it("Should render one <h1>", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});

describe("Snapshot should contain logo and heading", () => {
  const tree = renderer.create(wrapper).toJSON();
  expect(tree).toMatchSnapshot();
});
