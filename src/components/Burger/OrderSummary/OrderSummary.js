import React from 'react';
import './OrderSummary.css'

const OrderSummary = props => {
    const orderSum = Object.keys(props.ingredients)
                    .map((ingredient) => (
                        <li key={ingredient}>
                            {ingredient}: {props.ingredients[ingredient]}
                        </li>
                    ));

    return(
        <>
            <h4>Your order</h4>
            <ul>{orderSum}</ul>
            <p>Continue to checkout</p>
        </>
    );
}

export default OrderSummary;