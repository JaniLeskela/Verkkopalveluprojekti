import "./suositut.css"
import Button from "../button/button"
const Suositut = ({handleClick}) => {
  return (

   <>
   <div>
    <h2 className="suositut-otsikko">Suositut tuotteet</h2>
    <div className="suositut-flex">
       <Button onClickHandler={handleClick} value="" title="Kaikki Tuotteet" />
       <Button onClickHandler={handleClick} value="Oluet" title="Oluet" />
       <Button onClickHandler={handleClick} value="Liköörit ja Katkerot" title="Liköörit ja Katkerot" />
       <Button onClickHandler={handleClick} value="Vodkat ja Viinat" title="Vodkat ja Viinat" />
       <Button onClickHandler={handleClick} value="Viinit" title="Viinit" />
    </div>
   </div>
   </>
  )
}
export default Suositut;
