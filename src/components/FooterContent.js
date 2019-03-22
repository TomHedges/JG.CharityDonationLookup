import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import "../styles/jgdr_styles.css";

class FooterContent extends Component {
  render() {
    return (
      <div className="footer_content side_pad">
        <p>© Tom Hedges 2019 - {this.props.heading}</p>
      </div>
    );
  }
}

FooterContent.propTypes = {
  heading: PropTypes.string.isRequired
};

export default hot(module)(FooterContent);
