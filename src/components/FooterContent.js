/**
 * FooterContent.js
 * Contains copyright message and repeats page title from HeaderContent
 */

import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

const FooterContent = props => (
  <div className="footer_content side_pad">
    <p>© Tom Hedges 2019 - {props.heading}</p>
  </div>
);

FooterContent.propTypes = {
  heading: PropTypes.string.isRequired
};

export default hot(module)(FooterContent);
