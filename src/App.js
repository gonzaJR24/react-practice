import './App.css';
import Cena from "./components/Cena"
/* import Card from './components/Card.js';
import Photo1 from "./images/rey_sisebuto.png"
import Photo2 from "./images/rey_leogivildo.png"
import Photo3 from "./images/rey_atanagildo.png"
import Photo4 from "./images/rey_incognito.png" */
import {useState} from 'react';


function App() {

  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]

  const [total,setTotal]=useState(0)
  let [cantidad,setCantidad]=useState(reyes.length)

  return(
    <>
    <h1>Total a pagar: {total}$</h1>
    <div className="main-box">
      {reyes.map(rey=><Cena nombre={rey.nombre} color={rey.color} precio={rey.precio} setTotal={setTotal}  />)}
    </div>

    
    </>
  )
}

export default App;
