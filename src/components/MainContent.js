import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import CharitySelection from "./CharitySelection";
import CharityDetails from "./CharityDetails";
import Donations from "./Donations";

const MainContent = props => (
  <div className="main_content side_pad">
    <CharitySelection />
    <CharityDetails
      charity_logo_url={""}
      charity_website={""}
      charity_number={""}
      charity_name={""}
      charity_description={""}
    />
    <Donations />
  </div>
);

export default hot(module)(MainContent);
