import React from 'react';
import './Modal.css'
import BackDrop from '../BackDrop/BackDrop';

const Modal = props => {

    return (
        <>
            <BackDrop show={props.show} cancelOrder={props.cancelOrder}/>
            <div className='modal'
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
                }}
            >
                {props.children}
            </div>
        </>
    );
}

export default Modal;