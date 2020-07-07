
import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal  from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Checkout from '../Checkout/Checkout';
import axios from 'axios';


const INGREDIENTS = {
    salad: 200,
    bacon: 500,
    meat: 1000,
    cheese: 300
}

const BurgerBuilder = props => {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkout, setCheckout] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleAddIngredient = type => {
        const updatedIngredient = { ...ingredients };
        updatedIngredient[type] = ingredients[type] + 1;
        const currentPrice = totalPrice + INGREDIENTS[type];

        setTotalPrice(currentPrice);
        setIngredients(updatedIngredient);
        setCheckout(currentPrice > 0);
    }

    const handleRemoveIngredient = type => {
        const updatedIngredient = { ...ingredients };
        updatedIngredient[type] = ingredients[type] - 1;
        const currentPrice = totalPrice - INGREDIENTS[type];

        setTotalPrice(currentPrice);
        setIngredients(updatedIngredient);
        setCheckout(currentPrice > 0);
    }

    const handleOrder = () => {
        setShowModal(true);
    }

    const handleCancelOrder = () => {
        setShowModal(false);
    }

    const handleCheckout = async() => {
        const order = {
            ingredients,
            customer: {
                name: 'Emile N.',
                address: {
                    country: 'Rwanda',
                    city: 'Kicukiro',
                    street: 'KK 270st'
                },
                email: 'emile@gmail.com'
            },
            deliveryMethod: 'premium'
        }
        const orderBurger = await axios.post('https://burger-app-39bda.firebaseio.com/orders.json', order);
        console.log(orderBurger);
    }

    const disabledControls =  { ...ingredients };
    for(let ctrl in disabledControls) disabledControls[ctrl] = disabledControls[ctrl] <= 0;
    
    return (
        <>
            <Burger ingredients={ingredients} />
            <Modal show={showModal} cancelOrder={handleCancelOrder}>
                <OrderSummary 
                    ingredients={ingredients} 
                    cancelOrder={handleCancelOrder}
                    totalPrice={totalPrice}
                    checkout={handleCheckout}
                />
            </Modal>
            <BuildControls 
                addIngredient={handleAddIngredient} 
                removeIngredient={handleRemoveIngredient}
                disabledControls={disabledControls}
                totalPrice={totalPrice}
                order={handleOrder}
                checkout={!checkout}
            />
            <Checkout ingredients={ingredients} />
        </>
    );
}

export default BurgerBuilder;