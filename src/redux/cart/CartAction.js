export const toggleCartHidden = ()=>{
    return {
       type: 'TOGGLE_CART_HIDDEN'
    }
}
 
export const addItemToCart =(item)=>{
    return {
        type: 'ADD_ITEM',
        payload : item
    }
} 

export const clearItemFromCart =item=>{
    return {
        type:'CLEAR_ITEM_FROM_CART', 
        payload: item
    }
}