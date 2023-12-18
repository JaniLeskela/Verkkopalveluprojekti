import "./sidebar.css"
import Kategoria from "./kategoria/kategoria"



 function Sidebar({handleChange}) {


    return (
   
        <>
        <section className="sidebar">
        
          <Kategoria handleChange={handleChange}/>

        </section>

        
        </>
   
  )
} export default  Sidebar
