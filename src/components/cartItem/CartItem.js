import React, { useState } from 'react';
import './CartItem.css';

const CartItem = (props) => {
    
    const {name,image}=props.star
   
    return (
    <div className="d-flex align-item-center mb-3">            
            <img src={image} className="item-img shadow rounded"></img>
            <h6 className="my-auto">{name}</h6>
    </div> 
        
    );
};

export default CartItem;