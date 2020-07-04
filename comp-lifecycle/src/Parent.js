import React, {Component} from "react";

class Parent extends Component {
    state = {flag: true}

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
        </div>);
    }

    componentDidMount() {
        this.write('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.write('componentDidUpdate', {prevProps, prevState, snapshot});
    }
}

export default Parent;