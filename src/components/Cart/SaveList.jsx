import SaveItem from "./SaveItem"

function SaveList({elements}) {

  return (
    <>
      {elements.map((element)=>
        <SaveItem key={element.id} id={element.id} titulo={element.titulo} descripcion={element.descripcion}/>
      )}
    </>
  )
}

export default SaveList