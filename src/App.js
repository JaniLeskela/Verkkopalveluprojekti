import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import View from './components/View';
import Tuotesivu from './components/Tuotesivu';
import Ostoskori from './components/Ostoskori';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<View />}/>
        <Route path='Tuotesivu' element={<Tuotesivu />}/>
        <Route path='Ostoskori' element={<Ostoskori />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
