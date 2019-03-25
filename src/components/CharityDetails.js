import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

const CharityDetails = props => (
  <div className="charity_details">
    <h2>Charity Details:</h2>
    <div className="charity_details_column_wrapper">
      <div className="charity_details_column_left">
        <p>
          <a href="">
            <img
              src={props.charity_details_displayed.charity_logo_url}
              className="charity_logo"
            />
          </a>
        </p>
        <p className="centred_text">
          <a href={props.charity_details_displayed.charity_website}>
            {props.charity_details_displayed.charity_website}
          </a>
        </p>
        <p className="centred_text">
          Reg. Charity Number: {props.charity_details_displayed.charity_number}
        </p>
      </div>
      <div className="charity_details_column_right">
        <h3>{props.charity_details_displayed.charity_name}</h3>
        <p>{props.charity_details_displayed.charity_description}</p>
      </div>
    </div>
  </div>
);

CharityDetails.propTypes = {
  charity_details_displayed: PropTypes.shape({
    charity_logo_url: PropTypes.string.isRequired,
    charity_website: PropTypes.string.isRequired,
    charity_number: PropTypes.string.isRequired,
    charity_name: PropTypes.string.isRequired,
    charity_description: PropTypes.string.isRequired
  }),
  charity_selected: PropTypes.bool.isRequired
};

export default hot(module)(CharityDetails);
