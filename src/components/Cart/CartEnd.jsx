import React from 'react';
import Swal from 'sweetalert2';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';

const CartEnd = () => {

  const { price} = useCartContext()

  const checkout = () => {
    Swal.fire({
      title: 'Gracias por su compra',
      icon: 'success',
      text: `total a abonar $ ${price()}`
    })


  }

  return (
    <>
      <div className='d-flex align-items-end flex-column mb-3'>
        <div className='me-4 p-2 fs-3'>Precio Total ${price ()}</div>
          <div className='me-4 p-2 fs-3'>
            <Link to='/Form'>Finalizar Compra</Link>
            {/* <button className=' p-2 btn btn-dark' onClick={checkout}>Finalizar Compra</button> */}
          </div>
      </div>
    </>
  );
}

export default CartEnd;
