import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import DbPage from './pages/DbPage';


function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='myApp'>
                <Route index element={<HomePage />} />
                <Route path="products">
                  <Route index element={<ProductsPage />} />
                  <Route path=":id" element={<ProductDetailPage />} />
                </Route>
                <Route path="cartPage" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="dbPage" element={<DbPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider> 
    </ProductsProvider>
  );
}

export default App;
