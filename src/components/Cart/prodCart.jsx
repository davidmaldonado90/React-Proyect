import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../../Context/cartContext';

const ProdCart = ({el}) => {

    const { removeElement } = useCartContext() //destructuring cart context calling the function to delete product 

// view of each product in the cart
    return (
        <>
        <div className='container-fluid'>
            
            <div className='row text-center m-auto p-4 d-flex align-items-center'>           
                    <div className='col fs-3'>
                        <img className='rounded-circle' src={el.img} style={{width: '150px', height: '150px'}} alt={el.nombre} />
                    </div>

                    <div className='col fs-3'>{el.nombre}</div>
                    <div className='col fs-3'>Cantidad: {el.quantity}</div>
                    <div className='col fs-3'>$ {el.precio}</div>
                    <div className='col fs-3'><FaTrash  onClick={() => removeElement(el.id)} /></div>
            </div>
        </div>    
        
        </>
    );
}

export default ProdCart;
