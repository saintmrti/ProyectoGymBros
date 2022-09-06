import { useContext } from "react";
import ArticulosContainer from "../assets/articles/ArticulosContainer";
import { myContext } from "../Cart/CartContext";
import { toast } from 'react-toastify';
import { disableNetwork } from "firebase/firestore";
const ItemDetail = ({details}) => {
  const { addItem } = useContext(myContext)

  const onAdd = () => {
    addItem(details)
    toast.success('Guardado con exito', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="grid justify-center lg:my-10 lg:mx-20 py-5 px-3">
        <img src={details.img} alt="" />
        <h1 className="lg:text-2xl text-xl py-2 mt-10">{details.titulo}</h1>
        <ArticulosContainer nombre={details.nombre}/>
        <div className="text-center">
          <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold hover:bg-yellow-500" onClick={onAdd}>Guardar</button>
        </div>
    </div>
  )
}

export default ItemDetail