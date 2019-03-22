import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import "../styles/jgdr_styles.css";
import Donation from "./Donation";

class Donations extends Component {
  render() {
    return (
      <div className="donations">
        <h2>Recent Donations:</h2>
        <p className="refresh_message">Last refreshed: dd/mm/yyyy @ hh:mm:ss</p>
        <div>
          <Donation />
          <Donation />
          <Donation />
          <Donation />
        </div>
      </div>
    );
  }
}

Donations.propTypes = {
  logo_url: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  charity_number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default hot(module)(Donations);
