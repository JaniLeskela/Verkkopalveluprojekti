import "./login.css"
import axios from 'axios'
import { useState } from 'react' 
import { useNavigate } from "react-router-dom";
import LinkItem from "../LinkItems";

export default function Login(props) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {username, pw: password}).
    then(res => {
      props.setToken(res.data.jwtToken)
      window.localStorage.setItem('token', JSON.stringify(res.data.jwtToken))
      navigate('/')
    }).
    catch(err => console.log(err))
  }
  return (
    
  <section className="login-container"> 
        <h3 className="login-h3">Kirjaudu sisään</h3>
    
    <form className="login-form" onSubmit={login}>
        <label htmlFor="username" className="login-font"> Käyttäjänimi</label>
            <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Käyttäjänimi"
            required/>

        <label  htmlFor="password"className="login-font">Salasana</label>
            <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            id="password"
            autoComplete="off"
            placeholder="**************"
            required/> 

            <button className="login-button" type='submit'>Kirjaudu sisään</button> 

            <div className="register-painike">
            <LinkItem to={'/register'} text='Rekisteröidy'/>
            </div>
    </form>
  </section>
  )
}
