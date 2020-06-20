import React from 'react'
import './CheckoutItem.scss'
import { clearItemFromCart } from './../../redux/cart/CartAction';
import { useDispatch } from 'react-redux';


function CheckoutItem({cartItem}) {
    const {name, imageUrl, price ,quantity}=cartItem
    const dispatch = useDispatch()
    return (
        <div className='checkout-item'>
            <div className='image-container'> 
                <img src={imageUrl}/>
            </div>
            <span className='name'>{name} </span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' 
            onClick={()=>dispatch(clearItemFromCart(cartItem))}
            >&#10008;</div>
        </div>
    )
}

export default CheckoutItem
