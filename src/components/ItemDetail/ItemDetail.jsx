import { useContext } from "react";
import {Link} from 'react-router-dom';
import { myContext } from "../Cart/CartContext";
const ItemDetail = ({details}) => {
  const { addItem } = useContext(myContext)

  const onAdd = () => {
    addItem(details)
  }

  return (
    <div className="lg:my-10 lg:mx-20 py-5 px-3">
        <h1 className="text-2xl py-2">{details.titulo}</h1>
        <p className="py-2">{details.descripcion}</p>
        <button onClick={onAdd}><Link className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-5 hover:bg-yellow-500" to={"/cart"}>Guardar</Link></button>
    </div>
  )
}

export default ItemDetail