import React from "react";
import {  createContext ,useState } from "react";
import { useEffect } from "react";
import categories from "./catdata";
export const Shopcontext = createContext(null);
const getdefaultcart=()=>{
    let cart={}
    for( let i=1;i<categories.length+1;i++)
    {
        cart[i]=0;
    }
    return cart;
}
export const ShopcontextProvider =(props)=>{
    const [cartitems,setcartitems]=useState(getdefaultcart());
    // console.log(cartitems);
    // const addToCart=(itemid)=>{
    //     setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    // }
    useEffect(() => {
        // This useEffect will log changes to cartitems whenever it's updated.
        console.log('cartitems changed:', cartitems);
      }, [cartitems]);
    const addToCart = (itemid) => {
        setcartitems((prev) => ({
          ...prev,
          [itemid]: prev[itemid] + 1,
        }));
      }
      const removeFromCart = (itemid) => {
        setcartitems((prev) => ({
          ...prev,
          [itemid]: prev[itemid] - 1,
        }));
      };
    // const removeFromCart=(itemid)=>{
    //     setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}));
    // };
    const updateItemcount = (itemid, freq) => {
        // console.log(cartitems[itemid],"before");
        setcartitems((prev) => ({
          ...prev,
          [itemid]: prev[itemid] + freq,
        }));
       
      }
      const updatemanually=(itemid,freq)=>{
        setcartitems((prev)=>({
            ...prev,
            [itemid]:freq,
        }));
      }
    
      const getTotalCartAmount=()=>{
        let totalamount=0;
        for( let g =1; g<categories.length+1;g++)
        {
            if(cartitems[g]>0)
            {
                let getinfo=categories.find((item)=>item.id===Number(g));
                totalamount+=cartitems[g]*getinfo.price;
            }
        }
        return totalamount;

      }

      const Itemcount=()=>{
        let fre=0;
        for( let q=1;q<categories.length+1;q++)
        {
            if(cartitems[q]>0)
            {
                fre+=cartitems[q];
            }
        }
        return fre;
      }
      
      const checkout = () => {
        setcartitems(getdefaultcart());
      };
    // const updateItemcount=(itemid,freq)=>{
    //     setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+freq}));
    // }
    const contextValue={cartitems,addToCart,removeFromCart , updateItemcount ,updatemanually, getTotalCartAmount,checkout,Itemcount};
    return <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>;
}