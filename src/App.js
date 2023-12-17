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
import axios from 'axios'
function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/products').
    then(res => setProducts(res.data.slice(0, 8))).
    catch(err => console.log('ERRR: ', err))
  }, [])
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<View products={products} />}/>
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
