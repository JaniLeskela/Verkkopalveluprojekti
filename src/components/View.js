
import kalja from '../assets/beer-banner.jpg'

import Tuote from '../components/tuote/tuote';
import Suositut from '../components/suositut/suositut';
//import tuotteet from '../components/data/tuotedb';
import Tuotesivu from '../components/tuotesivu';



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
function Tuotteet(props) {
 
    const tuote = props.products;
    function Products(tuote) {
    
  
    return tuote.map(
      ({image, productName, arvostelut, category, price, koko, star}) => (
        <Tuote
        kuva={image}
        nimi = {productName}
        star={star}
        arvostelut={arvostelut}
        hinta={price}
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
        <Tuotesivu result={result}/>
        
        
        
        </>
      );
  }
  
  export default Tuotteet;