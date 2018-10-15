import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        return this.state.hasError ? <h1>Oops. That's not good</h1> : this.props.children;
    }
}

export default ErrorBoundry;