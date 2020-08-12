import React from 'react'
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigations from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => {
    return (
        <header className='toolbar'>
            <DrawerToggle toggleMenu={props.toggleMenu} />
            <Logo height='80%' />
            <nav className='on-mobile'>
                <Navigations />
            </nav>
        </header>
    );
}

export default Toolbar;