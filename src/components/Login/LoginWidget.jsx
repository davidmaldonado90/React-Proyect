import React from 'react';
import { Link } from 'react-router-dom';
import {IoPersonOutline} from 'react-icons/io5';
import { useAuth } from '../../Context/authContext';

const LoginWidget = () => {

    const {user } = useAuth()

    return (
        <>
        {!user ?
            <Link to='/Login'>
                <IoPersonOutline className='icon'/>
                
            </Link> 
                     : 
            
                <Link to='/LoginView' style={{ textDecoration: 'none', color:'grey' }}>
                <span className='p-3'  >Ir a mi Perfil</span>
                    
                </Link> 
            }
        </>
    );
}

export default LoginWidget;

