import React, {Component} from "react";

class Child extends Component {
    constructor(props) {
        super(props);
        this.write("constructor");
    }

    write = (funcName, msg) => {
        console.log("Child", funcName, msg);
    }

    render() {
        this.write("render");
        return (<div>
            <p>{this.props.text}</p>
        </div>);
    }

    componentDidMount() {
        this.write('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.write('componentDidUpdate', {prevProps, prevState, snapshot});
    }
}

export default Child;