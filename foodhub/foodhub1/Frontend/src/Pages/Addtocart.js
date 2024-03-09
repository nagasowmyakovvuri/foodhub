import React, { useContext, useEffect } from "react";
import categories from "./catdata";
import { Shopcontext } from "./shop-context";
import CartItem from "./CartItem";
import "../cart.css";
 import {useNavigate } from "react-router-dom";
export default function Addtocart() {
    const { cartitems, getTotalCartAmount, checkout , updateItemcount} = useContext(Shopcontext);
    const navigate= useNavigate();
    const totalAmount = getTotalCartAmount();
    console.log(cartitems, "from add to cart component");
    const handleupp=()=>{
        updateItemcount(1,0);
        console.log("HII");
        navigate('/paypage');
      }
    //    const neww={}
    useEffect(() => {
    }, [cartitems]); //
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {
                 categories.map((item) => {
                        if (cartitems[item.id] > 0) {
                            console.log(item.id);
                            return <CartItem key={item.id} data={item} />;
                        }
                    })
                }
            </div>
            {
                totalAmount > 0 ? (
                    <div className="checkout">
                        <p> Subtotal: ${totalAmount} </p>
                        <button onClick={() => navigate('/categories')}> Continue Shopping </button>
                        <button
                            onClick={() => {
                                  checkout();
                                navigate('/home');
                            }}
                        >
                            {" "}
                           Cancel{" "}
                        </button>
                        <button onClick={handleupp}>Checkout</button>
                    </div>
                ) : (
                    <h1> Your Shopping Cart is Empty</h1>
                )}
        </div>
    )
};