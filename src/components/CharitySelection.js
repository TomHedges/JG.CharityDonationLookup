/**
 * CharitySelection.js
 * Form to select charity by ID number. Contains only one labelled text input, plus a conditionally
 * visible span containing the name/reg. number of the charity. AJAX lookup performed as input value changes.
 */

import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

/**
 * const CharitySelection
 * Returns the labelled text box, along with a div-enclosed-span containing the AJAX lookup results. These are
 * styled to look like a dropdown list (will only contain one result at a time). The text shown in the "dropdown"
 * may be a search result, loading message or error message.
 */
const CharitySelection = props => {
  const dropdown_class =
    props.show_list === true
      ? "dropdown_content_shown"
      : "dropdown_content_hidden";

  const slug =
    props.charity_slug !== "" && props.charity_slug !== null ? (
      <span onClick={props.handleClick} className="charity_result">
        {props.charity_slug}
      </span>
    ) : null;

  return (
    <div className="charity_selection">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="charity_id">
          Please enter Charity ID and select charity from dropdown list:
        </label>
        <div className="dropdown_wrapper">
          <input
            id="charity_id"
            type="text"
            className="charity_id_selector"
            value={props.charity_ID}
            onChange={props.handleChange}
          />
          <div className={dropdown_class}>{slug}</div>
        </div>
      </form>
    </div>
  );
};

CharitySelection.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  charity_slug: PropTypes.string.isRequired,
  charity_ID: PropTypes.string.isRequired,
  show_list: PropTypes.bool.isRequired
};

export default hot(module)(CharitySelection);
