import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>JustGiving Donations Summary</h1>
        <p>Please enter your chosen Charity ID in the field below</p>
        <div>
          <form>
            <input type="text" />
            <input type="button" value="Load Donations" />
          </form>
        </div>
        <div>
          <h2>Recent Donations:</h2>
          <p>Last updated @ dd/mm/yyyy, hh:mm:ss</p>
          <div>
            <div>
              <h3>Donor Name - [£Amount]</h3>
              <p>[Profile Image]</p>
              <p>Here is the donor comment</p>
            </div>
            <div>
              <h3>Donor Name - [£Amount]</h3>
              <p>[Profile Image]</p>
              <p>Here is the donor comment</p>
            </div>
            <div>
              <h3>Donor Name - [£Amount]</h3>
              <p>[Profile Image]</p>
              <p>Here is the donor comment</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
