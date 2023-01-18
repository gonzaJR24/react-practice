function Filter({rey}) {

    const filterArray=rey.filter(e=>!e.nombre.includes("g"))
    const del=e=>e.target.parentNode.remove()
    const fin=rey.find(rey=>rey.nombre.includes("x")||rey.nombre.includes("e"))

    return(
        <>

        {filterArray.map((rey,index)=><div key={index} style={{padding:"10px"}}>{rey.nombre}
        <button style={{marginLeft:"10px"}} onClick={del}>Eliminar</button>
        </div>)
        }

        {fin?<p>{fin.nombre}</p>:<p>No se encontro nada</p>}

        
        </>
    )
}

export default Filter;