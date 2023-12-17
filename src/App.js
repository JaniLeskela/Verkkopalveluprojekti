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
  const [token, setToken] = useState(null)
  useEffect(() => {
    const fetchUser = () => {
      const user = window.localStorage.getItem('token')
      if (user) {
        setToken(JSON.parse(user))
      }
    }
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
    fetchUser();
  }, [])
  const setUserLogin = (token) => {
    setToken(token)
  }
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<View products={products.slice(0, 8)} />}/>
        <Route path='temp2' element={<AddProducts />} />
        <Route path='temp3' element={<AddCategories />} />
        <Route path='Tuotesivu' element={<Tuotesivu />}/>
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login setToken={setUserLogin}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
