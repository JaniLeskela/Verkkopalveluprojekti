import LinkItem from '../LinkItems'
import facebook from '../../assets/sm-icons-facebook-logo.png'
import youtube from '../../assets/youtubelogo.png'
import twitter from '../../assets/twitterlogo.png'
import instagram from '../../assets/Instagramlogo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div id='logos' className='items'>
                <div></div>
                <img src={facebook} alt='facebook' className='footer-image'/>
                <img src={youtube} alt='youtube'  className='footer-image'/>
                <img src={twitter} alt='twitter' className='footer-image'/>
                <img src={instagram} alt='instagram' className='footer-image'/>
            </div>
            <div className='items-text'>
                <div>
                    <LinkItem to={'/temp1'} text='Facebook'/>
                    </div>

                    <div className='yttext'>
                    <LinkItem to={'/temp1'} text='Youtube'/>
                    </div>

                    <div className='twtext'>
                    <LinkItem to={'/temp1'} text='Twitter'/>
                    </div>

                    <div className='igtext'>
                    <LinkItem to={'/temp1'} text='Instagram'/>
                    </div>
            </div>
        </div>
    )
}

export default Footer