import React, { Component } from "react";
import "./fullPage.css";

class fullPage extends Component {
  render() {
    // what is this children????
    const { children } = this.props;
    return <div className={this.props.backcolor ? this.props.passSection + `Section` : 'black'}>{children}</div>;
    // return <div className={this.props.passSection + `Section`}>{children}</div>;
  }
}
export default fullPage;
