import { useContext } from "react";
import {Link} from 'react-router-dom';
import ArticulosContainer from "../assets/articles/ArticulosContainer";
import { myContext } from "../Cart/CartContext";
const ItemDetail = ({details}) => {
  const { addItem } = useContext(myContext)

  const onAdd = () => {
    addItem(details)
  }

  return (
    <div className="grid justify-center lg:my-10 lg:mx-20 py-5 px-3">
        <img src={details.img} alt="" />
        <h1 className="lg:text-2xl text-xl py-2 mt-10">{details.titulo}</h1>
        <ArticulosContainer nombre={details.nombre}/>
        <button onClick={onAdd}><Link className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold hover:bg-yellow-500" to={"/cart"}>Guardar</Link></button>
    </div>
  )
}

export default ItemDetail