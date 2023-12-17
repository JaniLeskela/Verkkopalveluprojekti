import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Footer from './components/Footer';
import View from './components/View';
import Tuotesivu from './components/Tuotesivu';
import AddProducts from './components/AddProducts';
import AddCategories from './components/AddCategories';
import Register from './components/register/register'
import Login from './components/login/login'
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<View />}/>
        <Route path='temp2' element={<AddProducts />} />
        <Route path='temp3' element={<AddCategories />} />
        <Route path='Tuotesivu' element={<Tuotesivu />}/>
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
