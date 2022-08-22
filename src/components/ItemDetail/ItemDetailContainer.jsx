import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from "./ItemDetail"
import Spinner from '../Spinner'

const ItemDetailContainer = () => {
  const {idProducto} = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const db = getFirestore()

    const refADoc = doc(db, 'items', idProducto)
    getDoc(refADoc).then((res) => {
      setLoading(false)
      setDetails({ id: res.id, ...res.data() })
    })
    
  }, [idProducto])
  return (
    <>
        {loading ? <Spinner/> : <ItemDetail details={details}/>}
    </>
  )
}

export default ItemDetailContainer