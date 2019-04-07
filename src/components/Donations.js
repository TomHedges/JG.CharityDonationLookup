/**
 * Donations.js
 * Display wrapper for a collection of donations - includes heading, loader spinner and the collection itself
 */

import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import Donation from "./Donation";

/**
 * const Donations
 * Returns a heading and one of:
 *  - loading spinner/message
 *  - list of donations (including timestamp and link to refresh)
 *  - message that there are no donations to display (including timestamp and link to refresh)
 */
const Donations = props => {
  const donations =
    props.donations !== null && props.donations.length > 0 ? (
      props.donations.map(donation => (
        <Donation key={donation.donation_key} {...donation} />
      ))
    ) : (
      <p className="centred_text bold">No donations found.</p>
    );

  return (
    <div className="donations">
      <h2>Recent Donations:</h2>
      {props.donations === null ? (
        <>
          <p className="centred_text bold">Loading donations...</p>
          <div className="loader loader_50" />
        </>
      ) : (
        <>
          <p className="refresh_message">
            Last refreshed: {props.timestamp} (Refreshes every 10 seconds)
          </p>
          <div>{donations}</div>
        </>
      )}
    </div>
  );
};

Donations.propTypes = {
  handleClick: PropTypes.func.isRequired,
  timestamp: PropTypes.string.isRequired,
  donations: PropTypes.arrayOf(
    PropTypes.shape({
      donor_name: PropTypes.string.isRequired,
      donation_date: PropTypes.string.isRequired,
      donor_comment: PropTypes.string.isRequired,
      donation_amount: PropTypes.number.isRequired,
      donation_tax_reclaim: PropTypes.number.isRequired,
      donation_currency: PropTypes.string.isRequired,
      donation_currency_local: PropTypes.string.isRequired,
      donation_amount_local: PropTypes.number.isRequired,
      donor_avatar_url: PropTypes.string.isRequired,
      donation_key: PropTypes.string.isRequired
    })
  )
};

export default hot(module)(Donations);
