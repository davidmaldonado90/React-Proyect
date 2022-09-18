import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'

const Item = ({item}) => {

    const {nombre,precio, imagen, id} = item
    
    return ( 
        
            <div className='cardContainer m-auto mt-3'>
                <div className="cardItem ">
                    <img className='cardImage rounded-4 ' src={imagen} alt={nombre}/>
                </div>
                <div className="card-body">
                    <p className="card-text">{nombre}</p>
                    <p>Precio: $ {precio}</p>
                    <Link className='btn btn-dark' to={`/detalles/${id}`}>Ver Detalle</Link>
                </div>
            </div>
        
                
)
}

export default Item;
