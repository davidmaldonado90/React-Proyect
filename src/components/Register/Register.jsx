import { addDoc, collection } from 'firebase/firestore';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../Context/authContext';
import { db } from '../Firebase/config';

const Register = () => {
    
    const { signUp } = useAuth();

    const navigate = useNavigate() //Hook to navigate between routes

    const [user, setUser] = useState({ //state for user data
    email:'',
    password:'',
    nombre: '',
    apellido: '',
    direccion:''
});

    const {email, password, nombre, apellido, direccion} = user //destructuring user


    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }
//
// Function to add a user to the database
    const addUserDb = async data => {
        try {
          await addDoc(collection(db, `users`), data);  // Add the user to the users collection
          setUser({
            email:'',
            password:'',
            nombre: '',
            apellido: '',
            direccion:''
          });
        } catch (error) {

        }
      };

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await signUp(user.email, user.password)  // The user is registered
            addUserDb(user)// Add the user to the database
            const Toast = Swal.mixin({ //successful registration alert
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: toast => {
                  toast.addEventListener('click', () => {
                    Swal.close();
                  });
                },
              });
              Toast.fire({
                icon: 'success',
                title: 'Usuario Registrado Exitosamente',
              });
            navigate('/loginView')
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Crear Usuario</h2>
                    <div className="card my-5">
                        <form onSubmit={handleSubmit} className="card-body cardbody-color p-lg-5">
                            <div className="mb-3">
                                <input type="email" 
                                        className="form-control" 
                                        name='email' 
                                        value={email}
                                        placeholder="Email" 
                                        onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" 
                                        className="form-control" 
                                        name='password' 
                                        value={password}
                                        placeholder="Contraseña"
                                        onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" 
                                        className="form-control" 
                                        name='nombre' 
                                        value={nombre}
                                        placeholder="Nombre"
                                        onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <input type="apellido" 
                                        className="form-control" 
                                        name='apellido' 
                                        value={apellido}
                                        placeholder="Apellido"
                                        onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" 
                                        className="form-control" 
                                        name='direccion' 
                                        value={direccion}
                                        placeholder="Direccion"
                                        onChange={handleChange}/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-dark px-5 mb-5 w-100">Registrarme</button>
                            </div>
                            
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
