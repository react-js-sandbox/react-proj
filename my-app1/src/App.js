import React, {Component} from 'react';
import './App.css';
import Person from "./Person";
import Child from "./Child";

class App extends Component {
    state = {msg : 'hello'};

    clickHandler = () => {
        console.log('Clicked');
        this.setState( {msg: this.state.msg == 'hello' ? 'world' : 'hello'});
    };
    myHandler = () => {
        console.log("From myHandler");
    };

    render() {
        const movies = [{name: 'Harry Potter', duration: 120}, {name: 'Harry Potter 2', duration: 130}];
        let movieItems = movies.map((m, index) => <div><p>{index+1}. {m.name}</p>{m.duration}</div>);
        return (
            <div className="App">
                <h1>Persons:</h1>
                <Person name='John' age={33}/>

                <h2>Event</h2>
                <button onClick={this.clickHandler}>Click me</button>
                <h2>Message</h2>
                <h3>{this.state.msg}</h3>
                <hr/>
                <Child someFunction={this.myHandler}/>
                <hr/>
                {movieItems}

            </div>
        )
    }
}

export default App;
