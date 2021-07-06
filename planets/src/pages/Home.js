import React, {useState, useEffect} from 'react'
import "./Home.css"
import Header from "../components/Header"
import data from "../data.json"
import PlanetCard from "../components/PlanetCard"

const planetData = data

console.log(planetData)

const Home = () => {
  const [activePlanet, setActivePlanet] = useState("")
  const [shownPlanet, setShownPlanet] = useState("")


  useEffect(() => {
   compare()
  });

  const selectedPlanet = (val) => {
    setActivePlanet(val);
  } 

 
  const compare = () => {
    if(!activePlanet) {
      setShownPlanet("")
    }
     planetData.forEach(item => {
      if(item.name === activePlanet) {  
        setShownPlanet(item) 

      } 
      else return
    })


    
  }
  
  // console.log(activePlanet, "home")
  console.log(shownPlanet, "shown")
  return (
    <div className="home">
      <Header  selectedPlanet={selectedPlanet}/>
      <main>
       
        <PlanetCard data={shownPlanet} text="overview" />

      </main>
    </div>
  )
}

export default Home
