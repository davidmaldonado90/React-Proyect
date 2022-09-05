import React from 'react';
import Item from '../Item/Item';

const ItemList = ({list}) => {

    return ( 
            
            <div className='row row-cols-auto m-auto'>
                {
                list.map(item => <Item key={item.id} item={item} />
                )
            }
                
            </div>
    )
}

export default ItemList;

