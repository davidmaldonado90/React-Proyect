import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import Spinner from '../Spinner/Spinner';

const LoginView = () => {

const { user, logOut, load} = useAuth()

const navigate = useNavigate()

const  handleLogOut = async () =>{
        await logOut();
        navigate('/')
} 
    if (load) return <Spinner/>
    
    return (
        <>
           
                <div className='container'>
                    <h1>Bienvenido {user.email}</h1>
                    <div>
                        <p>Mis compras</p>
                    </div>

                    <button onClick={handleLogOut} className='btn btn-dark'>Cerrar Sesion</button>
                </div> 
        </>
    );
}

export default LoginView;
