import {React, useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../Mocks/productos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState();

    const getProductos = () => new Promise((res,) => {
        setTimeout(() => res(productos.find(prod => prod.id === Number(id)))
        , 2000);
        
    })
    
    useEffect(() => {
        getProductos()
        .then(response => setItem(response))
        .catch(err => console.error(err))
    },[]);

    return (
        <>
            {
              item ? <ItemDetail item= {item}/> : 
              <div className="d-flex justify-content-center">
                <strong className='text-primary'>Loading...</strong>
                <div className="spinner-grow ml-auto text-primary" style={{width: '5rem', height: '5rem'}} role="status" aria-hidden="true"></div>
              </div>
            }
        </>
    );
}

export default ItemDetailContainer;
