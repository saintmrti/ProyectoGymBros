import { useContext, useState } from "react";
import ItemCount from "../ItemList/ItemCount";
import {Link} from 'react-router-dom';
const ItemDetail = ({nombre, marca, precio, stock, descripcion}) => {
  const [count, setCount] = useState(1)
  const [itemCount, setItemCount] = useState(true)

  const onAdd = () => {
    setItemCount(false)
  }

  const addList = () => {
    // saveItems.push({nombre: nombre, marca: marca, precio: precio, cantidad: count})
  }

  return (
    <div className="my-10 mx-20 border border-black py-5 px-3 rounded-md">
        <h1 className="text-lg py-2">{nombre}</h1>
        <p className="py-2">Marca: {marca}</p>
        <p className="py-2">Precio: ${precio}</p>
        <p className="py-2">Descripcion: <br /> {descripcion}</p>
        {itemCount ? <ItemCount stock={stock} onAdd={onAdd} count={count} setCount={setCount}/> : <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-5 hover:bg-yellow-500" onClick={addList} ><Link to={"/carrito"}>Terminar Compra</Link></button>}
    </div>
  )
}

export default ItemDetail