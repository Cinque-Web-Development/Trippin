import React from 'react';
import './ErrorPage.css';
import Footer from '../../components/Footer/Footer'

const ErrorPage = () => {
    return(
        <>
            <div id='errorPage'>
                <div>
                    <img alt='whereGif' src="404.gif"></img>
                </div>
                <main>
                    <h1>404 Error</h1>
                    <p>{window.location.href} is not a proper route.</p>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default ErrorPage;