
import Tuotesivu from "./tuotesivu";
import Suositut from "./suositut/suositut"
import Tuote from "./tuote/tuote";
import Sidebar from "./sidebar/sidebar";
import { useState } from "react";

        //------Database-----------
import tuotteet from "./data/tuotedb"


function TuoteMap() {


  const [selectedCategory, setSelectedCategory] = useState(null);

  //------------ Input Filter -----------------

  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = tuotteet.filter((tuote) =>
  tuote.nimi.toLowerCase().indexOf(query.toLowerCase()) !== 1);

  //------- Radio Filter ------------

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //------------ Buttons Filter ------------

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(tuotteet, selected, query) {
    let filteredTuotteet = tuotteet

    //----- Filtering Input Items -------

    if(query) {
      filteredTuotteet = filteredItems
    }

    if(selected) {
     filteredTuotteet = filteredTuotteet.filter(({kategoria,nimi}) =>
     kategoria === selected ||
     nimi === selected
     );
    }

    return filteredTuotteet.map(
      ({kuva, nimi, arvostelut, kategoria, hinta, koko, star}) => (
        <Tuote
        kuva={kuva}
        nimi = {nimi}
        hinta={hinta}
        koko = {koko}
        star = {star}
        arvostelut={arvostelut}
        kategoria= {kategoria}
        />
      )
    )
  }

  const result = filteredData(tuotteet,selectedCategory, query)

  /*<Tuotesivu result={result}/>*/
   
    return (
      <>
      <Sidebar handleChange={handleChange}/>
       <Suositut handleClick={handleClick}/>
        <Tuotesivu result={result}/>
      </>
      );
  }
  export default TuoteMap;