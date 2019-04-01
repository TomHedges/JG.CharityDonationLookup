import CharitySelection from "../src/components/CharitySelection";
import { handleSubmit } from "../src/scripts/event_handlers.js";

/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */

const TEST_CHARITY_SLUG = "Tom's Great Charity (12345)";
const TEST_CHARITY_ID = "98765";

function createTestProps(props) {
  return {
    handleChange: () => {},
    handleClick: () => {},
    handleSubmit: handleSubmit,
    charity_ID: TEST_CHARITY_ID,
    charity_slug: TEST_CHARITY_SLUG,
    show_list: true,
    ...props
  };
}

let wrapper, props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<CharitySelection {...props} />);
});

describe("<CharitySelection /> rendering", () => {
  test("Should render <CharitySelection /> component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe("<CharitySelection /> interactions", () => {
  test("Should cancel form submission", () => {
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });
});

describe("<CharitySelection /> display changes based on state", () => {
  test("Should display charity_slug text", () => {
    expect(wrapper.find("div.dropdown_content_shown")).toHaveLength(1);
  });

  test("Should not display charity_slug text when show_list is false", () => {
    wrapper = shallow(<CharitySelection {...props} show_list={false} />);
    expect(wrapper.find("div.dropdown_content_shown")).toHaveLength(0);
  });

  test("Should not display charity_slug dropdown when message is blank", () => {
    wrapper = shallow(<CharitySelection {...props} charity_slug={""} />);
    expect(wrapper.find("div.dropdown_content_shown span")).toHaveLength(0);
  });

  test("Should not display charity_slug dropdown when message is null", () => {
    wrapper = shallow(<CharitySelection {...props} charity_slug={null} />);
    expect(wrapper.find("div.dropdown_content_shown span")).toHaveLength(0);
  });

  let tree;

  test("Snapshot should contain charity_slug text in span, within div class 'dropdown_content_shown'", () => {
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Snapshot should contain charity_slug text in span, within div class 'dropdown_content_hidden'", () => {
    wrapper = shallow(<CharitySelection {...props} show_list={false} />);
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Snapshot should not contain charity_slug text in span, within div class 'dropdown_content_hidden'", () => {
    wrapper = shallow(<CharitySelection {...props} show_list={false} />);
    tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
