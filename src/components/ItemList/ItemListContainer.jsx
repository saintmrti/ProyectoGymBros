import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner"
import ItemList from "./ItemList"
const ItemListContainer = () => {
  const [items, ss] = useState([])
  const [loading, setLoading] = useState(true)
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
      setLoading(false)
      setItems(res)
    }).catch(error=>console.log("Hubo un problema con la promesa: " + error))

    return () => {
      setLoading(true)
    }
    
  },[idCategoria])

  return (
    <>
      <div>
        {loading ? <Spinner/> : <ItemList items={items}/>}
      </div>
    </>
  )
}

export default ItemListContainer