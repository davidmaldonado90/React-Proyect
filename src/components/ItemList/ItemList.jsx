import React from 'react';
import Item from '../Item/Item';

const ItemList = ({list}) => {

    //function that takes the call of each product, then renders the list of products
    return ( 
        <>
            <h1 className='text-center mt-2'>Bienvenido a Nuestra Tienda</h1>
            <div className='row row-cols-auto m-auto'>
                
                
                {
                list.map(item => <Item key={item.id} item={item} />
                )
            }  
            </div>
        </>
            
    )
}

export default ItemList;

