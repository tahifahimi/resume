import React, { Component } from "react";

import FullPage from "../components/fullPage.js";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

import "./titleSection.css";

class titleSection extends Component {
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  render() {
    const { colorSituation } = this.props;
    return (
      <div>
        <div>
          <FullPage backcolor={colorSituation}>
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
        <DownIcon
          icon={data.icons.down}
          onClick={() => {
            scroll.scrollTo(700);
          }}
        />
      </div>
    );
  }
}

export default titleSection;
