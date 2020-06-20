import React from 'react'
import './CartIcon.scss'
import {ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import { toggleCartHidden } from './../redux/cart/CartAction';
import { useDispatch, useSelector } from 'react-redux';

function CartIcon() {
    const dispatch = useDispatch();
    const countItem = useSelector(state => state.cart.cartItems)
    
    return (
        <div className='cart-icon' onClick={()=>
        dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>
                {countItem.reduce((x,y) =>x+y.quantity,0)}
             </span>
            
        </div>
    )
}

export default CartIcon
