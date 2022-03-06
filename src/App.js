import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { LoginProvider } from './context/LoginContext';
import CartPage from './pages/CartPage';
import DbPage from './pages/DbPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <UserProvider>
          <LoginProvider>
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
                    <Route path="LoginPage" element={<LoginPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </LoginProvider>
        </UserProvider>
      </CartProvider> 
    </ProductsProvider>
  );
}

export default App;
