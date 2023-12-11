import "./oitem.css"
import kuva from "../../assets/101648.webp"

function Oitem () {
    return (
        <>
        <div className="itemkortti">
            <div className="itemkorttileft">
                <span className="itemkuva">
                    <img src={kuva} />
                </span>
            </div>
            <div>    
                <div className="itemotsikko">
                    <h3>Otsikko</h3>
                    <h5>Kategoria</h5>
                </div>
            </div>
            <div className="laskuri">
                <div className="laskuribtn"> + </div>
                <div className="count">0</div>
                <div className="laskuribtn">-</div>
            </div>
            <div className="itemkorttiright">
                <div className="itemhinta">
                    <p>29,90€</p>
                </div> 
            </div>            
            

        </div>
        </>
    )
}
 
export default Oitem