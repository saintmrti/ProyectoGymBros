
import ItemListContainer from './components/ItemList/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Test from './components/Test';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
        <Route path='/producto/:idProducto' element={<ItemDetailContainer/>} />
        <Route path='*' element={<p>Error 404 Not Found</p>} />
        <Route path='/test' element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
