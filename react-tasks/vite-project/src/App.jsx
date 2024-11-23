import { Component } from "react";

class Button extends Component {
  clickHandler = () => {
    console.log("Button click");
  };
 
  render() {
    return (
      <button type="button" onClick={this.clickHandler}>
         Click me
      </button>
    );
  }
 }
 export default Button