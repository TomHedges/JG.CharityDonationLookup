import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import "../styles/jgdr_styles.css";
import jg_logo from "./../images/jg_logo.svg";

const HeaderContent = props => (
  <div className="header_content side_pad">
    <img src={jg_logo} className="jg_logo" />
    <h1>{props.heading}</h1>
  </div>
);

HeaderContent.propTypes = {
  heading: PropTypes.string.isRequired
};

export default hot(module)(HeaderContent);
