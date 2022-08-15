import { useContext, useState } from "react";
import ItemCount from "../ItemList/ItemCount";
import {Link} from 'react-router-dom';
import { myContext } from "../CartContext";
const ItemDetail = ({details}) => {
  const [count, setCount] = useState(1)
  const [itemCount, setItemCount] = useState(true)
  const {save, isSave, addItem} = useContext(myContext)

  const onAdd = () => {
    !isSave(details.id) && setItemCount(false)
    addItem(details, count)
  }

  const addList = () => {
    console.log('Este es tu array', save)
  }

  return (
    <div className="my-10 mx-20 border border-black py-5 px-3 rounded-md">
        <h1 className="text-lg py-2">{details.nombre}</h1>
        <p className="py-2">Marca: {details.marca}</p>
        <p className="py-2">Precio: ${details.precio}</p>
        <p className="py-2">Descripcion: <br /> {details.descripcion}</p>
        {itemCount ? <ItemCount stock={details.stock} onAdd={onAdd} count={count} setCount={setCount}/> : <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-5 hover:bg-yellow-500" onClick={addList} ><Link to={"/carrito"}>Terminar Compra</Link></button>}
    </div>
  )
}

export default ItemDetail