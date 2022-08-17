const SaveItem = ({id, nombre, marca, precio, cantidad}) => {
  return (
    <>
        <div className='flex my-10 mx-20'>
          <p>{nombre}</p>
          <p>${precio}</p>
          <p>x{cantidad}</p>
          <button className="text-white bg-red-500 justify-self-center py-1 px-3 rounded-md font-bold hover:bg-red-600">-</button>
        </div>
    </>
  )
}

export default SaveItem