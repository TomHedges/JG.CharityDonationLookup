//
// TODO - only need local currency information, not converted GBP amounts
//

/**
 * Donation.js
 * Details of a single donation. Displays amount if given (including local currency),
 * Gift Aid amount (if applicable) and donor comments (if given)
 */

import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

/**
 * function convertDate(textDate: String)
 *
 * Receives UNIX timestamp string in format "/Date(1554076800000+0000)/", and returns a UK format date in format
 * "01/04/2019" as String. Formally usedDate.toLocaleDateString() - however this is not implemented in the Node
 * core, so to avoid additional configuration for internationalisation, it is composed of individual date parts.
 */
function convertDate(textDate) {
  const donation_date_millis = parseInt(textDate.slice(6, textDate.length - 7));
  const donation_date = new Date(donation_date_millis);
  //return donation_date.toLocaleDateString("en-GB");
  return (
    ("0" + donation_date.getDate()).slice(-2) +
    "/" +
    ("0" + (donation_date.getMonth() + 1)).slice(-2) +
    "/" +
    donation_date.getFullYear()
  );
}

/**
 * function getCurrencySymbol(donation_currency: String)
 * Receives currency name as shortcode, and returns a String containing common currency symbols of Sterling
 * or USD, or else the alpahabetic shortcode for less common currencies. Additional currencies could be added
 * as additional if/then blocks, or a case statement. Developer documentation did not make it clear which
 * shortcodes could possibly be returned.
 */
function getCurrencySymbol(donation_currency) {
  if (donation_currency === "GBP") {
    return "£";
  } else if (donation_currency === "USD") {
    return "$";
  } else {
    return donation_currency;
  }
}

/**
 * function getTaxReclaim(donation_tax_reclaim: Number, donation_currency: Number)
 * Receives the tax reclaim amount and currency shortcode, returns a currency symbol and amount in a Span element
 * if tax was reclaimed (format "+ £2.50 Gift Aid"), else returns null.
 */
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

//
//TODO - Unnecessary inputs in function below - see comment at top
//
/**
 * function getDonation(donation_amount: Number, donation_currency: Number,
 *                      donation_amount_local: Number, donation_currency_local: Number,)
 * Receives the donation amount and currency shortcode in GBP and original donation currency. Where the donation
 * amount is provided, it returns a formatted String of the original donation currency/amount, else returns null.
 */
function getDonation(
  donation_amount,
  donation_currency,
  donation_amount_local,
  donation_currency_local
) {
  if (donation_amount && donation_amount > 0) {
    //if (donation_currency_local === "GBP") {
    //  return getCurrencySymbol(donation_currency) + donation_amount.toFixed(2);
    //} else {
    return (
      getCurrencySymbol(donation_currency_local) +
      donation_amount_local.toFixed(2)
    );
    //}
  } else {
    return null;
  }
}

/**
 * const Donation
 * Returns div element containing donation information in two sections:
 *   - Donor avatar (left hand column)
 *   - Donation details - donor name, comment, amount and Gift Aid amount (right hand block)
 */
const Donation = props => (
  <div className="donation_wrapper">
    <div className="donation_column_left">
      <img className="donor_avatar" src={props.donor_avatar_url} />
    </div>
    <div className="donation_column_right">
      <p className="donation_date">{convertDate(props.donation_date)}</p>
      <p className="donor_name">{props.donor_name}</p>
      <p className="donor_comment">{props.donor_comment}</p>
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
