import React, { Component } from "react";
import { hot } from "react-hot-loader";
import CharitySelection from "./CharitySelection";
import CharityDetails from "./CharityDetails";
import Donations from "./Donations";
import { handleChange } from "../scripts/event_handlers.js";
import { handleClick } from "../scripts/event_handlers.js";
import { handleSubmit } from "../scripts/event_handlers.js";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // charity_selected - boolean - set true once user first selects a charity to load their details/donations - then remains true. In future a loading spiiner is displayed when changing
      charity_selected: false,

      // charity_was_found - boolean - true if  a charity's details are succesfully returned by AJAX call process, else false. If false, prevents the handleClick action of displaying charity details
      charity_was_found: false,

      // show_list - boolean - true if the dropdown list of search results should be shown. set to false once a charity is selected, to hide the dropdown list. set to true again when new search begins
      show_list: true,

      // charity_ID - string - used for the controlled text input (charity ID search). Value displayedin text input and used as ID for API calls.
      charity_ID: "",

      // charity_ID_displayed - string - charity_ID of the currently displaeyd charity. Updated when user selects a new charity from the dropdown list. Used for automated refresh of donations.
      charity_ID_displayed: "",

      // charity_details_found - object - data returned by API call for charity details. Used to build the charity_slug to display in the dropdown. Updated with each search by AJAX call process.
      charity_details_found: {
        charity_logo_url: "",
        charity_website: "",
        charity_number: "",
        charity_name: "",
        charity_description: ""
      },

      // charity_details_displayed - object - charity data currently displayed. This is set when a search result is clicked on, and only udpated when a new search result is clicked on.
      charity_details_displayed: {
        charity_logo_url: "",
        charity_website: "",
        charity_number: "",
        charity_name: "",
        charity_description: ""
      },

      // charity_slug - string - message to show in the search results dropdown - may be a loading message, charity details (if search was successful), or an error message (if search was unsusccessful)
      charity_slug: "",

      // timestamp - string - UNIX millisecond timestamp of when charity donations were last updated
      timestamp: "",

      // donations - array/null - results of the charity donations search - if donations are successfully returned, the array contains an object for each gift. Array can be extended by future automated refreshes.
      donations: null
    };

    this.handleChange = handleChange.bind(this);
    this.handleClick = handleClick.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="main_content side_pad">
        <CharitySelection
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          charity_ID={this.state.charity_ID}
          charity_slug={this.state.charity_slug}
          charity_selected={this.state.charity_selected}
          show_list={this.state.show_list}
        />
        {this.state.charity_selected ? (
          <>
            <CharityDetails
              charity_selected={this.state.charity_selected}
              charity_details_displayed={this.state.charity_details_displayed}
            />
            <Donations
              donations={this.state.donations}
              timestamp={this.state.timestamp}
              handleClick={this.handleClick}
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(MainContent);
