import { useEffect, useState } from "react";
import ItemCount from "../ItemList/ItemCount";
const ItemDetail = ({nombre, marca, precio, stock, descripcion}) => {
  const [items, setItems] = useState(1)
  const [itemCount, setItemCount] = useState(true)

  const onAdd = () => {
    setItemCount(false)
  }

  return (
    <div className="my-10 mx-20 border border-black py-5 px-3 rounded-md">
        <h1 className="text-lg py-2">{nombre}</h1>
        <p className="py-2">Marca: {marca}</p>
        <p className="py-2">Precio: ${precio}</p>
        <p className="py-2">Descripcion: <br /> {descripcion}</p>
        {itemCount ? <ItemCount stock={stock} onAdd={onAdd} items={items} setItems={setItems}/> : console.log('items:', items)}
    </div>
  )
}

export default ItemDetail