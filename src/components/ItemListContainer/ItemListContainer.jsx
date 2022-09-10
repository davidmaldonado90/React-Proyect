import React, {useState, useEffect} from 'react'
import '../App.css'
import productos from '../../Mocks/productos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const {categoria} = useParams()
   
  const [products, setProducts] = useState([])

  
  useEffect(() => {
  const getData = () => new Promise((res,) => {

    categoria ? setTimeout(() => res(productos.filter (el => el.tipo === categoria)), 1000) : setTimeout(() => res(productos), 1000);
  
    }
  )
    getData()
    .then(response => setProducts(response))
    .catch(err => console.error(err))
    }, [categoria]);

  return (
    
    <>
      {
        products.length !==0 ? <ItemList list= {products}/> : 

        <div className="d-flex justify-content-center">
          <strong className='text-primary' style={{fontSize: '3rem'}} >Loading...</strong>
          <div className="spinner-grow ml-auto text-primary" style={{width: '5rem', height: '5rem'}} role="status" aria-hidden="true"></div>
        </div>
      }
    </>
    )
}
