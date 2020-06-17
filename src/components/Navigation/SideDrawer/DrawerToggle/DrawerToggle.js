import React from 'react';
import './DrawerToggle.css';

const DrawerToggle = props => {
    return (
            <div className='drawer-toggle' onClick={props.toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
    );
}

export default DrawerToggle;