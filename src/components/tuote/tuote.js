import "./tuote.css"


import {FaCartPlus} from "react-icons/fa" //npm i react-icons



/*<section className="tuote">
      <img src="https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/197456/koskenkorva-minttu-muovipullo.jpg"
      alt="Minttu Kossu" className="tuote-kuva"/>
      <div className="tuote-tiedot">
      <h3 className="tuote-nimi">Minttu Koskenkorva</h3>
      <section className="tuote-arvostelut">
      <AiFillStar className="star"/>
      <AiFillStar className="star"/>
      <AiFillStar className="star"/>
      <AiFillStar className="star"/>
      <span className="kaikki-arvostelut"></span>
      </section>

      <section className="tuote-hinta">
      <div className="hinta">
        <p>18.90€</p>
      </div>
        
        <div className="ostoskoriin">
      <FaCartPlus className="ostoskori-icon"/>
    
      </div>
      </section>
    
    
    </div>
      </section>*/
const Tuote = ({kuva, nimi, star, hinta,arvostelut, koko }) => {

    
  return (
<>



  <section className="tuote">


  <div className="kuva-container">
    
        <img src={kuva} alt={nimi}
         className="tuote-kuva"/>

</div>

    <div className="tuote-tiedot">
      

      <div className="tuote-keskitys">
        <h3 className="tuote-nimi"> {nimi}</h3>

        </div>
      
        <section className="tuote-arvostelut">
          {star} {star} {star} {star}
          <span className="kaikki-arvostelut"> {arvostelut}</span>
        </section>

        <section className="tuote-hinta">
          <div>
            <span className="hinta">{hinta} € </span>
            
            <section className="tuote-koko"> {koko}</section>
            </div>

          <div className="ostoskoriin">
      <FaCartPlus className="ostoskori-icon"/>

          </div>
      </section>

    </div>
  </section>

 
  
</>
  );
};

  export default Tuote;
