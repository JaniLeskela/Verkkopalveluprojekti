import "./alkoholi.css"

import Input from "../../components/input"
 function Alkoholi({handleChange}) {
  return (
<div>
      <h2 className="sidebar-title alkoholi-title">Alkoholi pitoisuus </h2>

      <div>

      <label className="sidebar-label-container">
          <input onChange={handleChange} 
          type="radio"
          value=""
          name="test3"/>
          <span className="checkmark"></span> Kaikki Tuotteet
        </label>

        <Input
        handleChange={handleChange}
        value={0}
        title="Alkoholittomat"
        name="test3"/>


        <Input
        handleChange={handleChange}
        value={8}
        title="Alle 8% alkoholia"
        name="test3"/>

        <Input
        handleChange={handleChange}
        value={20}
        title="9-20% Alkoholia"
        name="test3"/>

        <Input
        handleChange={handleChange}
        value={42}
        title="Yli 20% Alkoholia"
        name="test3"/>


      </div>
    </div>
  )
} export default  Alkoholi
