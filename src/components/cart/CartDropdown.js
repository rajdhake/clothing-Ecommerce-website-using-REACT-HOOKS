import React from 'react'
import './CartDropdown.scss'
import CustomButton from './../CustomButton';
import CartItem from '../CartItem';
import { useSelector } from 'react-redux';


function CartDropdown() {
    const cartItems = useSelector(state=>state.cart.cartItems)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(x=>(
                         <CartItem  key ={x.id} item= {x} />
                    )
                    )    
                }
                
                <CustomButton>GO TO CHECKOUT</CustomButton>

            </div>
            
        </div>
    )
}

export default CartDropdown
