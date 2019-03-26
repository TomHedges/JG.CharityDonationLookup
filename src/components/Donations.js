import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Donation from "./Donation";

//class Donations extends Component {
//  constructor(props) {
//    super(props);
//  }

//  render() {

const Donations = props => {
  const donations = props.donations.map(donation => (
    <Donation
      donor_avatar_url={donation.donor_name}
      donation_date={donation.donation_date}
      donor_name={donation.donor_name}
      donor_comment={donation.donor_comment}
      donation_amount={donation.donation_amount}
    />
  ));

  return (
    <div className="donations">
      <h2>Recent Donations:</h2>
      <p className="refresh_message">
        Last refreshed: dd/mm/yyyy @ hh:mm:ss - {props.timestamp}
      </p>
      <div>{donations}</div>
    </div>
  );
};
//}

export default hot(module)(Donations);
