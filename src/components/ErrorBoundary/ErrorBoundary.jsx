import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
    
    state = {
        hasError: false,
        error: null
    }

    componentDidCatch(error) {
        this.setState(error, {hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return (
                <iframe class='customError' title='whatGif' src="https://giphy.com/embed/xThuW2OEpQ33Rkio9y"></iframe>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;