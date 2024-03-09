import React, { useContext } from "react";
import "../cart.css";
import { Shopcontext } from "./shop-context";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
const CartItem = (props) => {
    // const {id, title, price ,category,image}=props.data;
    const result = props.data;
    // console.log(result,"hii");
    const { cartitems ,addToCart,removeFromCart,updatemanually } = useContext(Shopcontext)
    // const { cartItems, addToCart, removeFromCart, updateCartItemCount } =useContext(ShopContext);
    useEffect(() => {
        // console.log("HLOO")
        //  console.log(cartitems);
    }, [cartitems]); //
    return (
        <div className="cartItem">
            <img src={result.image} alt="" />
            <div className="description">
                <p>
                    {/* {" "} */}
                    <b> {result.title}</b>
                </p>
                <p>${result.price} {cartitems[result.id]}</p>
                <div className="countHandler">
                <Button onClick={() => removeFromCart(result.id)} style={{width:55, blockSize:60}}> - </Button>
                <input
                    value={cartitems[result.id]}
                    onChange={(e) => updatemanually(result.id,Number(e.target.value))}
                />
                <Button onClick={() => addToCart(result.id)} style={{width:60, blockSize:60}}> + </Button>
            </div>
            </div>
            
        </div>
    )
}
export default CartItem;