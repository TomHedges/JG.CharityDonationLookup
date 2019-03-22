import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import jg_logo from "./../images/jg_logo.svg";
import example_logo from "./../images/example_logo.png";
import unknown_avatar from "./../images/unknown_avatar.svg";

class XRemainder extends Component {
  render() {
    return (
      <div className="XRemainder">
        <div className="main_content side_pad">
          <div className="charity_selection">
            <form>
              <label htmlFor="charity_id">
                Please enter Charity ID and select charity from dropdown list:
              </label>
              <input
                id="charity_id"
                type="text"
                className="charity_id_selector"
              />
            </form>
          </div>
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
                  adipiscing elit. Integer dapibus placerat tortor, vitae
                  maximus ante mollis eu. Phasellus vitae luctus orci, ut luctus
                  urna. Sed hendrerit nibh enim, quis luctus diam tempor
                  suscipit. Sed magna nisi, tincidunt sit amet semper in,
                  commodo vel urna. Nunc sit amet odio non erat ultrices luctus
                  eu sit amet ante. Quisque erat orci, ullamcorper eu risus et,
                  tristique commodo lorem. Nulla pellentesque, nibh ut suscipit
                  feugiat, nisi enim vulputate nisi, sit amet dignissim sapien
                  elit non lorem. Vivamus cursus commodo enim, id elementum eros
                  facilisis eget. In vitae odio pellentesque, laoreet mauris
                  condimentum, vestibulum ligula. Nam ullamcorper orci vitae
                  odio fermentum dignissim.
                </p>
              </div>
            </div>
          </div>
          <div className="donations">
            <h2>Recent Donations:</h2>
            <p className="refresh_message">
              Last refreshed: dd/mm/yyyy @ hh:mm:ss
            </p>
            <div>
              <div className="donation_wrapper">
                <div className="donation_column_left">
                  <img className="unknown_avatar" src={unknown_avatar} />
                </div>
                <div className="donation_column_right">
                  <p className="donation_date">12/12/2012</p>
                  <p className="donor_name">Donor Name</p>
                  <p>Here is the donor comment</p>
                  <p className="donation_amount">£0,000.00</p>
                </div>
              </div>
              <div className="donation_wrapper">
                <div className="donation_column_left">
                  <img className="unknown_avatar" src={unknown_avatar} />
                </div>
                <div className="donation_column_right">
                  <p className="donation_date">12/12/2012</p>
                  <p className="donor_name">Donor Name</p>
                  <p>Here is the donor comment</p>
                  <p className="donation_amount">£0,000.00</p>
                </div>
              </div>
              <div className="donation_wrapper">
                <div className="donation_column_left">
                  <img className="unknown_avatar" src={unknown_avatar} />
                </div>
                <div className="donation_column_right">
                  <p className="donation_date">12/12/2012</p>
                  <p className="donor_name">Donor Name</p>
                  <p>Here is the donor comment</p>
                  <p className="donation_amount">£0,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(XRemainder);
