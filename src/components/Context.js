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

    const handleDelete =(id)=>{
       return dispatch({
            type: 'DeleteItem',
            payload: id
        })
    }
    return (
           <CartContent.Provider value={{...state,handleDelete}}> 
               <Cart/>
            </CartContent.Provider> 
       
    );
};

export default Context;