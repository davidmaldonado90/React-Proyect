import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
const Login = () => {
    
    const { signIn } = useAuth();


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
        e.preventDefault()
        try {
            await signIn(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.error(error);
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
