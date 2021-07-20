import React from 'react';

const CartItem = ({data}) => {
    const {title,price,quantity,img} = data;
    return (
        <>
             <div className="cart-item">
             <div className="row ">
                        <div className="col-md-7 center-item">
                            <img className="img-fluid" src={img} alt="iphone 11" />
                            <h4>{title}</h4>
                        </div>
                        <div className="col-md-5 center-item">
                            <div className="input-group number-spinner">
                                <button className="btn">➖</button>
                                <input type="text" className="form-control text-center" disabled defaultValue={quantity}/>
                                <button className="btn">➕</button>
                            </div>
                            <h4>$<span>{price}</span></h4>
                            <img style={{ width:"30px",cursor:"pointer",marginTop:"-10px",marginLeft:"10px"}} src="https://i.ibb.co/8xS1xvH/remove.png" alt="cross" />
                        </div>
                    </div>
             </div>
                   
                    
        </>
    );
};

export default CartItem;