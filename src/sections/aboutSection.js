import React, { Component } from "react";
import data from "../data.json";
import FullPage from "../components/fullPage";

import './aboutSection.css';

class aboutSection extends Component {
  render() {
    return (
      <div>
        <FullPage passSection="second">
          <h3>{data.sections[0].title}</h3>
          <p className="paragraphs">{data.sections[0].items.content}</p>
        </FullPage>
      </div>
    );
  }
}
export default aboutSection;
