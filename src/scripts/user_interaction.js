import { get_charity_details } from "./../scripts/data_access";
import { get_recent_donations } from "./../scripts/data_access";

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
      charity_slugs: [],
      charity_found: false
    });
  } else {
    this.setState({
      charity_ID: value,
      charity_ID_searched: value,
      charity_details_found: blank_charity_details,
      charity_slugs: ["Loading..."],
      charity_found: false,
      show_list: true
    });

    get_charity_details(value).then(state_updates => {
      if (
        this.state.charity_ID !== "" &&
        this.state.charity_ID_searched === state_updates.charity_ID_searched
      ) {
        this.setState({
          charity_found: true,
          charity_details_found: state_updates.charity_details_found,
          charity_slugs: state_updates.charity_slugs
        });
      }
    });
  }
}

export function handleClick(event) {
  if (this.state.charity_found) {
    this.setState(
      {
        charity_selected: true,
        charity_details_displayed: this.state.charity_details_found,
        show_list: false
      },
      () => {
        get_recent_donations(this.state.charity_ID).then(state_updates => {
          console.log(state_updates);
          const timestamp = Date.now();
          this.setState({
            timestamp: timestamp,
            donations: state_updates.donations
          });
        });
      }
    );
  }
}

export function handleSubmit(event) {
  event.preventDefault();
}
