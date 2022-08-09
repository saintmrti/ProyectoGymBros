import { useState } from "react"
const ItemCount = ({stock, onAdd, items, setItems}) => {

  const aumentar = () => {
    if (stock > 0) {
        if (items < stock) {
          setItems(items + 1)
        } else{
            console.log("No tenemos más productos")
        } 
    } else{
        console.log("No tenemos stock")
    }

  }

  const disminuir = () => {
    items > 0 ? setItems(items - 1) : setItems(0)
  }

  return (
    <>
        <div className="flex flex-grow justify-center border" style={{width:200}}>
            <button id="decremento" className="mr-20 text-blue-600 font-bold" onClick={disminuir}>-</button>
            <label htmlFor="">{items}</label>
            <button id="incremento" className="ml-20 text-blue-600 font-bold" onClick={aumentar}>+</button>
        </div>
        <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-5 hover:bg-yellow-500" onClick={onAdd}>Agregar a carrito</button>
    </>
  )

}

export default ItemCount