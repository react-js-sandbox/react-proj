import React, {Component} from 'react';
import './App.css';
import Person from "./Person";

class App extends Component {
    clickHandler = () => {
        console.log('Clicked')
    }
    render() {
        return (
            <div className="App">
                <h1>Persons:</h1>
                <Person name='John' age={33}/>

                <h2>Event</h2>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default App;
