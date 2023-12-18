import './Navbar.css'
import LinkItem from '../LinkItems'
import  logo from '../../assets/unnamed.png'
const styles = {
    login: {
        backgroundColor: '#008170',
        padding: '6px 12px',
        borderRadius: 200,
        textAlign: 'center',
    },
}
const Navbar = (props) => {
    return (
        <div id='navbar'>
            <div className='right'>
                <img id='logo' src={logo} alt='logo'/>
                <input placeholder='Search' id='search'/>
                {!props.user && <LinkItem to={'/login'} text='Login' style={styles.login}/>}
                {props.user && <p style={styles.login} onClick={props.logout}>Logout</p>}
            </div>
            <div className='links'>
                <LinkItem to={'/tuotteet'} text='Products'/>
                <LinkItem to={'/temp2'} text='Add Product'/>
                <LinkItem to={'/temp3'} text='Add Category'/>
                <LinkItem to={'/temp4'} text='Neljäs'/>
            </div>
        </div>
    )
}

export default Navbar