import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import Donation from "./Donation";

class Donations extends Component {
  render() {
    return (
      <div className="donations">
        <h2>Recent Donations:</h2>
        <p className="refresh_message">Last refreshed: dd/mm/yyyy @ hh:mm:ss</p>
        <div>
          <Donation
            donor_avatar_url={""}
            donation_date={""}
            donor_name={""}
            donor_comment={""}
            donation_amount={""}
          />
          <Donation
            donor_avatar_url={""}
            donation_date={""}
            donor_name={""}
            donor_comment={""}
            donation_amount={""}
          />
          <Donation
            donor_avatar_url={""}
            donation_date={""}
            donor_name={""}
            donor_comment={""}
            donation_amount={""}
          />
          <Donation
            donor_avatar_url={""}
            donation_date={""}
            donor_name={""}
            donor_comment={""}
            donation_amount={""}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(Donations);
