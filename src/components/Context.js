import React, { createContext, useReducer } from 'react';
import Cart from './Cart';
import ProductData from './ProductData';
import { reducer } from './reducer';

export const CartContent = createContext()

const initialState = {
    item:ProductData,
    totalAmount:0,
    totalItem:0
}

const Context = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
           <CartContent.Provider value={{...state}}> 
               <Cart/>
            </CartContent.Provider> 
       
    );
};

export default Context;