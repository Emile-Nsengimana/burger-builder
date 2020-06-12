import React from 'react';
import './Burger.css'
import BurgerIngrendients from './BurgerIngrendients/BurgerIngrendients';

const Burger = props => {
    return(
        <div className='burger'>
            <BurgerIngrendients type='bread-top' />
            <BurgerIngrendients type='cheese' />
            <BurgerIngrendients type='meat' />
            <BurgerIngrendients type='cheese' />
            <BurgerIngrendients type='meat' />
            <BurgerIngrendients type='salad' />
            <BurgerIngrendients type='bacon' />
            <BurgerIngrendients type='bread-bottom' />
        </div>
    );
}

export default Burger;