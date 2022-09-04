import React, {useState, useEffect} from 'react'
import '../App.css'
import productos from '../../Mocks/productos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const {categoria} = useParams()
   
  const [products, setProducts] = useState([])

  const getData = () => new Promise((res,) => {

  if(categoria){
    setTimeout(() => res(productos.filter (el => el.tipo === categoria))        
    , 1000);
  }
  else{
    setTimeout(() => res(productos)        
    , 1000);
  }
})

useEffect(() => {
    getData()
    .then(response => setProducts(response))
    .catch(err => console.error(err))

  }, [categoria]);

  return (
    
    <>
      <ItemList list= {products}/>
    </>
  )
}
