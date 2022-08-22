import { useContext } from "react"
import { myContext } from "./CartContext"

const SaveItem = ({id, titulo, descripcion}) => {

  const {removeItem} = useContext(myContext)

  const eliminaItem = () => {
    removeItem(id)
  }
  return (
    <>
        <div className='flex my-10 mx-20'>
          <p>{titulo}</p>
          <p>{descripcion}</p>
          <button className="text-white bg-red-500 justify-self-center py-1 px-3 rounded-md font-bold hover:bg-red-600" onClick={eliminaItem}><i className="bi bi-trash"></i></button>
        </div>
    </>
  )
}

export default SaveItem