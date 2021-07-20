import React, { createContext } from 'react';
import Cart from './Cart';
import ProductData from './ProductData';

export const CartContent = createContext()
const Context = () => {
    return (
        <>
           <CartContent.Provider value={ProductData}> 
               <Cart/>
            </CartContent.Provider> 
        </>
    );
};

export default Context;