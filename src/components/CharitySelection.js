import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import PropTypes from "prop-types";

const CharitySelection = props => {
  const listItems = props.charity_slugs.map(slug => (
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
          value={props.charityID}
          onChange={props.handleChange}
        />
        <div id="myDropdown" className="dropdown-content">
          {listItems}
        </div>
      </div>
    </div>
  );
};

CharitySelection.propTypes = {
  handleChange: PropTypes.func.isRequired,
  charity_slugs: PropTypes.array.isRequired,
  charityID: PropTypes.string.isRequired
};

export default hot(module)(CharitySelection);
