import Item from "./Item"

const ItemList = ({items}) => {

  return (
    <>
      {items.map((item)=>
          <Item key={item.id} id={item.id} titulo={item.titulo} descripcion={item.descripcion} img={item.img}/>
      )}
    </>
  )
}

export default ItemList