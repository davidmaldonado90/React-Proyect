import React from 'react';
import Swal from 'sweetalert2';
import { useCartContext } from '../../Context/cartContext';

const CartEnd = () => {

  const {clear, price} = useCartContext()

  const checkout = () => {
    clear()
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
        <div className='me-4 p-2 fs-3'><button className=' p-2 btn btn-dark' onClick={checkout}>Finalizar Compra</button></div>
      </div>
    </>
  );
}

export default CartEnd;
