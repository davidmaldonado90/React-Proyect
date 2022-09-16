import React, { useContext, useState} from 'react';

const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext)

export const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) =>{
      if(isInCart(item.id)){
        setCart(cart.map(el => {
          return  el.id === item.id ? {...el, quantity: el.quantity + quantity} : el ;
        }));
      }
    }
console.log(cart);
    const clear = () => setCart([])
    const isInCart = (id) => cart.find(el => el.id === id) ? true : false;

    const removeElement = (id) => setCart(cart.filter(el => el.id !== id));

  return (
        <cartContext.Provider value={{
          clear,
          isInCart,
          removeElement,
          addItem,
          cart,
          }}>
          {children}
        </cartContext.Provider>
      )
    }
  

export default CartContext