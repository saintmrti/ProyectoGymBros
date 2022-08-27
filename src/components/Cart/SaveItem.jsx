import { useContext } from "react"
import { myContext } from "./CartContext"

const SaveItem = ({id, titulo, descripcion}) => {

  const {removeItem} = useContext(myContext)

  const eliminaItem = () => {
    removeItem(id)
  }
  return (
    <>
        <div className='flex justify-between my-5 mx-20'>
          <div style={{width:800}}>
            <p>{titulo}</p>
            <p>{descripcion}</p>
          </div>
          <div>
            <button className="text-white bg-red-500 justify-self-center py-1 px-3 rounded-md font-bold hover:bg-red-600 ml-3" onClick={eliminaItem}><i className="bi bi-trash"></i></button>
          </div>
        </div>
    </>
  )
}

export default SaveItem