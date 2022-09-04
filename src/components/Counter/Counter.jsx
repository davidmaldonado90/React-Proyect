import {useState} from 'react';
import '../Counter/Counter.css'

const Counter = ({stock, onAdd, initial}) => {
    const[count, setCount] = useState(initial)
    const[disabledAdd, setDisabledAdd] = useState (false)
    const[disabledSubstract, setDisabledSubstract] = useState (false)


    const substract = () => {
        if(count > 1){
        setCount(count - 1)
        setDisabledAdd(false)
        setDisabledSubstract(false)
        }
        if(count === 1){
            setDisabledSubstract(true) 
        }
    }


    const add = () => {
        if(count < stock){
            setCount(count + 1)
            setDisabledSubstract(false)
            setDisabledAdd(false)
        }
        if(count === (stock - 1)){
            setDisabledAdd(true)
    }
    }
    return (
        <div className="counter">
            <div className="card text-white bg-primary mb-3">

                <div className="card-body">
                    <button className="btn btn-secondary" onClick={substract} disabled = {disabledSubstract}>-</button>
                    <span>  {count} </span>
                    <button className="btn btn-secondary" onClick={add} disabled={disabledAdd}>+</button>
                </div>
                <div className='confirm'>
                    <button className="btn btn-success" onClick={()=> onAdd(count)}>Añadir al Carrito</button>
                </div>
            </div>

        </div>
    );
}

export default Counter;
