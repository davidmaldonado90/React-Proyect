import { addDoc,collection } from 'firebase/firestore';
import React, {useState} from 'react'
import { useCartContext } from '../../Context/cartContext';
import { db } from '../Firebase/config';

export const Form = () => {

    const { cart, price, clear}  = useCartContext()

    const [orderId, setorderId] = useState();

    const [buyer, setbuyer] = useState({
        nombre:'',
        email:'',
        telefono:''
    });

    const {nombre, email, telefono } = buyer

    const createOrder = async(data) =>{
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data) 
            console.log("orden numero", order);
            setorderId(order.id)
            clear()

        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = ({target: {name, value}}) => {
        setbuyer({...buyer, [name]: value})
        }


    const handleSubmit = e => {
        e.preventDefault()
        const items = cart.map(el => {
                            return {
                                    id:el.id, nombre: el.nombre, precio: el.precio, cantidad: el.quantity}})
        const day = new Date() 
        const total = price()
        const data = {buyer, items, day , total}
        console.log('data', data);
        createOrder(data)

    }

  return (
    <>
            {
                !orderId?

                <div>
                <h2>Finalizar Compra</h2>                
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Nombre</label>
                        <input type="text"
                                name='Nombre'
                                placeholder='Nombre'
                                value={nombre}
                                onChange={handleInputChange} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text"
                                name='Email'
                                placeholder='Email'
                                value={email}
                                onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Telefono</label>
                        <input type="text" 
                                name='Telefono'
                                placeholder='Telefono'
                                value={telefono}
                                onChange={handleInputChange}/>
                    </div>

                    <div>
                        <input type="submit" className='btn btn-dark'/>
                    </div>
                </form>
            </div>
            : <h4>Su orden de compra es: {orderId}</h4> }
            </>
    
  )
}
