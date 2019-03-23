import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/jgdr_styles.css";
import HeaderContent from "./HeaderContent";
import FooterContent from "./FooterContent";
import MainContent from "./MainContent";

class Page extends Component {
  render() {
    const HEADING = "JustGiving Donation Feed";
    return (
      <>
        <HeaderContent heading={HEADING} />
        <MainContent />
        <FooterContent heading={HEADING} />
      </>
    );
  }
}

export default hot(module)(Page);
