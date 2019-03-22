import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import jg_logo from "./../images/jg_logo.svg";
import example_logo from "./../images/example_logo.png";
import unknown_avatar from "./../images/unknown_avatar.svg";

class CharitySelection extends Component {
  render() {
    return (
      <div className="charity_selection">
        <form>
          <label htmlFor="charity_id">
            Please enter Charity ID and select charity from dropdown list:
          </label>
          <input id="charity_id" type="text" className="charity_id_selector" />
        </form>
      </div>
    );
  }
}

export default hot(module)(CharitySelection);
