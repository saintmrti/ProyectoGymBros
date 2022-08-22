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
        <div className="flex flex-grow justify-center">
            {showBtn ? <div>
              <p className="text-xl mt-10">Lo sentimos ): <br /> No tienes nada en tu carrito</p>
              <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-3 hover:bg-yellow-500"><Link to={"/"}>Ir a comprar</Link></button>
            </div> : <SaveList elements={save}/>}
        </div>
    </>
  )
}

export default Cart