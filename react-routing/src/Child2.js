import React, {Component} from 'react';

class Child2 extends Component {
    render() {
        let searchParams = new URLSearchParams(this.props.location.search);

        return (<div>
            <h2>Child2</h2>
            <p>{searchParams.get('arg1')}</p>
            <p>{searchParams.get('arg2')}</p>
        </div>);
    }
}

export default Child2;
