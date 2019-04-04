import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

/**
 * CharityDetails.js
 * Summary details of selected charity. Displays name, logo, description, website and charity number
 */

/**
 * function getLinkWrappedContent(link_URL: String, children: Element) {
 * Receives a URL String and child Element - returns the children wrapped in a link (where it not blank),
 * else returns the children only
 */
function getLinkWrappedContent(link_URL, children) {
  if (link_URL !== "") {
    return (
      <a href={link_URL} target="_blank">
        {children}
      </a>
    );
  } else {
    return children;
  }
}

/**
 * const CharityDetails
 * Returns div element containing charity information.
 * If there is a charity logo, this is in two sections:
 *   - Charity logo (left hand column)
 *   - Charity details - name, description, website and charity number (right hand column)
 * Else, there is only a single column
 * Some paragraphs are displayed only if the content they should display is not blank
 * Some content is wrapped in a lin kt othe chairty website if this is not blank
 */
const CharityDetails = props => (
  <div className="charity_details">
    <h2>Charity Details:</h2>
    <div className="charity_details_column_wrapper">
      {props.charity_details_displayed.charity_logo_url !== "" ? (
        <div className="charity_details_column_left">
          {getLinkWrappedContent(
            props.charity_details_displayed.charity_website,
            <img
              src={props.charity_details_displayed.charity_logo_url}
              className="charity_logo"
            />
          )}
        </div>
      ) : null}
      <div
        className={
          props.charity_details_displayed.charity_logo_url !== ""
            ? "charity_details_column_right"
            : ""
        }
      >
        <h3>
          {getLinkWrappedContent(
            props.charity_details_displayed.charity_website,
            props.charity_details_displayed.charity_name
          )}
        </h3>
        {props.charity_details_displayed.charity_description !== "" ? (
          <p>{props.charity_details_displayed.charity_description}</p>
        ) : null}
        <p className="bold">
          Reg. Charity Number: {props.charity_details_displayed.charity_number}
        </p>
        {props.charity_details_displayed.charity_website !== "" ? (
          <p className="bold">
            <a
              href={props.charity_details_displayed.charity_website}
              target="_blank"
            >
              {props.charity_details_displayed.charity_website}
            </a>
          </p>
        ) : null}
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
  }).isRequired
};

export default hot(module)(CharityDetails);
