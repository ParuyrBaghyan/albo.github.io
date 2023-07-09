import "./App.css";
import Header from "./components/Header";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import { Context } from "./components/Context";
import { useState } from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import Privicy from './pages/Privicy';
import Cart from "./components/Cart";
import Alcohol from "./Alcohol";
import Login from "./components/Login";
import Order from "./components/Order";
import Favorite from "./components/Favorite";

function App() {
  const [cart, setCart] = useState([]);
  const [activecat, setActiveCat] = useState('');
  const [total, setTotal] = useState(0);
  const removeCart = id => setCart([...cart.filter((item) => item.id !== id)]);
  const [money, setMoney] = useState(0);
  const [favorite, setFavorite] = useState([]);
  const [cash,setCash] =  useState(Math.round(Math.random() * 100000))
  const addCart = (item) => {
    if (!cart.includes(item)) {
      setTotal(total + item.data * item.quanity);
      setCart([...cart, item]);
    }
  };

  const addFavorite = item => !favorite.includes(item) ? setFavorite([...favorite, item]) : '';

  const removeFavorite = id => setFavorite([...favorite.filter(item => item.id !== id)]);


  const values = {
    addCart,
    removeCart,
    cart,
    setCart,
    activecat,
    setActiveCat,
    total,
    setTotal,
    money,
    setMoney,
    favorite, setFavorite,
    addFavorite, removeFavorite,
    cash,setCash
  }
  return (
    <Context.Provider value={values}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Խանութ" element={<Store />}></Route>
          <Route path="/Մեր մասին" element={<About />}></Route>
          <Route path="/Կապ" element={<Contact />}></Route>
          <Route path="/Զամբյուղ" element={<Cart />}></Route>
          <Route path={`/${activecat}`} element={<Alcohol />}></Route>
          <Route path='/Մուտք / Գրանցում' element={<Login />}></Route>
          <Route path='/Վճարման Համակարգ' element={<Order />}></Route>
          <Route path="/Մրգեր և բանջարեղեն" element={<Store />}></Route>
          <Route path="/Խմիչքներ" element={<Store />}></Route>
          <Route path="/Կաթնամթերք" element={<Store />}></Route>
          <Route path="/Նպարեղեն" element={<Store />}></Route>
          <Route path="/Գաղտնիության քաղաքականություն" element={<Privicy />}></Route>
          <Route path="/Նախընտրած ապրանքներ" element={<Favorite />}></Route>
        </Routes>
        <a href="#header"><BsFillArrowUpCircleFill className="up" /></a>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
