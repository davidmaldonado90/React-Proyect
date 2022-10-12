import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../Context/authContext';
import Spinner from '../Spinner/Spinner';

const LoginView = () => {

const {  logOut, load} = useAuth()

const navigate = useNavigate()

//function to close session, with farewell alert
const  handleLogOut = async () =>{
            await logOut();
              Swal.fire({
                title: "Gracias por su visita!",
                icon : "success",
                timer: 1000,
            }); 
            setTimeout(() => {
                
                navigate('/')
            }, 1000);
        }
             

    if (load) return <Spinner/>

    //profile render
    return (
        <>
        
           
                <div className='container'>
                    <div className='text-center'>
                    <h1>Mi Perfil</h1>
                    <figure >
                        <img style={{width:'200px', height: '200px'}} src ={'/images/profile.webp'} alt=""/>
                        </figure>

                    <button onClick={handleLogOut} className='btn btn-dark m-5'>Cerrar Sesion</button>
                    </div>
                </div> 
        </>
    );
}

export default LoginView;
