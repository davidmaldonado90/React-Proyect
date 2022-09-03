import React, {useState, useEffect} from 'react'
import '../App.css'
import productos from '../../Mocks/productos';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = () => {
 
  const [products, setProducts] = useState([])

  const getData = () => new Promise((res,) => {
    setTimeout(() => res(productos)        
    , 2000);
})

useEffect(() => {
    getData()
    .then(response => setProducts(response))
    .catch(err => console.error(err))

  }, []);

  return (
    
    <>
      <ItemList list= {products}/>
    </>
  )
}
