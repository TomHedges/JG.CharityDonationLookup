import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import unknown_avatar from "./../images/unknown_avatar.svg";

const Donation = props => (
  <div className="donation_wrapper">
    <div className="donation_column_left">
      <img className="unknown_avatar" src={props.donor_avatar} />
    </div>
    <div className="donation_column_right">
      <p className="donation_date">{props.donation_date}</p>
      <p className="donor_name">{props.donor_name}</p>
      <p>{props.donor_comment}</p>
      <p className="donation_amount">£{props.donation_amount}</p>
    </div>
  </div>
);

Donation.propTypes = {
  donor_avatar_url: PropTypes.string.isRequired,
  donation_date: PropTypes.string.isRequired,
  donor_name: PropTypes.string.isRequired,
  donor_comment: PropTypes.string.isRequired,
  donation_amount: PropTypes.number.isRequired
};

export default hot(module)(Donation);
