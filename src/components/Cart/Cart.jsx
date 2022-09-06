import {Link} from 'react-router-dom';
import { useState } from "react";
import SaveList from "./SaveList";
import { useEffect } from 'react';
import { useContext } from 'react';
import { myContext } from './CartContext';

const Cart = () => {
  const [showBtn, setShowBtn] = useState(false)
  const {save, setSave} = useContext(myContext)
  
  useEffect(()=>{
    save.length > 0 ? setShowBtn(false) : setShowBtn(true)
  }, [save])

  useEffect(()=>{
    localStorage.getItem('bookmark') && setSave(JSON.parse(localStorage.getItem('bookmark')))
    save.length > 0 ? setShowBtn(false) : setShowBtn(true)
  }, [])
  
  return (
    <>
        <div className="grid gap-4 my-10 justify-center">
            {showBtn ? <div className='text-center'>
              <p className="text-xl mb-3">Ups! Aún no tienes nada guardado</p>
              <button><Link className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-3 hover:bg-yellow-500" to={"/"}>Volver a inicio</Link></button>
            </div> : <SaveList elements={save}/>}
        </div>
    </>
  )
}

export default Cart