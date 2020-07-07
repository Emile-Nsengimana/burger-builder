import React from 'react';
import Burger from '../../components/Burger/Burger';
import './Checkout.css';

const Checkout = props => {
    console.log(props);
    return(
        <div className='checkout-box'>
            <h3>Hope it's delicious</h3>
            {/* <Burger ingredients={props.ingredients} /> */}
            <button className='btn btn-danger' onClick={props.cancelOrder}>Cancel</button>
            <button className='btn btn-success' onClick={props.checkout}>Continue</button>
        </div>
    );
}

export default Checkout;