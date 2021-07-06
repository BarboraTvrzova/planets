import React, {useState, useEffect} from 'react'
import "./PlanetCard.css" 
import iconSource from "../assets/icon-source.svg"


const PlanetCard = ({data,text}) => {
  const[activeText, setActiveText] = useState(text)
  
  useEffect(()=>{setActiveText("overview")},[data.name])

 
  if (data) {
    
   let text 
   switch (activeText) {
     case "overview":
       text=data.overview.content;
       break;
     case "geology":
       text=data.geology.content;
       break
      case "structure":
        text=data.structure.content;
        break
     default:
      text=data.overview.content
       break;
   }
  return (
    <div className="planet-card">
      <div className="main-content">
        <div className="planet-picture">
          <div className={`planet-${data.name}`}></div>
        </div>
        <div className="text-content">
          <h1>{data.name}</h1>
          <p>{text}</p>
          <p><span>Source : <a href={data.overview.source} target="_blank" rel="noreferrer" >Wikipedia <img src={iconSource} alt=""/></a></span></p>

          <div className="info-accordion">
            <button className={activeText==="overview"?`btn bg-${data.name}`:"btn bg-black"} onClick={()=>setActiveText("overview")}><span>01</span> Overview</button>
            <button className={activeText==="structure"?`btn bg-${data.name}`:"btn bg-black"} onClick={()=>setActiveText("structure")}><span>02</span> Internal Structure</button>
            <button className={activeText==="geology"?`btn bg-${data.name}`:"btn bg-black"} onClick={()=>setActiveText("geology")}><span>03</span> Surface geology</button>
          </div>
        </div>
        
      </div>
    </div>
  
  )
        }
        else {
          return (
            <div className="heading">
            <h1 className="main-heading">The Planets</h1>
            <p>There are eight planets that orbit around the Sun. In order, going from the closest planet to the Sun, to the one that is farthest away, they are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. There is a lot of difference between the planets. </p>
            <p>Click on each planet to see the details</p>
          </div>

          )
          
        }
}
export default PlanetCard
