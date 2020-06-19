export const addItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      x =>x.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(x =>
        x.id === cartItemToAdd.id
          ? { ...x, quantity: x.quantity + 1 }
          : x
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };