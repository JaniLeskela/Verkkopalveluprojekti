import { BsFillBagHeartFill } from "react-icons/bs"
import { AiFillStar  } from "react-icons/ai"
import karhu from "../assets/karhu.webp"


function Card({img, nimi, arvostelu , kategoria, alkoholi,hinta, koko, star}) {
    return (

      <section className="card ">
      <img src= {img}
      className="card-img"
       />
       <div className="card-details">
        <h3> {nimi}</h3>

        <section className="card-reviews ">
          {star} {star} {star} {star} {star}
        <span className="total-reviews"> {arvostelu} </span>
        </section>

        <section className="card-price">
          <div className="price">
            {hinta}

        <BsFillBagHeartFill className="bag-icon"/>
          </div>
        </section>
        
       </div>
    </section>
    )
  } export default Card