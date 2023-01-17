import React, { useState } from 'react'
import "../stylesheets/Cena.css"

function Cena({nombre,color,precio,setTotal}) {  
    const ruta="https://www.html6.es/img/rey_"
    let imagen=`${ruta}${nombre.toLowerCase()}.png`
    
    const comprar=(e)=>{

        setTotal(e=>e+precio)
    
        console.log(e.target.parentNode.parentNode.style.display="none")

    }

    

    return (
        <>
          <div className="rey" style={{backgroundColor:color}}>
              <h1>{nombre}</h1>
              <img src={imagen} alt="" />
              <div className="precio">
                <h2>{precio}$</h2>
                <button onClick={comprar}>Comprar</button>
              </div>
          </div>  
        </>
    )
}

export default Cena
