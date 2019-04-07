/**
 * Unit tests for the MainContent component
 */

import MainContent from "../src/components/MainContent";

let wrapper;

describe("<MainContent /> rendering", () => {
  it("Should render <MainContent /> component", () => {
    wrapper = shallow(<MainContent />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("<MainContent /> displays only CharitySelection content on inital load", () => {
  it("Should display a single <CharitySelection>", () => {
    wrapper = shallow(<MainContent />);
    expect(wrapper.find("CharitySelection")).toHaveLength(1);
  });

  it("Should not contain a <CharityDetails /> component", () => {
    wrapper = shallow(<MainContent />);
    expect(wrapper.find("CharityDetails")).toHaveLength(0);
  });

  it("Should not contain a <Donations /> component", () => {
    wrapper = shallow(<MainContent />);
    expect(wrapper.find("Donations")).toHaveLength(0);
  });

  it("Snapshot contains only CharitySelection content", () => {
    wrapper = shallow(<MainContent />);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<MainContent /> displays CharitySelection, CharityDetails and Donations when charity is selected", () => {
  it("Should contain a CharitySelection component", () => {
    wrapper = shallow(<MainContent />);
    expect(wrapper.find("CharitySelection")).toHaveLength(1);
  });

  it("Should contain one <CharityDetails /> component", () => {
    wrapper = shallow(<MainContent />);
    wrapper.setState({ charity_selected: true });
    expect(wrapper.find("CharityDetails")).toHaveLength(1);
  });

  it("Should contain one <Donations /> component", () => {
    wrapper = shallow(<MainContent />);
    wrapper.setState({ charity_selected: true });
    expect(wrapper.find("Donations")).toHaveLength(1);
  });

  it("Snapshot should contain CharitySelection, CharityDetails and Donations", () => {
    wrapper = shallow(<MainContent />);
    wrapper.setState({ charity_selected: true });
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
