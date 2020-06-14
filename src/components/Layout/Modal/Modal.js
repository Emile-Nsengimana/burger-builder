import React from 'react';
import './Modal.css'

const Modal = props => {
    
    return(
        <div className='modal'
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
            
         }}
        >
            {props.children}
        </div>
    );
}

export default Modal;