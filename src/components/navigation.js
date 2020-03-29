import React, { Component } from "react";

import "./navigation.css";

import { Link } from "react-scroll";

class NavigationBar extends Component {
  render() {
    const { changeColor } = this.props;
    return (
      <div>
        <nav className="mainnav">
          <ul className={this.props.backcolor ? "anothercolor" : "listbar"}>
            <li>
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
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavigationBar;
