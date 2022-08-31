import { useContext } from "react";
import { useState } from "react";
import { myContext } from "./Cart/CartContext";
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Test = () => {

  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const {save} = useContext(myContext)
  const [newUser, setNewUser] = useState('')
  const [mostrar, setMostrar] = useState(true)

  function nuevoUsuario() {
    const usuario = { user: {name, lastname, email}, save}
    const db = getFirestore()
    const refCollection = collection(db, 'usuarios')

    addDoc(refCollection, usuario).then((res) => {
      setMostrar(false)
      setNewUser(res.id)
    })
  }

  
  return (
    <>
      <div className="grid justify-center items-center" style={{height: 500}}>
        {mostrar ?
        <div>
          <h1 className="mt-9 ml-20 text-xl">¡REGISTRATE GRATIS!</h1>
          <div style={{width:400}}>
            <div className="flex mt-3 ml-5">
              <div>Nombre:</div>
              <input className="ml-2 border border-black" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex mt-3 ml-5">
              <div>Apellido:</div>
              <input className="ml-2 border border-black" type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="flex mt-3 ml-5">
              <div>Correo:</div>
              <input className="ml-4 border border-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="text-center">
              <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold hover:bg-yellow-500 mt-3" onClick={nuevoUsuario}>Unirse</button>
            </div>
          </div>
        </div> :
        <p className="text-xl">Bienvendio {newUser}</p>}
      </div>
    </>
  )
}

export default Test