import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

const CharitySelection = props => {
  const dropdown_class =
    props.show_list === true
      ? "dropdown_content_shown"
      : "dropdown_content_hidden";

  const slug =
    props.charity_slug !== "" ? (
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
