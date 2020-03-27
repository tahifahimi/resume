import React, { Component } from "react";

import TitleSection from "./sections/titleSection";
import AboutSection from "./sections/aboutSection";
import SkillPart from "./sections/skillSection";

import MyNav from "./components/navigation";

import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="navigation"></div> */}

        <MyNav >
          {console.log(MyNav.colorName)}
    
        </MyNav>
        <TitleSection />
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
