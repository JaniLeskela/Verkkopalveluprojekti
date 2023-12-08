import "./hinta.css"

import Input from "../../components/input"
 function Hinta({handleChange}) {
console.log(handleChange);
  return (
    <div className="mr">
      <h2 className="sidebar-title price-title">  Tuotteen hinta </h2>

      <div>
      <label className="sidebar-label-container">
          <input onChange={handleChange} 
          type="radio"
          value=""
          name="test2"/>
          <span className="checkmark"></span> Kaikki Tuotteet
        </label>

        <Input
        handleChange={handleChange}
        value={10}
        title="Alle 10€"
        name="test2"/>

        <Input
        handleChange={handleChange}
        value={20}
        title="10 - 20€"
        name="test2"/>

        <Input
        handleChange={handleChange}
        value={50}
        title="Yli 20€"
        name="test2"/>
      
      </div>
    </div>
  )
} export default  Hinta
