import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import './Layout.css'

const Layout = (props) => {
    return (
        <div className='layout'>
            <NavBar user={props.user} handleLogout={props.handleLogout}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout