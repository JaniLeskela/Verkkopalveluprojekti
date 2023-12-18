import Input from "../../Input/input"
import "./kategoria.css"

 function Kategoria({handleChange}) {
  return (
    <div>

      <div className="title-container">
      <h2 className="sidebar-title">Kategoriat </h2>
      </div>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} 
          type="radio"
          value=""
          name="test"/>
          <span className="checkmark"></span> Kaikki Tuotteet
        </label>

        <Input
        handleChange={handleChange}
        value="Oluet"
        title="Oluet"
        name="test"/>

        <Input
        handleChange={handleChange}
        value="Liköörit ja Katkerot"
        kategoria= "Liköörit ja Katkerot"
        title="Liköörit ja Katkerot"
        name="test"/>

        <Input
        handleChange={handleChange}
        value="Vodkat ja Viinat"
        title="Vodkat ja Viinat"
        name="test"/>

      </div>
    </div>
  )
} export default  Kategoria
