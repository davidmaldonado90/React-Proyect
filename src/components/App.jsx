import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


function App() {

  
  return (
    <>
    <BrowserRouter>

    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:tipo' element={<ItemListContainer/>}/>
      <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>   

    </Routes>

    </BrowserRouter>
    </>
    
    );
}

export default App;
