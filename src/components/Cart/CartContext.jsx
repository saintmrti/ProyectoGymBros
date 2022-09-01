import { createContext, useState } from "react"
export const myContext = createContext()
const CartContext = ({children}) => {
  const [save, setSave] = useState([])
  const [count, setCount] = useState(0)

  const addItem = (item) => {
    const saveList = save.filter(element => element.id !== item.id)
    !save.some(element => element.id == item.id) && setCount(count + 1)
    saveList.push(item)
    setSave(saveList)
  }
  const isSave = (id) => save.find(element => element.id === id) ? true : false;
  const removeItem = (id) => {
    setSave(save.filter(element => element.id !== id))
    count > 0 ? setCount(count - 1) : setCount(0)
  };
  const clear = () => setSave([]);

  return (
    <myContext.Provider value={{save, setSave, count, setCount, addItem, isSave, removeItem, clear}}>
        {children}
    </myContext.Provider>
  )
}

export default CartContext