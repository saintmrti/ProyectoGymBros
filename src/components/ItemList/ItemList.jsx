import Item from "./Item"

const ItemList = ({items}) => {

  return (
    <>
        {items.map((item)=>
            <Item key={item.id} id={item.id} nombre={item.nombre} marca={item.marca} precio={item.precio}/>
        )}
    </>
  )
}

export default ItemList