import React, {useState, useEffect} from 'react'
import '../App.css'
import Counter from '../Counter/Counter'
import productos from '../../Mocks/productos';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = () => {

  const onAdd = (count) => {
    console.log(`${count} productos seleccionados`)
  }
  
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const getData = new Promise((res) =>{
      setTimeout(() => {
        res(productos);
      }, 2000);
    })
    getData.then((res) => setProducts(res))
    .catch((err) => console.error(err))
  }, [])
  




  return (
    
    <div>
      <ItemList list= {productos}/>
      <Counter stock = {20} onAdd = {onAdd}/>
    </div>

  )
}
