import { useEffect, useState } from "react"
import ItemList from "./ItemList"
const ItemListContainer = () => {
  const [items, setItems] = useState([])
  useEffect(()=>{
    let itemsArray =[
      {id:1, nombre:"Creatina", marca:"RC", precio: 250},
      {id:2, nombre:"Proteina", marca:"Whey", precio: 1500},
      {id:3, nombre:"Insane Psychotic", marca:"Watermelon", precio: 400}
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
      <div className="container-fluid">
        <ItemList items={items}/>
      </div>
    </>
  )
}

export default ItemListContainer