import React, { Component } from "react";

import TitleSection from "./sections/titleSection";
import AboutSection from "./sections/aboutSection";
import SkillPart from "./sections/skillSection";

import MyNav from "./components/navigation";

import { Element } from "react-scroll";

import SnowStorm from "react-snowstorm";

class App extends Component {
  constructor(props) {
    super(props);
    // this.changeColor = this.changeColor.bind(this);
    this.state = {
      colorSituation: true
    };
  }

  changeColor = () => {
    this.setState({ colorSituation: !this.state.colorSituation });
    console.log(this.state.colorSituation);
  };

  render() {
    return (
      <div className="App">
        {/* <MyNav>{console.log(MyNav.colorName)}</MyNav> */}
        <MyNav changeColor={this.changeColor} backcolor={this.state.colorSituation}/>
        {/* {this.state.colorSituation ? <SnowStorm followMouse={false}/> : <SnowStorm snowColor='#000'/>} */}
        <SnowStorm/>
        {/* <SnowStorm snowColor={this.state.colorSituation ? '#000' : '#fff'} followMouse={false}/> */}
        <TitleSection colorSituation={this.state.colorSituation} />
        <Element name="About">
          <AboutSection colorSituation={this.state.colorSituation} />
        </Element>
        <Element name="Skill">
          <SkillPart colorSituation={this.state.colorSituation} />
        </Element>
      </div>
    );
  }
}
export default App;
