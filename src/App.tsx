import React, { useEffect } from 'react';
import './main.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/mainpage/Main';
import ProductDetail from './components/productDetail/ProductDetail';
import Catalog from './components/catalog/Catalog';
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';
import Cart from './components/cart/Cart';
import Favourites from './components/favourites/Favourites';
import Order from './components/order/Order';
import Studio from './components/studio/Studio';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import DeliveryAndPayment from './components/deliveryandpayment/DeliveryAndPayment';
import Guarantees from './components/guarantees/Guarantees';
import NotFound from './components/notfound/NotFound';
import { FavouritesType } from './components/favourites/favouritesTypes';
import { CartItemType } from './components/cart/cartTypes';
import { addItemFavourites } from './features/favouriteSlice';
import { addItemCart } from './features/cartSlice';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {

  const dispatch = useDispatch()
  const localFavourites: FavouritesType[] = JSON.parse(String(localStorage.getItem('favourites')))
  const localCart: CartItemType[] = JSON.parse(String(localStorage.getItem('cart')))

  useEffect(() => {
    if (localFavourites) {
      localFavourites.forEach(item => {
        dispatch(addItemFavourites(item))
      })
    }
    if (localCart) {
      localCart.forEach(item => {
        dispatch(addItemCart(item))
      })
    }
  }, [])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="catalog/:category" element={<Catalog />} />
        <Route path="catalog/:category/:productId" element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
        <Route path='favourites' element={<Favourites />} />
        <Route path='order' element={<Order />} />
        <Route path='studio' element={<Studio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='deliveryandpayment' element={<DeliveryAndPayment />} />
        <Route path='guarantees' element={<Guarantees />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
