import React, { Component } from "react";
import data from "../data.json";
import FullPage from "../components/fullPage";
import DownIcon from "../components/DownIcon";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

import "./aboutSection.css";

class aboutSection extends Component {
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
            <h3>{data.sections[0].title}</h3>
            <p className="paragraphs">{data.sections[0].items.content}</p>
    <p className="paragraphs">{data.sections[0].items.discription}</p>
          </FullPage>
        </div>
        <DownIcon
          icon={data.icons.down}
          onClick={() => {
            scroll.scrollTo(1900);
          }}
        />
      </div>
    );
  }
}
export default aboutSection;
