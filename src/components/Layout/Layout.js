import React from 'react';
import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => {
    return(
        <>
            <div>
                <Toolbar />
            </div>
            <main className='content'>
                {props.children}
            </main>
        </>
    );
}

export default Layout;