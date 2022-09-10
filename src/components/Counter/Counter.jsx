import {useState} from 'react';
import '../Counter/Counter.css'

const Counter = ({stock, onAdd, initial}) => {

    const[count, setCount] = useState(initial)

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
            <div className="card text-white bg-muted">
                <div className="card-body">
                    <button className="btn btn-secondary" onClick= {() => quantityProduct("-")}>-</button>
                    <span className='text-black'>  {count} </span>
                    <button className="btn btn-secondary" onClick={() => quantityProduct ("+")}>+</button>
                </div>
                <div className='confirm'>
                    <button className="btn btn-success" onClick={()=> onAdd(count)}>Añadir al Carrito</button>
                </div>
            </div>

        </div>
    );
}

export default Counter;
