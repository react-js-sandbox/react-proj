import React, {Component} from 'react';

class Child4 extends Component {
    render() {
        return (<div>
            <h2>Child4</h2>
            <button onClick={
                ()=>{
                    this.props.history.push('/Child2?arg1=7&arg2=8');
                }
            }>Go to Child 2</button>
        </div>);
    }
}

export default Child4;
