import React from 'react'
import './CartDropdown.scss'
import CustomButton from './../CustomButton';
import CartItem from '../CartItem';
import {  useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom'
 import { toggleCartHidden } from './../../redux/cart/CartAction';


function CartDropdown({history}) {
    const cartItems = useSelector(state=>state.cart.cartItems)
    const dispatch = useDispatch();
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                
                { cartItems.length ?
                  cartItems.map(x=>(
                         <CartItem  key ={x.id} item= {x} />))
                    : <span className='empty-message'> You're cart is empty!!</span>
                        }
                
                <CustomButton
                 onClick= {()=>
                    { history.push('./checkout');
                      dispatch(toggleCartHidden());}
                    
                       } >
                       CHECKOUT!!  
                </CustomButton >
            </div>
            
        </div>
    )
}
                    
                       
                

export default withRouter(CartDropdown);
 