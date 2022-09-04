import {React, useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../Mocks/productos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState({});

    const getProductos = () => new Promise((res,) => {
        setTimeout(() => res(productos.find(prod => prod.id === Number(id)))
        , 1000);
        
    })
    
    useEffect(() => {
        getProductos()
        .then(response => setItem(response))
        .catch(err => console.error(err))
    },[]);

    return (
        <>
        <ItemDetail item= {item}/>
        </>
    );
}

export default ItemDetailContainer;
