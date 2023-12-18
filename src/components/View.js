
import kalja from '../assets/beer-banner.jpg'
import './Tuote.css'
import Tuote1 from '../components/tuote/tuote1';
import Suositut from '../components/suositut/suositut';
import tuotteet from '../components/data/tuotedb';
import Tuotesivu1 from '../components/tuotesivu1';

const Banner = () => {
    return (
        <img src={kalja} id='kalja' alt='kalja' className='kalja'/>
    )
}
export const Button = (props) => {
    return (
        <button className='tuotepainike' onClick={props.onClick} >
            {props.text}
        </button>
    )
}
function Tuotteet() {

  
 
    const tuote = tuotteet;
    function Products(tuote) {
    
  
    return tuote.map(
      ({kuva, nimi, arvostelut, kategoria, hinta, koko, star}) => (
        <Tuote1
        kuva={kuva}
        nimi = {nimi}
        star={star}
        arvostelut={arvostelut}
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
      <Banner/>
        <Suositut/>
        <Tuotesivu1 result={result}/>
        
        
        
        </>
      );
  }
  
  export default Tuotteet;