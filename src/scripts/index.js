import React from "react";
import ReactDOM from "react-dom";
import Page from "./../components/Page.js";
import "../styles/jgdr_styles.css";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto", "sans-serif"]
  }
});

ReactDOM.render(<Page />, document.getElementById("root"));
