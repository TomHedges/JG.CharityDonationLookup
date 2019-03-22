import React, { Component } from "react";
import { hot } from "react-hot-loader";
import XRemainder from "./XRemainder";
import HeaderContent from "./HeaderContent";
import FooterContent from "./FooterContent";

class Page extends Component {
  render() {
    const HEADING = "JustGiving Donation Feed";
    return (
      <>
        <HeaderContent heading={HEADING} />
        <XRemainder />
        <FooterContent heading={HEADING} />
      </>
    );
  }
}

export default hot(module)(Page);
