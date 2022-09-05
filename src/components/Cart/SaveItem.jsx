import { useContext } from "react"
import { myContext } from "./CartContext"
import { Link } from 'react-router-dom'

const SaveItem = ({id, titulo, descripcion}) => {

  const { removeItem} = useContext(myContext)

  const eliminaItem = () => {
    removeItem(id)
  }
  return (
    <>
      <div className='flex justify-between items-center hover:bg-gray-100 rounded-xl'>
        <Link className="py-5 px-3" to={"/producto/" + id}>
          <div>
            <p className="lg:text-xl text-sm">{titulo}</p>
            <p className="lg:text-sm text-xs">{descripcion}</p>
          </div>
        </Link>
        <div>
          <button className="text-white bg-red-500 py-1 px-3 ml-2 mr-2 rounded-md font-bold hover:bg-red-600" onClick={eliminaItem}><i className="bi bi-trash"></i></button>
        </div>
      </div>
    </>
  )
}

export default SaveItem