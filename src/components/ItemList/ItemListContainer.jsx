import { useEffect, useState } from "react"
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer"
import ItemList from "./ItemList"
const ItemListContainer = () => {
  const [items, setItems] = useState([])
  useEffect(()=>{
    let itemsArray =[
      {id:1, nombre:"Creatina", marca:"RC", precio: 250},
      {id:2, nombre:"Proteina", marca:"Whey", precio: 1500}
    ]
    const promesaItems = new Promise((res, rej) => {
      setTimeout(() => {
        res(itemsArray)
      }, 2000)
    })

    promesaItems.then((res) => {
      setItems(res)
    }).catch(error=>console.log("Hubo un problema con la promesa: " + error))
  },[])

  return (
    <>
      <div>
        <ItemList items={items}/>
      </div>
    </>
  )
}

export default ItemListContainer