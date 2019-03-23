import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import "../styles/jgdr_styles.css";
import unknown_avatar from "./../images/unknown_avatar.svg";

const Donation = props => (
  <div className="donation_wrapper">
    <div className="donation_column_left">
      <img className="unknown_avatar" src={unknown_avatar} />
    </div>
    <div className="donation_column_right">
      <p className="donation_date">12/12/2012</p>
      <p className="donor_name">Donor Name</p>
      <p>Here is the donor comment</p>
      <p className="donation_amount">£0,000.00</p>
    </div>
  </div>
);

Donation.propTypes = {
  donor_avatar_url: PropTypes.string.isRequired,
  donation_date: PropTypes.string.isRequired,
  donor_name: PropTypes.string.isRequired,
  donor_comment: PropTypes.string.isRequired,
  donation_amount: PropTypes.string.isRequired
};

export default hot(module)(Donation);
