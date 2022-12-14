
import ItemListContainer from './components/ItemList/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Test from './components/Test';
import CartContext from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import Nosotros from './components/Nosotros';

function App() {

  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
            <Route path='/producto/:idProducto' element={<ItemDetailContainer/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/test' element={<Test/>} />
            <Route path='*' element={<p>Error 404 Not Found</p>} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  )
}

export default App
