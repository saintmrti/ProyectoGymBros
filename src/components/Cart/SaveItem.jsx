import { useContext } from "react"
import { myContext } from "./CartContext"

const SaveItem = ({id, titulo, descripcion}) => {

  const { removeItem} = useContext(myContext)

  const eliminaItem = () => {
    removeItem(id)
  }
  return (
    <>
        <div className='flex justify-between lg:mx-0 mx-3 py-5 px-3 border border-black rounded-xl'>
          <div>
            <p className="lg:text-xl text-sm">{titulo}</p>
            <p className="lg:text-sm text-xs">{descripcion}</p>
          </div>
          <div>
            <button className="text-white bg-red-500 justify-self-center py-1 px-3 rounded-md font-bold hover:bg-red-600 ml-3" onClick={eliminaItem}><i className="bi bi-trash"></i></button>
          </div>
        </div>
    </>
  )
}

export default SaveItem