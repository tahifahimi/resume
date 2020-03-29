import React, { Component } from "react";
import "./fullPage.css";

class fullPage extends Component {
  render() {
    // what is this children????
    const { children } = this.props;
    return (
      <div>
        <div className={this.props.backcolor ? "black" : "page"}>
          {children}
        </div>
      </div>
    );
  }
}
export default fullPage;
