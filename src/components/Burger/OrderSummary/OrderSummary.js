import React from 'react';
import './OrderSummary.css'

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
                    .map((ingredient) => (
                        <li key={ingredient}>
                            {ingredient}: {props.ingredients[ingredient]}
                        </li>
                    ));

    return(
        <>
            <h3>Your order</h3>
            <h3>Ingredients:</h3>
            <ul className='list'>{ingredientSummary}</ul>
            <p><strong>Total price: {props.totalPrice}</strong> Rwf</p>
            <p>Continue to checkout?</p>
            <button className='btn btn-danger' onClick={props.cancelOrder}>Cancel</button>
            <button className='btn btn-success'>Continue</button>
        </>
    );
}

export default OrderSummary;