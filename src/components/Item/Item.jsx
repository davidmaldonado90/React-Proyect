import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'

const Item = ({item}) => {

    const {nombre, imagen, id} = item
    
    return ( 

        <div className='cardContainer'>

            <div className="cardItem">

                <img className='cardImage' src={imagen} alt={nombre}/>
            </div>

            <div className="card-body">
                <p className="card-text">{nombre}</p>
                <Link to={`/detalles/${id}`}><button className='btn btn-primary'>Ver Detalle</button></Link>
            </div>
        </div>
                
)
}

export default Item;
