import CharitySelection from "../src/components/CharitySelection";
import { handleSubmit } from "../src/scripts/event_handlers.js";

/**
 * Unit tests for the CharitySelection component
 */

const TEST_CHARITY_SLUG = "Tom's Great Charity (12345)";
const TEST_CHARITY_ID = "98765";
const HANDLE_CLICK = jest.fn();

function createTestProps(props) {
  return {
    handleChange: () => {},
    handleClick: HANDLE_CLICK,
    handleSubmit: handleSubmit,
    charity_ID: TEST_CHARITY_ID,
    charity_slug: TEST_CHARITY_SLUG,
    show_list: true,
    ...props
  };
}

let wrapper, tree;
const props = createTestProps();

describe("<CharitySelection /> display changes based on state", () => {
  it("Should render <CharitySelection /> component", () => {
    wrapper = shallow(<CharitySelection {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should display charity_slug text in a span", () => {
    wrapper = shallow(<CharitySelection {...props} />);
    expect(
      wrapper.find("div.dropdown_content_shown > span.charity_result")
    ).toHaveLength(1);
  });

  it("Should not display charity_slug text when show_list is false", () => {
    wrapper = shallow(<CharitySelection {...props} show_list={false} />);
    expect(wrapper.find("div.dropdown_content_shown")).toHaveLength(0);
  });

  it("Should not display charity_slug dropdown when message is blank", () => {
    wrapper = shallow(<CharitySelection {...props} charity_slug={""} />);
    expect(wrapper.find("div.dropdown_content_shown span")).toHaveLength(0);
  });

  it("Should not display charity_slug dropdown when message is null", () => {
    wrapper = shallow(<CharitySelection {...props} charity_slug={null} />);
    expect(wrapper.find("div.dropdown_content_shown span")).toHaveLength(0);
  });

  it("Snapshot should contain charity_slug text in span, within div class 'dropdown_content_shown'", () => {
    wrapper = shallow(<CharitySelection {...props} />);
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Snapshot should contain charity_slug text in span, within div class 'dropdown_content_hidden'", () => {
    wrapper = shallow(<CharitySelection {...props} show_list={false} />);
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<CharitySelection /> interactions", () => {
  it("Should cancel form submission", () => {
    wrapper = shallow(<CharitySelection {...props} />);
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });

  it("Should call handleClick when span is clicked", () => {
    wrapper = shallow(<CharitySelection {...props} />);
    const span = wrapper
      .find("div.dropdown_content_shown > span.charity_result")
      .simulate("click");
    expect(HANDLE_CLICK.mock.calls.length).toEqual(1);
  });
});
