import './Navbar.css'
import LinkItem from './LinkItems'
import  logo from '../assets/unnamed.png'
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
                <LinkItem to={'/temp2'} text='Lisää tuote'/>
                <LinkItem to={'/temp3'} text='Lisää Kategoria'/>
                <LinkItem to={'/temp4'} text='Neljäs'/>
            </div>
        </div>
    )
}

export default Navbar