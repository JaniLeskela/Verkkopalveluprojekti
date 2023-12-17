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
        <button className='tuotepainike' onClick={props.onClick} >
            {props.text}
        </button>
    )
}
const Tuote = (props) => {
    console.log('PRod: ', props.prod)
return (
    <div className='tuote-main'>
        <h2 className='otsikko'>{props.prod.productName}</h2>
        <div className='keski'>
            <img src={kuva} alt='kuva'/>
            <div className='tiedot'> 
                <div className='hinnasto'>
                    <h2>{props.prod.price} €</h2>
                    <h2>{props.prod.category}</h2>
                </div>
                <p className='desc'>Tietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinastaTietoa tästä viinasta</p>
            </div>
        </div>
        <Button text='Lisää ostoskoriin' />
    </div>
)
}
const View = (props) => {
    console.log('Prods: ', props.products)
    return (
        <div className='view'>
            <Banner />
            {props.products.map(prod =>
                <Tuote prod={prod}/>
                )}

        </div>
    )
}

export default View