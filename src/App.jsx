
import ItemListContainer from './components/ItemList/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/producto/:idProducto' element={<ItemDetailContainer/>} />
        <Route path='*' element={<p>Error 404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
