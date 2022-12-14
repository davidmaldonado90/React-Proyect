import { getDoc, doc } from 'firebase/firestore';
import {React, useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/config';
// import productos from '../../Mocks/productos';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [item, setItem] = useState();
    const [load, setLoad] = useState(true)

    //function to get a product in the database collection. then set the product status to the response result.
const selectItem = async (idProducto) => {
    try {
        const document = doc(db, "productos", idProducto )
        const res = await getDoc (document)
        const result = {id: res.id, ...res.data()}
        setItem(result)
        setLoad(false)
    } catch (error) {
        console.error(error);
    }
}
//hook that is executed after the component has been mounted to the DOM, and then executes the selectitem function.
    useEffect(() => {
        selectItem(id)
    }, [id]);

    return (
        <>
            {
              load ? <Spinner/> : <ItemDetail item= {item}/> 
              
            }
        </>
    );
}

export default ItemDetailContainer;

