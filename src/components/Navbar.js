import './Navbar.css'
import LinkItem from './LinkItems'
import  logo from '../assets/unnamed.png'
import Ostoskoributton from './Ostoskoributton'
const styles = {
    login: {
        backgroundColor: '#008170',
        padding: '6px 12px',
        borderRadius: 200,
        textAlign: 'center',
    },
}
const Navbar = () => {
    return (
        <div id='navbar'>
            <div className='right'>
                <img id='logo' src={logo} alt='logo'/>
                <input placeholder='Search' id='search'/>
                <LinkItem to={'/login'} text='Login' id='login' style={styles.login}/>
            </div>
            <div className='links'>
                <LinkItem to={'/Tuotesivu'} text='Eka'/>
                <LinkItem to={'/temp2'} text='Toka'/>
                <LinkItem to={'/temp3'} text='Kolmas'/>
                <LinkItem to={'/temp4'} text='Neljäs'/>
            </div>
            <div>
                <Ostoskoributton />
            </div>
        </div>
    )
}

export default Navbar