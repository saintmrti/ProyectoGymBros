import { Link } from 'react-router-dom'
const Item = ({id, titulo, descripcion, img}) => {
  return (
    <>
        <div className="lg:flex lg:py-8 justify-center lg:mb-0 mb-10">
          <img className='imgPrincipal mr-3' src={img} alt="" />
          <div className='cardInfo lg:flex flex-wrap content-between lg:py-0 py-5 lg:px-0 px-3'>
            <h1 className="lg:text-2xl text-md lg:mb-0 mb-5">{titulo}</h1>
            <p className='lg:text-md text-sm lg:mb-0 mb-5'>{descripcion}</p>
            <div>
              <button className="text-white bg-yellow-400 lg:py-2 lg:px-5 py-1 px-2 rounded-md font-bold hover:bg-yellow-500"><Link to={"/producto/" + id}>Leer más &gt;</Link></button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Item