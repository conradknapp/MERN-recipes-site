import React, { Component } from "react";
import '../style.css';
 
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&#169; <a href="https://github.com/conradknapp" target="_blank">Conrad Knapp</a> {new Date().getFullYear()}</p>
      </footer>
    );
  }
}
 
export default Footer;