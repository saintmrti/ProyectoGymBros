import { createContext, useState } from "react"
export const myContext = createContext()
const CartContext = ({children}) => {
  const [save, setSave] = useState([])

  const addItem = (item) => {
    const saveList = save.filter(element => element.id !== item.id)
    saveList.push(item)
    setSave(saveList)
  }
  const isSave = (id) => save.find(element => element.id === id) ? true : false;
  const removeItem = (id) => setSave(save.filter(element => element.id !== id));
  const clear = () => setSave([]);

  return (
    <myContext.Provider value={{save, addItem, setSave, isSave, removeItem, clear}}>
        {children}
    </myContext.Provider>
  )
}

export default CartContext