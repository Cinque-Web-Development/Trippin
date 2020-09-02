import React from 'react';
import './Layout.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default (props) => {
    return (
        <div id='container'>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};