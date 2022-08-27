import SaveItem from "./SaveItem"
import {Link} from 'react-router-dom';

function SaveList({elements}) {

  return (
    <>
      {elements.map((element)=>
        <SaveItem key={element.id} id={element.id} titulo={element.titulo} descripcion={element.descripcion}/>
      )}
      <div className="text-center">
        <button className="text-white bg-yellow-400 py-1 px-3 rounded-md font-bold hover:bg-yellow-500"><Link to={"/test"}>Registrarse</Link></button>
      </div>
    </>
  )
}

export default SaveList