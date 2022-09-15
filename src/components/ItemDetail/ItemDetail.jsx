import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import cartContext from '../../Context/cartContext';

const ItemDetail = ({item}) => {
    
    const { cart } = useContext (cartContext)
    
    const {nombre,precio, imagen, stock} = item

    const [add, setadd] = useState(false);
    const [addToCart, setaddToCart] = useState({});
    
    const onAdd = (count) => {
        setaddToCart({id: item.id, cantidad : count})
        setadd (true)
      }
    
    console.log(cart);


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
                            <div> {add ? (
                                <Link to='/Cart' type='button'>
                                    Ver Carrito
                                </Link> 
                                ) : (
                                <Counter stock = {stock} initial = {1} onAdd={onAdd}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
)};

export default ItemDetail;
