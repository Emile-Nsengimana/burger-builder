import React from 'react'
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import  Navigations  from '../../Navigation/NavigationItems/NavigationItems';

const Toolbar = props => {
    return(
        <header  className='toolbar'>
            <div>
                Menu
            </div>
                <Logo />
            <nav>
               <Navigations />
            </nav>
        </header>
    );
}

export default Toolbar;