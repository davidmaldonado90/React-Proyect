import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/cartContext';
import ProdCart from './prodCart';
import CartEnd from './CartEnd'

export const Cart = () => {

  //destructuring cart context calling cart

  const { cart } = useCartContext() 


  //empty cart rendering

  if (cart.length === 0) {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col p-5 m-5">
              <h2>El Carrito esta Vacio</h2>
              <Link to="/" className='btn btn-dark' style={{ textDecoration: 'none' }}>Volver a la Tienda</Link>
            </div>
          </div>
        </div>
      </>
    );
  }


  //rendering of products in cart

  return (
    <>
      <div className='container row-cols-auto m-auto'>
        {cart.map((el) => <ProdCart key={el.id} el= {el} />)}

      <CartEnd/>
      </div>
    </>
  )
}
