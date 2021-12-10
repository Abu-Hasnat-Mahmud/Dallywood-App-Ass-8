import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import CartItem from '../cartItem/CartItem';
import Star from '../star/Star';
import {DB} from './DB'


// main body
const FilmStars = () => {

    // declare state
    const [bangalStars,setBanglaStars]=useState([]);
    const [cart,setCart]=useState([]);
    const [uniqueStars,setUniqueStars]=useState([]);

    useEffect(()=>{
        // set state from db
        setBanglaStars(DB);
    },[]);

    useEffect(()=>{    
        // cart item update when cart update
        const uniques=cart.map((item)=> bangalStars.find((s)=> item.id==s.id))
        setUniqueStars(uniques);   
        //console.log(uniques);
    },[cart]);

    // add to cart handler
    const handleAddToCart=(star)=>{       
        if(cart.length>0)
        {
           const starItem = cart.find((item)=> item.id===star.id);
           //console.log("find",starItem);
           if(starItem){
                cart.map((item)=> {
                    if(item.id == star.id){
                        item.count++;                            
                    }     
                });
                setCart([...cart]);
            }
            else{
                setCart([...cart,{id:star.id, count:1}]);
            }
        }else{
            setCart([{id:star.id, count:1}]);
        }
        
    }
   
    return (
        <div className="row ms-5">
            {/* show star  list */}
            <div className="col-9 row row-cols-3">
                {bangalStars.map((star)=><Star key={star.id} star={star} addToCart={handleAddToCart}></Star>)}

            </div>

            {/* cart part */}
            <div className="col-3 mt-4">
                <div className="cart rounded shadow p-4">
                <Cart stars={bangalStars} cart={cart}></Cart>
                {uniqueStars.map((item)=><CartItem key={item.id} star={item}></CartItem> )}
                </div>
            </div>
        </div>        
    );
};

export default FilmStars;