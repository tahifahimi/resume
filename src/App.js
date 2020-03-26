import React, { Component } from "react";

import TitleSection from "./sections/titleSection";
import AboutSection from "./sections/aboutSection";
import SkillPart from "./sections/skillSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation"></div>
        <TitleSection />
        <AboutSection />
        <SkillPart />
      </div>
    );
  }
}
export default App;
