import React from 'react'
import "./Header.css"

const Header = ({selectedPlanet}) => {

  return (
    <nav className="main-header">
      <div onClick={()=>selectedPlanet(null)} className="logo">
        The planets
      </div>
      <nav>
        <ul className="main-nav">
          <li onClick={()=>selectedPlanet("Mercury")}>Mercury</li>
          <li onClick={()=>selectedPlanet("Venus")}>Venus</li>
          <li onClick={()=>selectedPlanet("Earth")}>Earth</li>
          <li onClick={()=>selectedPlanet("Mars")}>Mars</li>
          <li onClick={()=>selectedPlanet("Jupiter")}>Jupiter</li>
          <li onClick={()=>selectedPlanet("Saturn")}>Saturn</li>
          <li onClick={()=>selectedPlanet("Uranus")}>Uranus</li>
          <li onClick={()=>selectedPlanet("Neptune")}>Neptune</li>
        </ul>
      </nav>
    </nav>
  )
}

export default Header
