import { useState } from 'react'


import './App.css';
import Navigation from './nav/nav';
import Card from './components/card';
import Products from "./products/products"
import Sidebar from './sidebar/sidebar';
import Suositus from "./suositus/suositus"


//Database

import products from './db/data'
function App() {

  const [selectedCategory,setSelectedCategory] = useState(null)

//-----------Input Filter-----------

  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) =>
   product.nimi.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  //-----------Radio Filter-----------

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //-----------Buttons Filter-----------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected, query ) {
    let filteredProducts = products

    //Filtering Input Items

    if(query) {
      filteredProducts = filteredItems
    }

    //Selected Filter

    if(selected) {
      filteredProducts = filteredProducts.filter(({kategoria, alkoholi,
         hinta, nimi })  => kategoria === selected ||
          alkoholi === selected ||
         hinta === selected ||
          nimi === selected );
    }

    return filteredProducts.map(({img, nimi, kategoria, alkoholi,hinta, koko, star, arvostelu}) => (
      <Card key={Math.random()}
      img = {img}
      nimi = {nimi}
      kategoria = {kategoria}
      hinta = {hinta}
      koko = {koko}
      alkoholi ={alkoholi}
      star = {star}
      arvostelu={arvostelu}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query)
  return (
    <>
    
      <Sidebar handleChange={ handleChange }/>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Suositus handleChange={handleClick} />
      <Products result={result} />

    </>
  );
}

export default App;
