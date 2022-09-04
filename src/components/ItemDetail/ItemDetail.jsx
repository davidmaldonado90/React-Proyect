import React from 'react';
import Counter from '../Counter/Counter';

const ItemDetail = ({item}) => {

    const {nombre,precio, imagen, stock} = item

    const onAdd = (count) => {
        console.log(`${count} productos seleccionados`)
      }

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={imagen} className="img-fluid" alt={nombre} />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Precio: ${precio}</p>
                            <p className='card-text'>Stock Disponible: {stock}</p>
                            <Counter stock = {stock} initial = {1} onAdd = {onAdd}/>
                        </div>
                    </div>
                </div>
            </div>    
        </>
)};

export default ItemDetail;