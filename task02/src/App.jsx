import { Component } from "react";

class Button extends Component {
  state = {
    text: "Click here"
  };
 
  render() {
    const { text } = this.state;
    return (
      <button type="button">
        {text}
      </button>
    );
  }
 }

 export default Button