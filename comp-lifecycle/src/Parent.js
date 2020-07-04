import React, {Component} from "react";

class Parent extends Component {
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
            <h2>Parent comp</h2>
        </div>);
    }

    componentDidMount() {
        this.write('componentDidMount');
    }
}

export default Parent;