import React, { useState, useEffect } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal  from '../../components/Layout/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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

    const disabledControls =  { ...ingredients };
    for(let ctrl in disabledControls) disabledControls[ctrl] = disabledControls[ctrl] <= 0;
    
    return (
        <>
            <Burger ingredients={ingredients} />
            <Modal show={showModal} cancelOrder={handleCancelOrder}>
                <OrderSummary ingredients={ingredients} />
            </Modal>
            <BuildControls 
                addIngredient={handleAddIngredient} 
                removeIngredient={handleRemoveIngredient}
                disabledControls={disabledControls}
                totalPrice={totalPrice}
                order={handleOrder}
                checkout={!checkout}
            />
        </>
    );
}

export default BurgerBuilder;