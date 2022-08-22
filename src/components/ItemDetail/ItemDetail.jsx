import { useContext, useState } from "react";
import ItemCount from "../ItemList/ItemCount";
import {Link} from 'react-router-dom';
import { myContext } from "../Cart/CartContext";
const ItemDetail = ({details}) => {
  const [count, setCount] = useState(1)
  const [itemCount, setItemCount] = useState(true)
  const {addItem} = useContext(myContext)

  const onAdd = () => {
    addItem(details, count)
    setItemCount(false)
  }

  return (
    <div className="my-10 mx-20 border border-black py-5 px-3 rounded-md">
        <h1 className="text-lg py-2">{details.titulo}</h1>
        <p className="py-2">{details.descripcion}</p>
        {itemCount ? <ItemCount onAdd={onAdd} count={count} setCount={setCount}/> : <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-5 hover:bg-yellow-500"><Link to={"/cart"}>Ir a carrito</Link></button>}
    </div>
  )
}

export default ItemDetail