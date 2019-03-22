import React, { Component } from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import "../styles/jgdr_styles.css";
import example_logo from "./../images/example_logo.png";

const CharityDetails = props => (
  <div className="charity_details">
    <h2>Charity Details:</h2>
    <div className="charity_details_column_wrapper">
      <div className="charity_details_column_left">
        <p>
          <a href="">
            <img src={example_logo} className="charity_logo" />
          </a>
        </p>
        <p className="centred_text">
          <a href="">www.charity.website</a>
        </p>
        <p className="centred_text">Reg. Charity Number: 123456</p>
      </div>
      <div className="charity_details_column_right">
        <h3>Amazing Charity Name</h3>
        <p>
          Charity description... Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer dapibus placerat tortor, vitae maximus ante
          mollis eu. Phasellus vitae luctus orci, ut luctus urna. Sed hendrerit
          nibh enim, quis luctus diam tempor suscipit. Sed magna nisi, tincidunt
          sit amet semper in, commodo vel urna. Nunc sit amet odio non erat
          ultrices luctus eu sit amet ante. Quisque erat orci, ullamcorper eu
          risus et, tristique commodo lorem. Nulla pellentesque, nibh ut
          suscipit feugiat, nisi enim vulputate nisi, sit amet dignissim sapien
          elit non lorem. Vivamus cursus commodo enim, id elementum eros
          facilisis eget. In vitae odio pellentesque, laoreet mauris
          condimentum, vestibulum ligula. Nam ullamcorper orci vitae odio
          fermentum dignissim.
        </p>
      </div>
    </div>
  </div>
);

CharityDetails.propTypes = {
  logo_url: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  charity_number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default hot(module)(CharityDetails);
