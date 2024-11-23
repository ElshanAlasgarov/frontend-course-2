import { Component } from "react";
import './App.css'
class Button extends Component {
  state = {
    text: "Click here",
    click : false
  };
 
  clickHandler = () => {
    this.setState({ text: "Clicked", click : true} );
  }

  render() {
   const { text, click } = this.state;
   let className;

   if (!click) {
     className = " click-button_red";
   } else {
     className = " click-button_blue";
   }
    return (
      <button className={className} type="button" onClick={this.clickHandler}>
        {text}
      </button>
    );
  }
 }

 export default Button