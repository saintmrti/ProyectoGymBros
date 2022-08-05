import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const {idCategoria} = useParams()
  useEffect(()=>{
    let itemsArray =[
      {id:1, nombre:"Creatina", marca:"RC", precio: 250, idCategoria: "creatinas"},
      {id:2, nombre:"Proteina", marca:"Whey", precio: 1500, idCategoria: "proteinas"}
    ]
    const promesaItems = new Promise((res, rej) => {
      setTimeout(() => {
        
        if(!idCategoria){
          res(itemsArray)
        } else{
          res(itemsArray.filter(item => item.idCategoria === idCategoria))
        }
      }, 2000)
    })

    promesaItems.then((res) => {
      setItems(res)
    }).catch(error=>console.log("Hubo un problema con la promesa: " + error))
    
  },[idCategoria])

  return (
    <>
      <div>
        <ItemList items={items}/>
      </div>
    </>
  )
}

export default ItemListContainer