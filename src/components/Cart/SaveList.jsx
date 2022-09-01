import SaveItem from "./SaveItem"
import {Link} from 'react-router-dom';

function SaveList({elements}) {

  return (
    <>
      {elements.map((element)=>
        <SaveItem key={element.id} id={element.id} titulo={element.titulo} descripcion={element.descripcion}/>
      )}
      <div className="text-center">
        <button className="mt-3"><Link className="text-white bg-yellow-400 py-2 px-3 rounded-md font-bold hover:bg-yellow-500" to={"/test"}>Registrarse</Link></button>
      </div>
    </>
  )
}

export default SaveList