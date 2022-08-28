import '../App.css'
import Counter from '../Counter/Counter'

export const ItemListContainer = () => {

  const onAdd = (count) => {
    console.log(`${count} productos seleccionados`)
  }
    
  return (
    
    <div>
      <Counter stock = {20} onAdd = {onAdd}/>
    </div>

  )
}
