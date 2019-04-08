/*
 * event_handler.js
 * Event handlers and helper functions.
 */

import { get_charity_details } from "./data_access";
import { get_recent_donations } from "./data_access";

let timer;

/*
 * function handleChange(event: DOMEvent)
 * Handles changes in the input box value. Makes this a React controlled component. Makes asynchronous request
 * for charity details, and updates state with results.
 */
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

/*
 * function handleClick(event: DOMEvent)
 * Handles click event for the search results dropdown. Makes asynchronous request for donation details,
 * and updates state with results.
 */
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

/*
 * function update_donations_list(context: Context)
 * Allows the donations search to be repeated automatically.
 */
function update_donations_list(context) {
  get_recent_donations(context.state.charity_ID).then(state_updates => {
    const timestamp = new Date().getTime() + "";
    const donations = add_latest_donations(
      context.state.donations,
      state_updates.donations
    );
    context.setState(
      {
        timestamp: timestamp,
        donations: donations
      },
      () => {
        timer = setTimeout(() => {
          update_donations_list(context);
        }, 10000);
      }
    );
  });
}

/*
 * function add_latest_donations(current_donations: Array, new_donations: Array)
 * Combines the stored and freshly returned lists of donations. De-duplicates where it can - though this can be
 * erroneous due to the lack of definitive unique reference for a donation.
 */
function add_latest_donations(current_donations, new_donations) {
  let combined_donations = null;

  if (current_donations === null) {
    combined_donations = new_donations;
  } else {
    combined_donations = current_donations;
    var numberToAdd = new_donations.length;
    for (var i = 0; i < new_donations.length - 1; i++) {
      if (current_donations[0].donation_key === new_donations[i].donation_key) {
        numberToAdd = i;
      }
    }
    combined_donations = new_donations.slice(0, numberToAdd);
    combined_donations = combined_donations.concat(current_donations);
    //for (var i = 0; i < numberToAdd; i++) {
    //  combined_donations.unshift(new_donations[i]);
    //}
  }

  return combined_donations;
}

/*
 * function handleSubmit(event: DOMEvent)
 * Handles submit action for the form containing the search input. Prevents page reload.
 */
export function handleSubmit(event) {
  event.preventDefault();
}
