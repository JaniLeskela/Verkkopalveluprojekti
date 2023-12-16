import "./login.css"

export default function Login() {
  return (
    
    <section className="login-container"> 
        <h3 className="login-h3">Kirjaudu sisään</h3>
    

    <form className="login-form">
        <label htmlFor="username" className="login-font"> Käyttäjänimi</label>
            <input
            type="text"
            id="username"
            autoComplete="off"
            required/>

        <label  htmlFor="password"className="login-font"> Salasana</label>
            <input
            type="password"
            id="password"
            autoComplete="off"
            required/> 

            <button className="login-button">Kirjaudu sisään</button> 
        


    </form>

    </section>
  )
}
