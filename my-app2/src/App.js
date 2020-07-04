import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {movies: [{id: 1, name: 'Harry Potter', duration: 120}, {id: 2, name: 'Harry Potter 2', duration: 130}]};

    render() {
        let movieItems = this.state.movies.map((m, index) =>
            <div key={m.id}><p
                onClick={() => {
                    let newMovies = [...this.state.movies];
                    newMovies.splice(index, 1);
                    this.setState({movies: newMovies});
                }}>{index + 1}. {m.name}</p>{m.duration}</div>);
        return (
            <div className="App">
                {movieItems}
            </div>
        )
    }
}

export default App;
