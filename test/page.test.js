import Page from "../src/components/Page";

/**
 * Unit tests for the Page component
 */

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Page />);
});

describe("<Page /> rendering", () => {
  it("Should render <Page /> component", () => {
    wrapper = shallow(<Page />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("<Page /> displays HeaderContent, MainContent and FooterContent", () => {
  it("Should display a single <HeaderContent>", () => {
    expect(wrapper.find("HeaderContent")).toHaveLength(1);
  });

  it("Should display a single <MainContent>", () => {
    expect(wrapper.find("MainContent")).toHaveLength(1);
  });

  it("Should display a single <FooterContent>", () => {
    expect(wrapper.find("FooterContent")).toHaveLength(1);
  });

  it("Snapshot contains HeaderContent, MainContent and FooterContent components", () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
