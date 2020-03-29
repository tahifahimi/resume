import React, { Component } from "react";
import data from "../data.json";
import FullPage from "../components/fullPage";
import DownIcon from "../components/DownIcon";

import "./skillSection.css";

class skillSection extends Component {
  render() {
    const { colorSituation } = this.props;

    return (
      <div>
        <FullPage backcolor={colorSituation}>
          <h3>{data.sections[1].title}</h3>
          <div className="cards">
            {data.sections[1].items.map(eachSkill => {
              return (
                <div className="logoanddiscription">
                  <div className="image-wrapper">
                    <img src={eachSkill.content.image} />
                  </div>
                  <h4 className="skill-text">
                    {eachSkill.content.discription}
                  </h4>
                </div>
              );
            })}
          </div>
        </FullPage>
      </div>
    );
  }
}
export default skillSection;
