import {createContext,useState} from "react";
import React from "react";


export const Context = createContext();

const CartContext=({children})=>{
    let[cartitems,setCartItems]=useState([]);
    let [totalqty,setTotalQty]=useState();
    
    return(
        <Context.Provider value={{
            cartitems,
            setCartItems,
            totalqty,
            setTotalQty}}>
            {children}
        </Context.Provider>
    );   
}

export default CartContext;