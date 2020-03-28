import React, { Component } from "react";

import "./navigation.css";

import { Link } from "react-scroll";

class NavigationBar extends Component {

  // constructor(props) {
  //   super(props);
  //   this.changeColor = this.changeColor.bind(this);
  //   this.state = {
  //     change: false
  //   };
  // }

  // changeColor() {
  //   return (
  //     <div>
  //         {this.state.change ? this.setState({change:false}) : this.setState({change:true}) }
  //       {console.log(this.state)}
  //     </div>
  //   );
  // }

  // colorName = function(){
  //     return(this.state)
  // }
  
  render() {
    const {changeColor} = this.props;
    return (
      <div>
        <nav className="mainnav">
          <ul className={this.props.backcolor ? "anothercolor" : "listbar"}>
            <li>
              {/* <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                changecolor
              </Link> */}
              <a
                href="#home"
                className="changecolorclick"
                onClick={changeColor}
              >
                color
              </a>
            </li>

            <li className="topnav_bar">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
            </li>

            <li className="topnav_bar">
              <Link
                activeClass="active"
                to="Skill"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skill
              </Link>
            </li>
            {/* <li className="topnav_bar"> */}
            {/* <a
                href="#sign"
                className="skillsclick"
                onClick={() => scroll.scrollTo(750)}
              >
                Skills
              </a> */}
            {/* </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavigationBar;
