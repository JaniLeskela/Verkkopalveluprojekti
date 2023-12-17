import "./Register.css"


export default function Register() {
  return (
    
    <section className="register-container">
    <h3 className="register-h3">Register</h3>
    <div className="register-underline"></div>
  <form className="register-form">

   <label htmlFor="etunimi" className="register-font"> Etunimi </label>
   <input 
   type="text"
   id="etunimi"
   placeholder="Mikko"
   autoComplete="off"
   required
   />
  
   
   <label htmlFor="sukunimi" className="register-font"> Sukunimi </label>
   <input 
   type="text"
   id="sukunimi"
   placeholder="Mallikas"
   autoComplete="off"
   required
   />

   <label htmlFor="username" className="register-font">Käyttäjänimi</label>
   <input
   type="text"
   id="username"
   placeholder="MikkoMallikas12"
   autoComplete="off"
   required
   />

   <label htmlFor="email" className="register-font"> Sähköposti </label>
   <input
   type="email"
   id="email"
   placeholder="your.email@example.com"
   autoComplete="off"
   required
   />

   <label htmlFor="password" className="register-font"> Salasana </label>
   <input 
   type="password"
   id="password"
   placeholder="***************"
   autoComplete="off"
   required
   />
   <button className="register-button"> Rekisteröidy</button>
   
  </form>
</section>

  )
}
