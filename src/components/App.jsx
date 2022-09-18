import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Cart/Cart';
import CartContext from '../Context/cartContext';
import Login from './Login/Login';


function App() {

  
  return (
    <>
      <CartContext>
        <BrowserRouter>
        <div className='app row'>

          <NavBar/>

          <Routes>

            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
            <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>   
            <Route path='/Cart' element= {<Cart/>}/>
            <Route path='/Login' element= {<Login/>}/>

          </Routes>
          
        </div>
        </BrowserRouter>
      </CartContext>
    </>
    
    );
}

export default App;
