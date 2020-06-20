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