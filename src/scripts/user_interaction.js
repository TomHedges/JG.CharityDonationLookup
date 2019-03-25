import axios from "axios";
import { API_KEY } from "../api/api_key";

export function handleChange(event) {
  this.setState({
    charity_ID: event.target.value,
    show_list: true
  });

  const blank_charity_details = {
    charity_logo_url: "",
    charity_website: "",
    charity_number: "",
    charity_name: "",
    charity_description: ""
  };

  if ((event.target.value === null) | (event.target.value === "")) {
    this.setState({
      charity_details_found: blank_charity_details,
      charity_slugs: [],
      charity_found: false
    });
  } else {
    this.setState({
      charity_details_found: blank_charity_details,
      charity_slugs: ["Loading..."],
      charity_found: false
    });

    let instance = axios.create({
      headers: { "Content-Type": "application/json" }
    });

    /*
    instance.interceptors.response.use(
      response => {
        // Do something with response data
        console.log("winning: " + response.status);
        return response;
      },
      error => {
        // Do something with response error
        console.log("pas de problem: " + error.response.status);
        return Promise.reject(error);
      }
    );
  
    const UNAUTHORIZED = 503;
    instance.interceptors.response.use(
      response => response,
      error => {
        const { status } = error.response.status;
        if (status === UNAUTHORIZED) {
          console.log("intercept");
          //dispatch(userSignOut());
        } else {
          console.log("intercept2");
        }
        return Promise.reject(error);
      }
    );
    */

    instance
      .get(
        "https://api.justgiving.com/" +
          API_KEY +
          "/v1/charity/" +
          event.target.value
      )
      .then(res => {
        const charity_details_found = {
          charity_name: res.data.name,
          charity_logo_url: res.data.logoAbsoluteUrl,
          charity_website: res.data.websiteUrl,
          charity_number: res.data.registrationNumber,
          charity_description: res.data.description
        };
        const charity_slugs = [
          res.data.name +
            " (Reg. Charity No. " +
            res.data.registrationNumber +
            ")"
        ];
        this.setState({
          charity_details_found,
          charity_slugs,
          charity_found: true
        });
      })
      .catch(error => {
        if ((this.state.charity_ID === null) | (this.state.charity_ID === "")) {
          this.setState({
            charity_details_found: blank_charity_details,
            charity_slugs: [],
            charity_found: false
          });
        } else {
          this.setState({
            charity_details_found: blank_charity_details,
            charity_slugs: ["Sorry, no charity with that ID"],
            charity_found: false
          });
        }
      });
  }

  return null;
}

export function handleClick(event) {
  if (this.state.charity_found) {
    this.setState({
      charity_selected: true,
      charity_details_displayed: this.state.charity_details_found,
      show_list: false
    });
  }
  return null;
}

export function handleSubmit(event) {
  event.preventDefault();
}
