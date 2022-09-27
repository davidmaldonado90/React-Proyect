import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useCartContext } from '../../Context/cartContext';

export const Form = () => {

    const { cart }  = useCartContext()
    const [buyer, setbuyer] = useState({
        nombre:'',
        email:'',
        telefono:''
    });

    const {nombre, email, telefono} = buyer

    const handleInputChange = (e) => {
        setbuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }

  return (
            <div>
                <h2>Finalizar Compra</h2>                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" 
                        /*{...register('nombre', {required: true})} */
                        value={nombre} 
                        onChange={handleInputChange} />
                        {/* {errors.nombre?.type === 'required' && <span>El campo nombre es requerido</span>} */}
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text" 
                        /*{...register('email', {
                            pattern: /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([^<>()[].,;:\s@"]+.)+[^<>()[].,;:\s@"]{2,})$/})} */
                            value={email} onChange={handleInputChange}/>
                        {/* {errors.email?.type === 'pattern' && <span>El formato del email es incorrecto</span>} */}
                    </div>

                    <div>
                        <label>Telefono</label>
                        <input type="text" {...register('telefono')} value={telefono} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <input type="submit" className='btn btn-dark'/>
                    </div>
                </form>
            </div>
    
  )
}
