import React from 'react';
import logo from '../../assets/images/burger-logo.png'
import './Logo.css';


const Logo = props => (
    <div className='logo'>
        <img src={logo} alt='' />
    </div>
)

export default Logo;