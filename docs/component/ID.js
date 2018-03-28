import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            called: 0,
            sizes: [],
        };
    }

    onSize = (sizes) => {
        this.setState({
            called: this.state.called + 1,
            sizes: [...this.state.sizes, sizes],
        });

        this.props.onSize(sizes);
    };

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <li>I can do something cool with these callbacks...</li>
                {this.state.sizes.map((size, index) => {
                    return (
                        <React.Fragment>
                            <h3>
                                Callback #{index + 1} from {size.id}
                            </h3>
                            <li>height: {size.component.height}</li>
                            <li>width: {size.component.width}</li>
                        </React.Fragment>
                    );
                })}
                <Child id="component-size-child" onSize={this.onSize} />
            </div>
        );
    }
}

export default Parent;
