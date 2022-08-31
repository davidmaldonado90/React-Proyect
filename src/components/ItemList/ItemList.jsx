import React from 'react';
import Item from '../Item/Item';

const ItemList = ({list}) => {

    return ( <>
                {list.map((item)=> 
                    <Item item={item} key={item.id}/>
                )}
                
                </>
    )
}

export default ItemList;
