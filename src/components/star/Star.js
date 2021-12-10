import React from 'react';
import './Star.css'

const Star = (props) => {

const {name,age,born,address,salary,image}=props.star;

    return ( 
        <div className="cart shadow g-4 p-4 rounded single-star mx-3">
            <div className="text-center mb-2">
                <img src={image} className="img-fluid star-image rounded-circle"></img>
            </div>             
             <h3 className="mb-1">{name}</h3>
             <p className="mb-1">Age: {age}</p>
             <p className="mb-1">Born: {born}</p>
             <p className="mb-1">Address: {address}</p>
             <p className="mb-2">Salary: {salary}</p>
             <button className="btn btn-warning" onClick={()=>{props.addToCart(props.star)}}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
        </div>
    );
};

export default Star;