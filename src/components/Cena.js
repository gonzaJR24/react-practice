import "../stylesheets/Cena.css"

function Cena({texto,img}) {  

    return (
        <>
        <div className="card">
          <p>{texto}</p>
          <img src={`https://www.html6.es/img/rey_${img}`} alt="" />
        </div>
        </>
    )
}

export default Cena
