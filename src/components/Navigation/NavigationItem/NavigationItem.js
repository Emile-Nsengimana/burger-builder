import React from 'react';
import './NavigationItem.css';

const NavigationItem = props => (
        <li className='navigation-item'>
                <a className={props.active ? 'active' : null} href={props.link}>{props.children}</a>
        </li>
);

export default NavigationItem;