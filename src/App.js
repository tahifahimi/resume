import React, { Component } from "react";

import TitleSection from "./sections/titleSection";
import AboutSection from "./sections/aboutSection";
import SkillPart from "./sections/skillSection";

import MyNav from "./components/navigation";

import { Element } from "react-scroll";

class App extends Component {
  constructor(props) {
    super(props);
    // this.changeColor = this.changeColor.bind(this);
    this.state = {
      colorSituation: false
    };
  }

  changeColor = () => {
    this.setState({ colorSituation: !this.state.colorSituation });
    // console.log(this.state.colorSituation);
  };

  render() {
    return (
      <div className="App">
        {/* <MyNav>{console.log(MyNav.colorName)}</MyNav> */}
        <MyNav changeColor={this.changeColor} />
        <TitleSection colorSituation={this.state.colorSituation} />
        <Element name="About">
          <AboutSection />
        </Element>
        <Element name="Skill">
          <SkillPart />
        </Element>
      </div>
    );
  }
}
export default App;
