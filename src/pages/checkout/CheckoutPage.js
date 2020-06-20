import React from 'react'
import './CheckoutPage.scss'
import { useSelector } from 'react-redux';
import CheckoutItem from './../../components/cart/CheckoutItem';

function CheckoutPage() {
    const cartItems = useSelector(state=>state.cart.cartItems)
    
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span >Product</span>
                </div>
                <div className='header-block'>
                    <span >Description</span>
                </div>
                <div className='header-block'>
                    <span >Quantity</span>
                </div>
                <div className='header-block'>
                    <span > Price</span>
                </div>
                <div className='header-block'>
                    <span >Remove</span>
                </div>
            </div>
         {cartItems.map(x => (
      <CheckoutItem key={x.id} cartItem={x} />
                    ))} 
    <div className='total'>
        TOTAL: ${cartItems.reduce((x,y) =>x+y.quantity * y.price, 0)}
            </div> 
        </div>
    )
}

export default CheckoutPage


  