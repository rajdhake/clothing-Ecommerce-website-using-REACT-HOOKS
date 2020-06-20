
import { addItem } from './Cart.utils';

const initialState={
    hidden:true,
    cartItems :[]
}  
const CartReducer =(state= initialState, action) =>{
    switch(action.type){
        case 'TOGGLE_CART_HIDDEN': return {
            ...state,
           hidden: !state.hidden 
        }
 
        case 'ADD_ITEM': return {
            ...state ,
            cartItems :addItem(state.cartItems, action.payload)
        }

        case 'CLEAR_ITEM_FROM_CART' : return {
            ...state,
            cartItems: state.cartItems.filter(
               x=>x.id  !== action.payload.id
            )
        }

        default: return state 
    }
}
export default CartReducer;