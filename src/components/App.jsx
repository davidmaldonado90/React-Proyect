import {React, useState} from 'react';
import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';


function App() {

  
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    </>
    
  );
}

export default App;
