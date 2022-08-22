import { Link } from 'react-router-dom'
const Item = ({id, titulo, descripcion}) => {
  return (
    <>
        <div className="cardInfo border border-black py-5 px-3 rounded-md">
            <h1 className="text-lg py-2">{titulo}</h1>
            <p className="py-2">{descripcion}</p>
            <button className="text-white bg-yellow-400 py-1 px-3 rounded-md font-bold hover:bg-yellow-500"><Link to={"/producto/" + id}>Leer más</Link></button>
        </div>
    </>
  )
}

export default Item