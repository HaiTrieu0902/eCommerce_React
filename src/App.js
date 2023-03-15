import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import OurStore from './Pages/OurStore/OurStore';
import Blog from './Pages/Blog/Blog';
import CompareProduct from './Pages/CompareProduct/CompareProduct';
import Wishlist from './Pages/WishList/Wishlist';
import Login from './Pages/Login/Login';
import ForgotPass from './Pages/Login/ForgotPass';
import SignUp from './Pages/Login/SignUp';
import SingleBlog from './Pages/Blog/SingleBlog';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import CheckOut from './Pages/Cart/CheckOut';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="about" element={<About />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                        <Route path="store" element={<OurStore />}></Route>
                        <Route path="blogs" element={<Blog />}></Route>
                        <Route path="blog/:id" element={<SingleBlog />}></Route>
                        <Route path="compare-Product" element={<CompareProduct />}></Route>
                        <Route path="wishlist" element={<Wishlist />}></Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="forgot-password" element={<ForgotPass />}></Route>
                        <Route path="sign-up" element={<SignUp />}></Route>

                        <Route path="product/:id" element={<SingleProduct />}></Route>
                        <Route path="cart" element={<Cart />}></Route>
                        <Route path="checkout" element={<CheckOut />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
