import { Component } from 'react'
import './App.css'

class App extends Component{

    state = {
        lastKey : null
    };

    onKeypress = (event) => {
        this.setState({lastKey : event.key})
        console.log(event.key)
    }
    componentDidMount() {
        window.addEventListener("keypress",this.onKeypress)
        
    }
    render(){
        return <main>
            Last pressed key: {this.state.lastKey}
        </main>
    }


}



export default App
