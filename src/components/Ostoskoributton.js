import './Ostoskoributton.css'
import ostoskärry from '../assets/shoppingcartwht.svg'
import Button from 'react-bootstrap/Button'
import useNavigate from 'react';
import { Link } from 'react-router-dom';




const Ostoskoributton = () => {
    return (
        <div className="ostoskori">
            <Link to={'/Ostoskori'}>
                <Button className="ostoskoributton"><img src={ostoskärry} id='ostoskärry' alt='ostoskärry'/></Button>
            </Link>    

</div>

)


}

export default Ostoskoributton