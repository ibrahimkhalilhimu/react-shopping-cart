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
            type: 'DELETE_ITEM',
            payload: id
        })
    }
    const deleteAllData =()=>{
        return dispatch({
            type: 'DELETE_ALL_ITEM',
        })
    }
    const increment = (id)=> {  
        return dispatch({
            type: 'INCREASE',
            payload: id
        })
    }
    const decrement = (id)=> {  
        return dispatch({
            type: 'DECREASE',
            payload: id
        })
   
    }

    return (
           <CartContent.Provider value={{...state,handleDelete,deleteAllData,increment,decrement}}> 
               <Cart/>
            </CartContent.Provider> 
       
    );
};

export default Context;