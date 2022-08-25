import {React, useState} from 'react';
import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar';


function App() {

  
  return (
    <>
    <NavBar/>
    <ItemListContainer title='Bienvenido a Nuestra Tienda' />
    </>
    
  );
}

export default App;
