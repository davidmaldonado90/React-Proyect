import React from 'react';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';

const CartEnd = () => {

  const {user} = useAuth() // destructuring user authentication, calling user

  const {price } = useCartContext() // destructuring cart context, calling the final price

// component to render the total price of the purchase. 
// if the user is not logged, redirects you to the login component, else redirects you to the purchase form.
  return (
    <>
      <div className='d-flex align-items-end flex-column mb-3'>
        <div className='me-4 p-2 fs-3'>Precio Total: ${price ()}</div>
          <div className='me-4 p-2 fs-3'>
            {!user ? <Link to='/login' className='btn btn-dark'>Finalizar Compra</Link> 
            : <Link to='/Form' className='btn btn-dark'>Finalizar Compra</Link>}
            
          </div>
      </div>
    </>
  );
}

export default CartEnd;
