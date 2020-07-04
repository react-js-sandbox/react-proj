import React, {Component} from "react";
import Child from "./Child";

class Parent extends Component {
    state = {flag: true, mountChild: true}

    write = (funcName, msg) => {
        console.log("Parent", funcName, msg);
    }

    constructor(props) {
        super(props);
        this.write("constructor");
    }

    render() {
        this.write("render");
        return (<div>
            <h2 onClick={
                () => this.setState({flag: !this.state.flag})
            }>Parent comp: {this.state.flag ? 'Yes': 'No'}</h2>

            <button onClick={
                () => this.setState({mountChild: !this.state.mountChild})
            }>Mount/Unmount Child</button>
            {this.state.mountChild ? <Child text = 'some text'/> : ''}
        </div>);
    }

    componentDidMount() {
        this.write('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.write('componentDidUpdate', {prevProps, prevState, snapshot});
    }

    componentWillUnmount() {
        this.write('componentWillUnmount');
    }
}

export default Parent;