import SaveItem from "./SaveItem"

function SaveList({elements}) {

  return (
    <>
      {elements.map((element)=>
        <SaveItem key={element.id} id={element.id} nombre={element.nombre} marca={element.marca} precio={element.precio} cantidad={element.cantidad}/>
      )}
    </>
  )
}

export default SaveList