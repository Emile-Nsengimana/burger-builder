import React from 'react'
import './BurgerIngrendients.css';

const BurgerIngrendients = props => {
    const { type } = props;
    let ingredient = null;
    
    switch (type) {
        case 'bread-top':
            ingredient = <div className='bread-top'></div>
            break;
        case 'cheese':
            ingredient = <div className='cheese'></div>
            break;
        case 'meat':
            ingredient = <div className='meat'></div>
            break;
        case 'bread-bottom':
            ingredient = <div className='bread-bottom'></div>
            break;
        case 'salad':
            ingredient = <div className='salad'></div>
            break;
        case 'bacon':
            ingredient = <div className='bacon'></div>
            break;

        default:
            break
    }
    return ingredient;
}

export default BurgerIngrendients;