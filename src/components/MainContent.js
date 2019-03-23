import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import CharitySelection from "./CharitySelection";
import CharityDetails from "./CharityDetails";
import Donations from "./Donations";
import { handleChange } from "./../scripts/charitySelection.js";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityID: "",
      charity_details: {},
      charity_slugs: []
    };

    this.handleChange = handleChange.bind(this);
  }

  render() {
    return (
      <div className="main_content side_pad">
        <CharitySelection handleChange={this.handleChange} {...this.state} />
        <CharityDetails
          charity_logo_url={""}
          charity_website={""}
          charity_number={""}
          charity_name={""}
          charity_description={""}
        />
        <Donations />
      </div>
    );
  }
}

export default hot(module)(MainContent);
