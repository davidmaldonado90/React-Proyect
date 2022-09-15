import React, {createContext, useContext, useState} from 'react'

export const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext)

export const cartContextProvider = ({children}) => {

    const [cart, setcart] = useState([]);




  return (
        <cartContext.Provider>
            {children}
        </cartContext.Provider>
      )
    }
  

export default cartContext