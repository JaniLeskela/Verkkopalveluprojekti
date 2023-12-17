import "./suositut.css"

export default function Suositut() {
  return (
   <>
   <div>
    <h2 className="suositut-otsikko">Suositut tuotteet</h2>
    <div className="suositut-flex">
        <button className="btns">Kaikki</button>
        <button className="btns">Vodkat ja Viinat</button>
        <button className="btns">Valkoviinit</button>
        <button className="btns">Oluet</button>
    </div>
   </div>
   
   </>
  )
}
