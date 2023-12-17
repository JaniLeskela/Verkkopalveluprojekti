import "./login.css"
import axios from 'axios'
import { jwtToken } from "./../signals/TokenSignal"
import { useState } from 'react' 


export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {username, pw: password}).
    then(res => {
      props.setToken(res.data.jwtToken)
      window.localStorage.setItem('token', JSON.stringify(res.data.jwtToken))
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
            required/>

        <label  htmlFor="password"className="login-font">Salasana</label>
            <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            id="password"
            autoComplete="off"
            required/> 

            <button className="login-button" type='submit'>Kirjaudu sisään</button> 
        


    </form>

    </section>
  )
}
