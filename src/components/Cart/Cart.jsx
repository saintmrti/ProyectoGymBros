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
    save.length > 0 && setShowBtn(true) 
  }, [])
  
  return (
    <>
        <div className="flex flex-grow justify-center">
            {showBtn ? <SaveList elements={save}/> : <button className="bg-yellow-400 py-2 px-3 rounded-md text-white font-bold mt-5 hover:bg-yellow-500"><Link to={"/"}>Ir a comprar</Link></button>}
        </div>
    </>
  )
}

export default Cart