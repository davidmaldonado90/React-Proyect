import React from 'react'
import { BiCart} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import CartContext, { useCartContext } from '../../Context/cartContext'

export const CartWidget = () => {

  const { cartCount } = useCartContext(CartContext) //destructuring cart context  calling the count of products in cart


  return (
    <>
      <Link to='/Cart' style={{textDecoration: 'none', color:'grey'}} className='icon'> {cartCount()}      
        <BiCart />
      </Link>
    </>
  )
}
