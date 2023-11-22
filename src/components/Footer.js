import LinkItem from './LinkItems'
import facebook from '../sm-icons-facebook-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div id='logos' className='items'>
                <img src={facebook} alt='facebook'/>
                <img src={facebook} alt='facebook'/>
                <img src={facebook} alt='facebook'/>
                <img src={facebook} alt='facebook'/>
            </div>
            <div className='items'>
                    <LinkItem to={'/temp1'} text='Link'/>
                    <LinkItem to={'/temp1'} text='Link'/>
                    <LinkItem to={'/temp1'} text='Link'/>
                    <LinkItem to={'/temp1'} text='Link'/>
            </div>
        </div>
    )
}

export default Footer