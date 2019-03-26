import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import Donation from "./Donation";

//class Donations extends Component {
//  constructor(props) {
//    super(props);
//  }

//  render() {

const Donations = props => {
  const donations = props.donations.map((donation, index) => (
    <Donation key={index} {...donation} />
  ));

  return (
    <div className="donations">
      <h2>Recent Donations:</h2>
      <p className="refresh_message">Last refreshed: {props.timestamp}</p>
      <div>{donations}</div>
    </div>
  );
};
//}

Donations.propTypes = {
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
      donor_avatar_url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default hot(module)(Donations);
