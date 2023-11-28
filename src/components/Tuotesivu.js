import './Tuotesivu.css'
import kuva from '../assets/101648.webp'

const tuote = {
    nimi: 'Leijona Viina',
    hinta: 24.49,
    kategoria: 'Viinat',
    kuva: '../101648.webp'
}

const Button = (props) => {
    return (
        <button className='Lisää' onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const Esittely = () => (
        <div className='Esittely'>
            <div className='Esittely-vasen'>
                <h2 className='otsikko'>{tuote.nimi}</h2>
                <p>{tuote.kategoria}</p>
                <p>TESTITESTITESTITESTITESTI</p>
                <h2>{tuote.hinta} €</h2>
                <Button text='Lisää ostoskoriin'/>
            </div>
            <div className='Esittely-oikea'>
                
                <img src={kuva} alt="Kossu"/><br/>
                
            </div>
            <div>
            
            </div>
        </div>
    )

const Tuotesivu = () => {
    return (
        <div className='tuotesivu'>
            <Esittely />
        </div>
    )
}
export default Tuotesivu;