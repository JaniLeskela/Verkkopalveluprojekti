import kuva from '../assets/101648.webp'
import kalja from '../assets/beer-banner.jpg'
import './Tuote.css'
import TuoteMap from './tuotemap/tuotemap'
const tuote = {
    nimi: 'Leijona Viina',
    hinta: 24.49,
    kategoria: 'Viinat',
    kuva: '../101648.webp'
}
const Banner = () => {
    return (
        <img src={kalja} id='kalja' alt='kalja'/>
    )
}
export const Button = (props) => {
    return (
        <button className='tuotepainike' onClick={props.onClick} style={{width: props.width}}>
            {props.text}
        </button>
    )
}
const Tuote = () => (
    <div className='tuote-main'>
        <h2 className='otsikko'>{tuote.nimi}</h2>
        <div className='keski'>
            <img src={kuva} alt='kuva'/>
            <div className='tiedot'> 
                <div className='hinnasto'>
                    <h2>{tuote.hinta} €</h2>
                    <h2>{tuote.kategoria}</h2>
                </div>
                <p className='desc'>Tietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinasta</p>
            </div>
        </div>
        <Button text='Lisää ostoskoriin' width='70%'/>
    </div>
)
const View = () => {
    return (
        <div className='view'>
            <Banner />
            
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
            <Tuote />
        </div>
    )
}

export default View