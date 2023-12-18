import "./Register.css"
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import LinkItem from "../LinkItems";

export default function Register() {
  const navigate = useNavigate()
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {fname, lname, username, pw: password}).
    then(() => navigate('/login')/*jwtToken.value = res.data.jwtToken*/).
    catch(err => console.log('Register error: ', err))
  }
  return (
    
    <section className="register-container">
    <h3 className="register-h3">Register</h3>
    <div className="register-underline"></div>
  <form className="register-form" onSubmit={register}>

   <label htmlFor="etunimi" className="register-font"> Etunimi </label>
   <input 
   value={fname}
   onChange={({ target }) => setFName(target.value)}
   type="text"
   id="etunimi"
   placeholder="Mikko"
   autoComplete="off"
   required
   />
  
   
   <label htmlFor="sukunimi" className="register-font"> Sukunimi </label>
   <input
    value={lname}
    onChange={({ target }) => setLName(target.value)} 
   type="text"
   id="sukunimi"
   placeholder="Mallikas"
   autoComplete="off"
   required
   />

   <label htmlFor="username" className="register-font">Käyttäjänimi</label>
   <input
   value={username}
   onChange={({ target }) => setUsername(target.value)}
   type="text"
   id="username"
   placeholder="MikkoMallikas12"
   autoComplete="off"
   required
   />

   <label htmlFor="password" className="register-font"> Salasana </label>
   <input
    value={password}
    onChange={({ target }) => setPassword(target.value)} 
   type="password"
   id="password"
   placeholder="***************"
   autoComplete="off"
   required
   />
   <button className="register-button" type='submit'> Rekisteröidy</button>
   <div className="register-painike">
            <LinkItem to={'/login'} text='Login'/>
            </div>
   
  </form>
</section>

  )
}
