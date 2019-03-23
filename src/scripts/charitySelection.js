import axios from "axios";

export function handleChange(event) {
  this.setState({ charityID: event.target.value });

  if ((event.target.value === null) | (event.target.value === "")) {
    this.setState({
      charity_details: "",
      charity_slugs: []
    });
  } else {
    this.setState({
      charity_details: "",
      charity_slugs: ["Loading..."]
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
        "https://api.justgiving.com/975998a1/v1/charity/" + event.target.value
      )
      .then(res => {
        const charity_details = {
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
        this.setState({ charity_details, charity_slugs });
      })
      .catch(error => {
        if ((this.state.charityID === null) | (this.state.charityID === "")) {
          this.setState({
            charity_details: "",
            charity_slugs: []
          });
        } else {
          this.setState({
            charity_details: "",
            charity_slugs: ["Sorry, no charity with that ID"]
          });
        }
      });
  }

  return null;
}
