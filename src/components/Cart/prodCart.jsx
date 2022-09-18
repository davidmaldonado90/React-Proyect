import React from 'react';
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../../Context/cartContext';

const ProdCart = ({el}) => {

    const { removeElement } = useCartContext()

    return (
        <>
        <div className='container'>
            
            <div className='row text-center m-auto p-4 d-flex align-items-center'>           
                    <div className='col fs-3'><img src={el.imagen} style={{width: '150px', height: '150px'}} alt={el.nombre} /></div>
                    <div className='col fs-3'>{el.nombre}</div>
                    <div className='col fs-3'>Cantidad {el.quantity}</div>
                    <div className='col fs-3'>$ {el.precio}</div>
                    <div className='col fs-3'><FaTrash  onClick={() => removeElement(el.id)} /></div>
            </div>
        </div>    
        
        </>
    );
}

export default ProdCart;
