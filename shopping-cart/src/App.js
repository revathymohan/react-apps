// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
