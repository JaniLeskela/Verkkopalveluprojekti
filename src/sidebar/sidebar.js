import "./sidebar.css"

import Alkoholi from "./alkoholi/alkoholi"
import Kategoria from "./kategoria/kategoria"
import Hinta from "./hinta/hinta"


 function Sidebar({handleChange}) {


    return (
   
        <>
        <section className="sidebar">
          <div className="logo-container">

          <h1>KG Store</h1>

        </div>

          <Kategoria handleChange={handleChange} />
          <Alkoholi handleChange={handleChange} />
          <Hinta handleChange={handleChange} />

        </section>

        
        </>
   
  )
} export default  Sidebar
