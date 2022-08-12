const ItemCount = ({stock, onAdd, count, setCount}) => {

  const aumentar = () => {
    if (stock > 0) {
        if (count < stock) {
          setCount(count + 1)
        } else{
            console.log("No tenemos más productos")
        } 
    } else{
        console.log("No tenemos stock")
    }

  }

  const disminuir = () => {
    count > 0 ? setCount(count - 1) : setCount(0)
  }

  return (
    <>
        <div className="flex flex-grow justify-center border" style={{width:200}}>
            <button id="decremento" className="mr-20 text-blue-600 font-bold" onClick={disminuir}>-</button>
            <label htmlFor="">{count}</label>
            <button id="incremento" className="ml-20 text-blue-600 font-bold" onClick={aumentar}>+</button>
        </div>
        <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-5 hover:bg-yellow-500" onClick={onAdd}>Agregar a carrito</button>
    </>
  )

}

export default ItemCount