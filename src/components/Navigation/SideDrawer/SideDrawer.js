import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';

const SideDrawer = props => {
    let styles = ['side-drawer', 'close'];
    
    if(props.open){
        styles = ['side-drawer', 'open'];
    }

    return (
        <>
            <BackDrop show={props.open} clicked={props.backDropClicked} />
            <div className={styles.join(' ')}>
                <Logo height='10%' />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
}

export default SideDrawer;