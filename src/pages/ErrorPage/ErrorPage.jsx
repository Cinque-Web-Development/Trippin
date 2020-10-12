import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
    return(
        <>
            <div id='errorPage'>
                <div>
                    <img src="https://imgur.com/a/uAwTkaP" alt='whereGif'></img>
                </div>
                <main>
                    <h1>404 Error</h1>
                    <p>{window.location.href} is not a proper route.</p>
                </main>
            </div>
        </>
    )
}

export default ErrorPage;