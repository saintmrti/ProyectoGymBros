import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Spinner from '../Spinner';

const ItemDetailContainer = () => {
  const {idProducto} = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let detailsArray =[
        {id:1, nombre:"Creatina", marca:"RC", precio: 250, stock: 3, descripcion: `
            sabor: sin sabor Contenido: 1000 gr Porciones:200 PREGUNTA POR LOS SABORES DISPONIBLES ESTE PRODUCTO NO ES UN MEDICAMENTO EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA
        `},
        {id:2, nombre:"Proteina", marca:"Whey", precio: 1500, stock: 5, descripcion: `
            Proteína aislada de suero de leche optimum nutrition - gold standard whey sabor vainilla. Bote de 2 lb. Este producto fue creado con atención al detalle, para que el usuario pueda sentir la calidad óptima desde el primer segundo. Un equilibrio óptimo entre las necesidades del cliente y un merecido mimo.
        `}
    ]

    const promesaDetails = new Promise((res, rej) => {
        setTimeout(() => {
          res(detailsArray.find((item) => item.id === parseInt(idProducto)))
        }, 2000)
    })

    promesaDetails.then((res) => {
      setLoading(false)
      setDetails(res)
    }).catch(error=>console.log("Hubo un problema con la promesa: " + error))
    
  }, [idProducto])
  return (
    <>
        {loading ? <Spinner/> : <ItemDetail details={details}/>}
    </>
  )
}

export default ItemDetailContainer