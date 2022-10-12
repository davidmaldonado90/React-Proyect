import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../Context/authContext';
import { useCartContext } from '../../Context/cartContext';
const Login = () => {
    
    const { signIn } = useAuth();

    const { cart } = useCartContext()

    const [error, setError] = useState();

    const [user, setUser] = useState({
    email:'',
    password:''
});

    const {email, password} = user

    const navigate = useNavigate()
    
    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async e => {
        e.preventDefault(); 
        setError();
        try {
            await signIn(user.email, user.password) // The login function is called
            if(cart.length <= 0){ 
                navigate('/form')
            }
            const Toast = Swal.mixin({
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
                title: `Bienvenido: ${user.email}`,
              });
            navigate('/');
        } 
          catch (error) {
            //// check if the error code. If so, it will set the error state to the error message being transmitted.
            setError(error.message)

            if (error.code === 'auth/user-not-found') {
                setError('Usuario no Registrado');
              }
              if (error.code === 'auth/wrong-password') {
                setError('Contraseña incorrecta');
              }
              if (error.code === 'auth/invalid-email') {
                setError('Email inválido');
              }
              if (error.code === 'auth/too-many-requests') {
                setError('Demasiados intentos, intente más tarde');
              }
              if (error.code === 'auth/internal-error') {
                setError('Debe completar todos los campos');
              }
          }
    }

    return (
        <>  
           
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Iniciar Sesion</h2>
                    <div className="card my-5">
                        <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
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
                            <div className="text-center">

                                {error && <p><strong>{error}</strong></p>}
                                <p>¿Ya tenes cuenta?</p>
                                
                                <button type="submit" className="btn btn-dark px-1 mb-1 w-100">Iniciar Sesion</button>
                                
                                <p className='mt-1'>¿Aun no tenes cuenta?</p>
                                <Link to='/Register'>
                                    <button type="submit" className="btn btn-dark px-1 mb-5 w-100">Registrarme</button>
                                </Link>  
                            </div>                          
                        </form>
                    </div>
                    </div>
                </div>
            </div> 
        </> 
    );
}

export default Login;
