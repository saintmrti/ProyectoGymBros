import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Spinner from "../Spinner"
import ItemList from "./ItemList"
const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategoria} = useParams()
  useEffect(()=>{
    
    const db = getFirestore()
    const refCollectionItems = collection(db, 'items')

    getDocs(refCollectionItems).then((res) => {
      setLoading(false)
      const arrayItems = res.docs.map((item) => ({id: item.id, ...item.data()}))
      if(!idCategoria){
        setItems(arrayItems)
      } else{
        setItems(arrayItems.filter(item => item.categoria === idCategoria))
      }
    })

    return () => {
      setLoading(true)
    }
    
  },[idCategoria])

  return (
    <>
      <div className="grid gap-4 lg:my-10 justify-center">
        {loading ? <Spinner/> : <ItemList items={items}/>}
      </div>
    </>
  )
}

export default ItemListContainer