import Card from "react-bootstrap"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/ostoskori.css'
import kuva from '../assets/olut.jpg'

const tuote = {
    nimi: 'Leijona Viina',
    hinta: 24.49,
    kategoria: 'Viinat',
    kuva: '../101648.webp'
}

const Tuotekortti = (props) => {
    return (
    <div className="tuotekortti">
        <div className="tuotekortti-vasen">    
        <h3>{tuote.nimi}</h3>
        <img src={kuva}></img>
        </div>
        <div className="tuotekortti-oikea">
        <p>{tuote.kategoria}</p>
        </div>
        <div>
        <CheckoutButton />
        </div>
    </div>
    
    )
}

const CheckoutButton = () => {
    return (
        <Button variant="primary">Maksamaan</Button>
    )
}

const Ostoskori = () => {
    return (
        <div className="ostoskori">
            <Tuotekortti />
        </div>
    )

}

export default Ostoskori