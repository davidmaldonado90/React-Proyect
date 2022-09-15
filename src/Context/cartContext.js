import React, {createContext, useState} from 'react'

export const cartContext = createContext();

export const CartContext = ({children}) => {

    const [Cart, setCart] = useState();


  return (
        <cartContext.Provider value={{Cart, setCart}}>
            {children}
        </cartContext.Provider>
      )
    }
  

export default CartContext