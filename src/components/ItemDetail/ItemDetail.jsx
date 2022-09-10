import React from 'react';
import Counter from '../Counter/Counter';

const ItemDetail = ({item}) => {
    const {nombre,precio, imagen, stock} = item

    const onAdd = (count) => {
        addToCart({id: item.id, cantidad : count})
      }

      const addToCart = (item) => {
        console.log(item);
    } 

    return (
        <>
            <div className="card container col-sm-11">
                <div className="row col ">
                    <div className="col-md-3">
                        <img src={imagen} className="img-fluid" alt={nombre} />
                    </div>
                    <div className="col-sm-11 text-center p-5 col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Precio: ${precio}</p>
                            <p className='card-text'>Stock Disponible: {stock}</p>
                            <Counter stock = {stock} initial = {1} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>    
        </>
)};

export default ItemDetail;
