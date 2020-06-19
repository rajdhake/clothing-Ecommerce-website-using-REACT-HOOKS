import React from 'react'
import "./Header.scss"
import {Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/crown.svg'
import { auth } from './../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from './CartIcon';
import CartDropdown from './cart/CartDropdown';



function Header() {

    
    
    const currentUser = useSelector(state=> state.user.currentUser)
    const toggle = useSelector(state => state.cart.hidden)
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo  className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT-US
                </Link>
                {
                   currentUser?
                    <div className='option' onClick ={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>         }

                <CartIcon/>
            </div>
            {toggle? null :<CartDropdown/>}
        </div>
    )
}

export default Header
