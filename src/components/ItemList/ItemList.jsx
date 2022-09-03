import React from 'react';
import Item from '../Item/Item';

const ItemList = ({list}) => {

    return ( <div className='row row-cols1 row-cols-md-3 g-4 cards-margin'>
                {list.map((item)=> 
                    <Item item={item} key={item.id}/>
                )}
                
                </div>
    )
}

export default ItemList;

