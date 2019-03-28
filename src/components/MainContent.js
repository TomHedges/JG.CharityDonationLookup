import React, { Component } from "react";
import { hot } from "react-hot-loader";
import CharitySelection from "./CharitySelection";
import CharityDetails from "./CharityDetails";
import Donations from "./Donations";
import { handleChange } from "../scripts/user_interaction.js";
import { handleClick } from "../scripts/user_interaction.js";
import { handleSubmit } from "../scripts/user_interaction.js";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charity_selected: false,
      charity_was_found: false,
      show_list: true,
      charity_ID: "",
      charity_details_found: {
        charity_logo_url: "",
        charity_website: "",
        charity_number: "",
        charity_name: "",
        charity_description: ""
      },
      charity_details_displayed: {
        charity_logo_url: "",
        charity_website: "",
        charity_number: "",
        charity_name: "",
        charity_description: ""
      },
      charity_slug: "",
      timestamp: "",
      donations: []
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
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(MainContent);
