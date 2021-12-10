import React from 'react';


const Cart = (props) => {

    // get props
    const stars=props.stars; 
    const cart=props.cart; 
    let totalSalary=0;

    cart.map((item)=>{
        const star=stars.find((s)=> item.id===s.id);
        totalSalary+=star.salary;
    });

    return (
        <div className="text-center mb-5">             
            <h5>Star Added: {cart.length} </h5>
            <h5>Total Cost: {totalSalary} </h5>
        </div>
    );
};

export default Cart;