import './App.css';
import Cena from "./components/Cena"
/* import Card from './components/Card.js';
import Photo1 from "./images/rey_sisebuto.png"
import Photo2 from "./images/rey_leogivildo.png"
import Photo3 from "./images/rey_atanagildo.png"
import Photo4 from "./images/rey_incognito.png" */



function App() {

  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]



  return(
    <>
    <div className="card-container">
      {reyes.map(rey=>{
      return <Cena texto={`${rey.nombre.toUpperCase()} ha comido ${rey.vacasComidas} vacas en sus ${rey.reinado} años de reinado`}
      img={rey.nombre.toLowerCase()}
      />}
      )}
    </div>
    </>
  )
}

export default App;


