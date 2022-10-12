import React, {useState, useEffect} from 'react'
import '../App.css'
// import productos from '../../Mocks/productos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../Firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';

export const ItemListContainer = () => {

  const { categoria } = useParams()
   
  const [products, setProducts] = useState()
  const [load, setLoad] = useState(true)

//async function, If category is true, it will query the database for the products collection, and if category is false, it will get the products collection from the database.
  const getData = async (categoria) =>{
    try{

      const document = categoria ? query(collection(db, 'productos'), where("categoria", "==", categoria)) : collection(db, 'productos')
      const datos = await getDocs(document)
      const result = datos.docs.map((doc) => doc ={id: doc.id, ...doc.data()})
      setProducts(result)
      setLoad(false)
    }
    catch (error){
      console.error(error);
    }
  }
  // hook that is executed after the component has been mounted to the DOM, and then executes the getData function.
  useEffect(() => {
    getData(categoria)
  }, [categoria]);

  return (
    
    <>
      {
        load ? <Spinner/> : <ItemList list= {products}/> 
      }
    </>
    )
}
