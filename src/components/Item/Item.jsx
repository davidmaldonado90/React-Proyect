import React from 'react';
import '../Item/Item.css'

const Item = ({item}) => {
    
    return ( 

        <div className='cardContainer'>

            <div className="cardItem">

                <img className='cardImage' src={item.imagen} alt={item.name}/>
            </div>

            <div className="card-body">
                <p className="card-text">{item.nombre}</p>
                <p className="card-text">Precio: ${item.precio}</p>
            </div>
        </div>
                
)
}

export default Item;
