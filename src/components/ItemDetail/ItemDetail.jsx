import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import {useCartContext} from '../../Context/cartContext';

const ItemDetail = ({item}) => {
    
    const [add, setadd] = useState(false);
    
    const { addItem }  = useCartContext()
    
    const {nombre, precio, img, stock} = item
   
    const onAdd = (quantity) => {
        setadd (true)
        addItem(item, quantity);
        let stock = item.stock - quantity
        item.stock = stock
      }

    return (
        <>
            <div className="card bg-transparent border-0 container col-sm-11">
                <div className="row">
                    <div className="col-md-3">
                        <img src={img} className="img-fluid rounded-start" alt={nombre} />
                    </div>
                    <div className="col-sm-11 text-center p-5 col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Precio: ${precio}</p>
                            <p className='card-text'>Stock Disponible: {stock}</p>
                            <div > {add ? (
                                <Link to='/Cart' className='btn btn-dark'>
                                    Ver Carrito
                                </Link>                               
                                ) : (
                                <Counter stock = {stock} initial = {1} onAdd={onAdd}/>)}
                                <Link to='/'className='btn btn-dark'>
                                    Seguir Comprando
                                </Link>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
)};

export default ItemDetail;

