import { createContext, useState } from "react"
export const myContext = createContext()
const CartContext = ({children}) => {
  const [save, setSave] = useState([])

  return (
    <myContext.Provider value={{save, setSave}}>
        {children}
    </myContext.Provider>
  )
}

export default CartContext