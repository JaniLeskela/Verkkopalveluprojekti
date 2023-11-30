import './Ostoskoributton.css'
import ostoskärry from '../assets/shoppingcartwht.svg'
import Button from 'react-bootstrap/Button'


const Ostoskoributton = () => {
return (
<div className="ostoskori">
<Button className="ostoskoributton"><img src={ostoskärry} id='ostoskärry' alt='ostoskärry'/></Button>

</div>

)


}

export default Ostoskoributton