import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { nullLiteral } from "@babel/types";
//import unknown_avatar from "./../images/unknown_avatar.svg";

function convertDate(textDate) {
  const donation_date_millis = parseInt(textDate.slice(6, textDate.length - 7));
  const donation_date = new Date(donation_date_millis);
  //const current_date = new Date();
  //const current_date_millis = current_date.getTime();
  //const date_diff = current_date_millis - donation_date_millis;

  //return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  return (
    //donation_date.toLocaleDateString() + "|" + current_date.toLocaleDateString()
    donation_date.toLocaleDateString()
  );
}

function getCurrencySymbol(donation_currency) {
  if (donation_currency === "GBP") {
    return "£";
  } else if (donation_currency === "USD") {
    return "$";
  } else {
    return donation_currency;
  }
}

function getTaxReclaim(donation_tax_reclaim, donation_currency) {
  if (donation_tax_reclaim && donation_tax_reclaim > 0) {
    return (
      <span className="tax_reclaim">
        + {getCurrencySymbol(donation_currency)}
        {donation_tax_reclaim.toFixed(2)} Gift Aid
      </span>
    );
  } else {
    return null;
  }
}

function getDonation(
  donation_amount,
  donation_currency,
  donation_amount_local,
  donation_currency_local
) {
  if (donation_amount && donation_amount > 0) {
    if (donation_currency_local === "GBP") {
      return getCurrencySymbol(donation_currency) + donation_amount.toFixed(2);
    } else {
      return (
        getCurrencySymbol(donation_currency_local) +
        donation_amount_local.toFixed(2)
      );
    }
  } else {
    return null;
  }
}

const Donation = props => (
  <div className="donation_wrapper">
    <div className="donation_column_left">
      <img className="donor_avatar" src={props.donor_avatar_url} />
    </div>
    <div className="donation_column_right">
      <p className="donation_date">{convertDate(props.donation_date)}</p>
      <p className="donor_name">{props.donor_name}</p>
      <p>{props.donor_comment}</p>
      <p className="donation_amount">
        {getDonation(
          props.donation_amount,
          props.donation_currency,
          props.donation_amount_local,
          props.donation_currency_local
        )}
        {getTaxReclaim(props.donation_tax_reclaim, props.donation_currency)}
      </p>
    </div>
  </div>
);

Donation.propTypes = {
  donor_name: PropTypes.string.isRequired,
  donation_date: PropTypes.string.isRequired,
  donor_comment: PropTypes.string.isRequired,
  donation_amount: PropTypes.number.isRequired,
  donation_tax_reclaim: PropTypes.number.isRequired,
  donation_currency: PropTypes.string.isRequired,
  donation_currency_local: PropTypes.string.isRequired,
  donation_amount_local: PropTypes.number.isRequired,
  donor_avatar_url: PropTypes.string.isRequired
};

export default hot(module)(Donation);
