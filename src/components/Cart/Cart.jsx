import {Link} from 'react-router-dom';
import { useState } from "react";
import SaveList from "./SaveList";
import { useEffect } from 'react';
import { useContext } from 'react';
import { myContext } from './CartContext';

const Cart = () => {
  const [showBtn, setShowBtn] = useState(false)
  const {save} = useContext(myContext)
  
  useEffect(()=>{
    save.length > 0 ? setShowBtn(false) : setShowBtn(true)
  }, [save])
  
  return (
    <>
        <div className="grid gap-4 my-10 justify-center">
            {showBtn ? <div>
              <p className="text-xl">Ups! Aún no tienes nada guardado</p>
              <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-3 hover:bg-yellow-500"><Link to={"/"}>Volver a inicio</Link></button>
            </div> : <SaveList elements={save}/>}
        </div>
    </>
  )
}

export default Cart