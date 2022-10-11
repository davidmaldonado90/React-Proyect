import { addDoc,collection} from 'firebase/firestore';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCartContext } from '../../Context/cartContext';
import { db } from '../Firebase/config';

export const Form = () => {

    const { cart, price, clear}  = useCartContext()

    const [orderId, setorderId] = useState();

    const [buyer, setbuyer] = useState({
        nombre:'',
        email: '',
        telefono:'',
        direccion: ''
    });

    const {nombre, email, telefono, direccion } = buyer

    const navigate = useNavigate()

    const createOrder = async(data) =>{
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setorderId(order.id)
            clear()

        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        setbuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const Submit = e => {
        e.preventDefault()
        if (
            buyer.nombre === '' ||
            buyer.email === '' ||
            buyer.telefono === '' ||
            buyer.direccion === ''
          ){
            Swal.fire({
                icon: 'error',
                text: ` Debe completar todos los campos`,
              });
        }
        else{
        const items = cart.map(el => {
                            return {
                                    id:el.id,
                                    nombre: el.nombre,
                                     precio: el.precio,
                                      cantidad: el.quantity
                                }
                            })
        const day = new Date() 
        const total = price()
        const data = {buyer, items, day , total}
        createOrder(data)
        }
    }

    const checkout = () =>{
        Swal.fire({
            icon: 'success',
            title: 'Gracias por su compra!',
            text: `El ID de su pedido es: ${orderId}, pronto recibira un correo para coordinar la entrega`,
            timer: 3000,
        })
        setTimeout(() => {
             navigate('/')
        }, 3500);
    
    }

  return (
    <>
            {
                !orderId?

                <div className="container">
                    <div className='row'>
                    <div className="col-md-6 offset-md-3">
                <h2 className="text-center text-dark mt-5">Finalizar Compra</h2>                
                <div className="card my-5">
                <h4 className="text-center text-dark mt-5">Completar formulario con datos para la entrega</h4>
                <form onSubmit={Submit} className="card-body cardbody-color p-lg-5">            
                    <div className="mb-3">                        
                        <input type="text"
                        className="form-control"
                                name='nombre'
                                placeholder='Nombre'
                                value={nombre}
                                onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">                        
                        <input type="mail"
                        className="form-control"
                                name='email'
                                placeholder='Email'
                                value={email}
                                onChange={handleInputChange}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" 
                        className="form-control"
                                name='telefono'
                                placeholder='Telefono'
                                value={telefono}
                                onChange={handleInputChange}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" 
                                className="form-control"
                                name='direccion'
                                placeholder='Direccion'
                                value={direccion}
                                onChange={handleInputChange}/>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-dark px-5 mb-5 w-100">Finalizar</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </div>
            
            : 
            <div>
                {checkout()}
            </div>
                
                
            }
            

</>
    
  )
}


