import React from 'react';
import { Link } from 'react-router-dom';
import {IoPersonOutline} from 'react-icons/io5';

const LoginWidget = () => {
    return (
        <>
        <Link to='/Login'>
        <IoPersonOutline className='icon'/>
        </Link>
        </>
    );
}

export default LoginWidget;

