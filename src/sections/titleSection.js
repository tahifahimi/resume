import React, { Component } from "react";

import FullPage from "../components/fullPage.js";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";

import "./titleSection.css";

class titleSection extends Component {
  render() {
    return (
      <div>
        <div>
          <FullPage passSection="first">
            <h1 className="title">{data.title}</h1>
            <div className="icons-wrapper">
              {Object.keys(data.link).map(key => {
                return (
                  <div className="icons">
                    <SocialIcon url={data.link[key]} />
                  </div>
                );
              })}
            </div>
            <p className="texticons">{data.discription}</p>
          </FullPage>
        </div>
        <DownIcon icon={data.icons.down}
        onClick={()=>
        console.log("im working")}
         />
      </div>
    );
  }
}

export default titleSection;
