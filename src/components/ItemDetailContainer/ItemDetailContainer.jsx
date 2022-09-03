import {React, useState, useEffect}from 'react';
import productos from '../../Mocks/productos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {


    const [item, setItem] = useState({});

    const getProductos = () => new Promise((res,) => {
        setTimeout(() => res(productos.find(prod => prod.id === 3))
        , 2500);
        
    })
    
    useEffect(() => {
        getProductos()
        .then(response => setItem(response))
        .catch(err => console.error(err))
    }, []);

    return (
        <>
        <ItemDetail item= {item}/>
        </>
    );
}

export default ItemDetailContainer;
