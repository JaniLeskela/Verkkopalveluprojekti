import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import View from './components/View';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<View />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
