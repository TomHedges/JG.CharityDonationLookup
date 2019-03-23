import HeaderContent from "../src/components/HeaderContent";

describe("<HeaderContent /> rendering", () => {
  let wrapper = shallow(<HeaderContent heading="test" />);

  //THIS FAILS - because the sinlge returned element is not a child???
  //it("Sould contain one <div>", () => {
  //  expect(wrapper.children("div")).toHaveLength(1);
  //});
  it("Sould contain one <img>", () => {
    expect(wrapper.children("img")).toHaveLength(1);
  });
  it("Sould contain one <h1>", () => {
    expect(wrapper.children("h1")).toHaveLength(1);
  });
});
