import React, {Component} from 'react';
import './App.css';
import Person from "./Person";

class App extends Component {
    state = {msg : 'hello'};

    clickHandler = () => {
        console.log('Clicked');
        this.setState( {msg: this.state.msg == 'hello' ? 'world' : 'hello'});
    }

    render() {
        return (
            <div className="App">
                <h1>Persons:</h1>
                <Person name='John' age={33}/>

                <h2>Event</h2>
                <button onClick={this.clickHandler}>Click me</button>
                <h2>Message</h2>
                <h3>{this.state.msg}</h3>
            </div>
        )
    }
}

export default App;
