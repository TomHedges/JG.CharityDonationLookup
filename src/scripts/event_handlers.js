import { get_charity_details } from "./data_access";
import { get_recent_donations } from "./data_access";

let timer;

export function handleChange(event) {
  const value = event.target.value;
  const blank_charity_details = {
    charity_logo_url: "",
    charity_website: "",
    charity_number: "",
    charity_name: "",
    charity_description: ""
  };

  if ((value === null) | (value === "")) {
    this.setState({
      charity_ID: "",
      charity_details_found: blank_charity_details,
      charity_ID_searched: "",
      charity_slug: ""
    });
  } else {
    this.setState({
      charity_ID: value,
      charity_ID_searched: value,
      charity_details_found: blank_charity_details,
      charity_was_found: false,
      charity_slug: "Loading...",
      show_list: true
    });

    get_charity_details(value).then(state_updates => {
      if (
        //state_updates.charity_was_found === true &&
        //this.state.charity_ID !== "" &&
        this.state.charity_ID_searched === state_updates.charity_ID_searched
      ) {
        this.setState({
          charity_was_found: state_updates.charity_was_found,
          charity_details_found: state_updates.charity_details_found,
          charity_slug: state_updates.charity_slug
        });
      }
    });
  }
}

export function handleClick(event) {
  if (event.target.id === "charity_result") {
    clearTimeout(timer);
    if (this.state.charity_was_found) {
      this.setState(
        {
          charity_selected: true,
          charity_details_displayed: this.state.charity_details_found,
          show_list: false,
          timestamp: "",
          donations: null
        },
        () => {
          update_donations_list(this);
        }
      );
    }
  }
}

export function handleSubmit(event) {
  event.preventDefault();
}

function update_donations_list(context) {
  get_recent_donations(context.state.charity_ID).then(state_updates => {
    const date = new Date();
    const timestamp = date.toLocaleString();
    context.setState(
      {
        timestamp: timestamp,
        donations: state_updates.donations
      },
      () => {
        timer = setTimeout(() => {
          update_donations_list(context);
        }, 10000);
      }
    );
  });
}
