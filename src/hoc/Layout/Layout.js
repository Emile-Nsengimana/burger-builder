import React, { useState } from 'react';
import './layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [ show, setShow ] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    }
    return(
        <>
            <div>
                <Toolbar toggleMenu={toggleMenu} />
                <SideDrawer open={show} backDropClicked={toggleMenu} />
            </div>
            <main className='content'>
                {props.children}
            </main>
        </>
    );
}

export default Layout;