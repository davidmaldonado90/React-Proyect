import {useState} from 'react';
import '../Counter/Counter.css'

const Counter = ({stock, onAdd, initial}) => {


    // state of count initial value = 1 

    const[count, setCount] = useState(initial)


    //function to add o subtract quantity of products. if add or substract set the count with the new value.
    const quantityProduct = (operation) =>{
        if(operation === "+"){
            if(count < stock){
                setCount(count + 1)
            }
        } else {
            if (count > 1)
            setCount(count -1)
        }
    }
    
    return (
        <div className="counter">
            <div className="card  bg-transparent border-0">
                <div className="card-body">
                    <button className="btn btn-dark" onClick= {() => quantityProduct("-")}>-</button>
                    <span className='text-black'>  {count}  </span>
                    <button className="btn btn-dark" onClick={() => quantityProduct ("+")}>+</button>
                </div>
                <div className='confirm'>
                    <button className="btn btn-success" onClick={()=>  onAdd(count)}>Añadir al Carrito</button>
                </div>
            </div>

        </div>
    );
}

export default Counter;
