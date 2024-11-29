import { Component } from 'react'
import './App.css'

class App extends Component{
  state = {data: []}
  
  getData = () => {
    fetch("https://acb-api.algoritmika.org/api/transaction")
    .then(res => res.json())
    .then(data => { 
      console.log(data)
      this.setState({ data: data[0] }) 
    });
  };
  componentDidMount() {
    this.getData();
  }

  render(){
    const a = this.state
    const {data} = a
    console.log({data})
    return(
      <>
      <div>
        <p>From: {data.from}</p>
        <p>To: {data.to}</p>
        <p>Amount: {data.amount}</p>
      </div>
      </>
    )
  }
}

export default App