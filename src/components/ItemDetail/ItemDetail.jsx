const ItemDetail = ({details}) => {
  return (
    <div className="my-10 mx-20 grid justify-items-stretch border border-black py-5 px-3 rounded-md">
        <h1 className="text-lg py-2">{details.nombre}</h1>
        <p className="py-2">Marca: {details.marca}</p>
        <p className="py-2">Precio: ${details.precio}</p>
        <p className="py-2">Descripcion: <br /> {details.descripcion}</p>
    </div>
  )
}

export default ItemDetail