import { Link } from "react-router-dom"
const styles = {
    textDecoration: 'none',
    color: 'white',
    fontSize: 16,
    listStyle: 'none',
}
const LinkItem = (props) => {
    return (
        <Link to={props.to} style={{...styles, ...props.style}}>{props.text}</Link>
    )
}

export default LinkItem