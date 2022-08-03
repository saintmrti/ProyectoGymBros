import { Link } from 'react-router-dom'
const Item = ({id, nombre, marca, precio}) => {
  return (
    <>
        <div className="cardInfo my-10 mx-20 grid justify-items-stretch border border-black py-5 px-3 rounded-md">
            <h1 className="text-lg py-2">{nombre}</h1>
            <p className="py-2">Marca: {marca}</p>
            <p className="py-2">Precio: ${precio}</p>
            <button className="text-white bg-yellow-400 justify-self-center py-1 px-3 rounded-md font-bold hover:bg-yellow-500"><Link to={"/producto/" + id}>Ver detalles</Link></button>
        </div>
    </>
  )
}

export default Item