import React, { Component } from "react";
import "./style.css";
import Loader from "./Loader";
import Info from "./Info";
import getUserInfo from "../Services/getInfo";

class IPinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    getUserInfo().then((data) => {
      this.setState({
        info: data,
        isLoading: false,
      });
    });
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <React.Fragment>
        {isLoading ? <Loader /> : <Info info={this.state.info} />}
      </React.Fragment>
    );
  }
}

export default IPinfo;
