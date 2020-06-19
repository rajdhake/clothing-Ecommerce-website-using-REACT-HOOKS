import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import CartReducer from './cart/CartReducer';


export default combineReducers({
    user: userReducer,
    cart: CartReducer
})