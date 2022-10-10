import React from 'react';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';

const CartEnd = () => {

  const {user} = useAuth()

  const {price } = useCartContext()


  return (
    <>
      <div className='d-flex align-items-end flex-column mb-3'>
        <div className='me-4 p-2 fs-3'>Precio Total ${price ()}</div>
          <div className='me-4 p-2 fs-3'>
            {!user ? <Link to='/login' className='btn btn-dark'>Finalizar Compra</Link> 
            : <Link to='/Form' className='btn btn-dark'>Finalizar Compra</Link>}
            
          </div>
      </div>
    </>
  );
}

export default CartEnd;
