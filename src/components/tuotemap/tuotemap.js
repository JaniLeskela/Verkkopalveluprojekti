import tuotteet from "../data/tuotedb"
import Tuotesivu1 from "../tuotesivu1";
import Suositut from "../suositut/suositut"
import Tuote1 from "../tuote/tuote1";




function TuoteMap(props) {

  
 
    const tuote = tuotteet;
    function Products(tuote) {
    
  
    return tuote.map(
      ({kuva, nimi, arvostelut, kategoria, hinta, koko, star}) => (
        <Tuote1
        kuva={kuva}
        nimi = {nimi}
        hinta={hinta}
        koko = {koko}
        />
      )
    )
  }
  /*<Tuotesivu result={result}/>*/
   const result = Products(tuote)
   
   
    return (
      <>
       <Suositut/>
        <Tuotesivu1 result={result}/>
        
        
        
        </>
      );
  }
  
  export default TuoteMap;