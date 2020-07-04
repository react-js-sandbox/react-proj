import React, {Component} from 'react';
import './App.css';
import Home from "./Home";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Child1 from "./Child1";
import Child2 from "./Child2";
import NotFound from "./NotFound";
import Child3 from "./Child3";
import Child4 from "./Child4";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Link to='/'>Home</Link>
                    <Link to='/Child1/3'>Child1</Link>
                    <Link to='/Child2?arg1=5&arg2=7'>Child2</Link>
                    <Link to='/Child3'>Child3</Link>
                    <Link to='/Child4'>Child4</Link>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Child1/:number' component={Child1}/>
                        <Route exact path='/Child2' component={Child2}/>
                        <Route exact path='/Child3' component={Child3}/>
                        <Route exact path='/Child4' component={Child4}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>);
    }
}

export default App;
