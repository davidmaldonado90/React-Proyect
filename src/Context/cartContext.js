import React, { useContext, useState} from 'react';

const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext)

export const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    //If the product is already in the cart, increase the quantity of that item by the passed quantity. If the item is not in the cart, add it with the amount passed.
    const addItem = (item, quantity) =>{
      if(isInCart(item.id)){
        setCart(cart.map(el => {
          return  el.id === item.id ? {...el, quantity: el.quantity + quantity} : el ;
        }));
      }else{
        setCart([...cart, {...item, quantity}])
    }}

    const clear = () => setCart([]) //function to empty cart
    const isInCart = (id) => cart.find(el => el.id === id) ? true : false;

    const removeElement = (id) => setCart(cart.filter(el => el.id !== id)); //function to delete product in cart

    const price = () => { return cart.reduce((acc, el) => acc + el.precio * el.quantity, 0)}; //function to calculate the total price

    const cartCount = () => cart.reduce((acum, ele) => acum + ele.quantity, 0) //counter to show te aomunt in the cart widget


  return (
        <cartContext.Provider value={{
          clear,
          isInCart,
          removeElement,
          addItem,
          price,
          cartCount,
          cart,
          }}>
          {children}
        </cartContext.Provider>
      )
    }
  

export default CartContext