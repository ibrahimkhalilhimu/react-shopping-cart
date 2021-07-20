import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContent } from './Context';

const Cart = () => {

    const {item,deleteAllData} = useContext(CartContent)

    return (
        <>
            <div className="shop-cart">
                <div className="container">
                    <h3>React Shopping Cart</h3>
                    <div className="row">
                        <div className="col-md-12 mx-auto">    
                        <div >
                            {
                                item.map(data =>  <CartItem data={data} key={data.id}/>)
                            }
                           
                        </div>  

                    <div className="cart-item">
                    <div className="row ">
                        <div className="col-md-8">
                           {/* <h4>Subtotal</h4>
                           <h4>Tax</h4> */}
                           <h4>Total</h4>
                        </div>
                        <div className="col-md-4 text-right">
                        {/* <h4>$<span>1278</span></h4>
                        <h4>$<span>0</span></h4> */}
                        <h4>$<span>1278</span></h4>
                        <button 
                        onClick={deleteAllData}
                        className="btn btn-warning text-danger">Remove All</button>
                        </div>
                    </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;