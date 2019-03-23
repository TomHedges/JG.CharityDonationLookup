import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import { handleChange } from "../scripts/charitySelection.js";

class CharitySelection extends Component {
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
    const listItems = this.state.charity_slugs.map(slug => (
      <span key={slug}>{slug}</span>
    ));

    return (
      <div className="charity_selection">
        <label htmlFor="charity_id">
          Please enter Charity ID and select charity from dropdown list:
        </label>
        <div className="dropdown">
          <input
            id="charity_id"
            type="text"
            className="charity_id_selector"
            value={this.state.charityID}
            onChange={this.handleChange}
          />
          <div id="myDropdown" className="dropdown-content">
            {listItems}
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(CharitySelection);
