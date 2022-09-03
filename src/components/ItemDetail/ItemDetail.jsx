import React from 'react';
import Counter from '../Counter/Counter';

const ItemDetail = ({item}) => {

    const onAdd = (count) => {
        console.log(`${count} productos seleccionados`)
      }
    return (
        <>
            <div className="card mb-3" style={{maxWidth: '900px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">Precio: ${item.precio}</p>
                            <p className='card-text'>Stock Disponible: {item.stock}</p>
                            <Counter stock = {item.stock} initial = {0} onAdd = {onAdd}/>
                        </div>
                    </div>
                </div>
            </div>    
        </>
)};

export default ItemDetail;
