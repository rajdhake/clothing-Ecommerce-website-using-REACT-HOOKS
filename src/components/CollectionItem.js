import React from 'react'
import './CollectionItem.scss'
import CustomButton from './CustomButton'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/cart/CartAction';


function CollectionItem({item}) {
    const { name, price, imageUrl }= item
    const dispatch =useDispatch();
    return (
        <div className='collection-item'>
            <div className='image' 
            style ={{backgroundImage: `url(${imageUrl})` }} ></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={()=>dispatch(addItemToCart(item))}>ADD TO CART</CustomButton>
            
        </div>
    )
}

export default CollectionItem
